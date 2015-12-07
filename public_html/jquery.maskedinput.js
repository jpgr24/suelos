(function($) {
	//Helper Functions for Caret positioning
	function getCaretPosition(ctl){
		var res = {begin: 0, end: 0 };
		if (ctl.setSelectionRange){
			res.begin = ctl.selectionStart;
			res.end = ctl.selectionEnd;
		}else if (document.selection && document.selection.createRange){
			var range = document.selection.createRange();			
			res.begin = 0 - range.duplicate().moveStart('character', -100000);
			res.end = res.begin + range.text.length;
		}
		return res;
	};

	function setCaretPosition(ctl, pos){		
		if(ctl.setSelectionRange){
			ctl.focus();
			ctl.setSelectionRange(pos,pos);
		}else if (ctl.createTextRange){
			var range = ctl.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};
	
	//Predefined character definitions
	var charMap={
		'9':"[0-9]",
		'a':"[A-Za-z]",
		'*':"[A-Za-z0-9]"
	};
	
	//Helper method to inject character definitions
	$.mask={
		addPlaceholder : function(c,r){
			charMap[c]=r;
		}
	};
	
	$.fn.unmask=function(){
		return this.trigger("unmask");
	};
	
	//Main Method
	$.fn.mask = function(mask,settings) {	
		settings = $.extend({
			placeholder: "_",
			completed: null
		}, settings);
			
		//Build Regex for format validation
		var reString="^";	
		for(var i=0;i<mask.length;i++)
			reString+=(charMap[mask.charAt(i)] || ("\\"+mask.charAt(i)));					
		reString+="$";
		var re = new RegExp(reString);

		return this.each(function(){		
			var input=$(this);
			var buffer=new Array(mask.length);
			var locked=new Array(mask.length);		

			//Build buffer layout from mask
			for(var i=0;i<mask.length;i++){
				locked[i]=charMap[mask.charAt(i)]==null;
				buffer[i]=locked[i]?mask.charAt(i):settings.placeholder;					
			}
			
			/*Event Bindings*/
			function focusEvent(){					
				checkVal();
				writeBuffer();
				setTimeout(function(){
					setCaretPosition(input[0],0);
				},0);
			};			
			input.bind("focus",focusEvent);

			input.bind("blur",checkVal);
			
			//Paste events for IE and Mozilla thanks to Kristinn Sigmundsson
			if ($.browser.msie) 
				this.onpaste= function(){setTimeout(checkVal,0);};                     
			else if ($.browser.mozilla)
				this.addEventListener('input',checkVal,false);
			
			var ignore=false;  //Variable for ignoring control keys
			
			function keydownEvent(e){
				var pos=getCaretPosition(this);													
				var k = e.keyCode;
				ignore=(k < 16 || (k > 16 && k < 32 ) || (k > 32 && k < 41));
				
				//delete selection before proceeding
				if((pos.begin-pos.end)!=0 && (!ignore || k==8 || k==46)){
					clearBuffer(pos.begin,pos.end);
				}	
				//backspace and delete get special treatment
				if(k==8){//backspace					
					while(pos.begin-->=0){
						if(!locked[pos.begin]){								
							buffer[pos.begin]=settings.placeholder;
							if($.browser.opera){
								//Opera won't let you cancel the backspace, so we'll let it backspace over a dummy character.								
								writeBuffer(pos.begin);
								setCaretPosition(this,pos.begin+1);
							}else{
								writeBuffer();
								setCaretPosition(this,pos.begin);
							}									
							return false;								
						}
					}						
				}else if(k==46){//delete
					clearBuffer(pos.begin,pos.begin+1);
					writeBuffer();
					setCaretPosition(this,pos.begin);
					return false;
				}else if (k==27){
					clearBuffer(0,mask.length);
					writeBuffer();
					setCaretPosition(this,0);
					return false;
				}
									
			};
			input.bind("keydown",keydownEvent);

			function keypressEvent(e){					
				if(ignore){
					ignore=false;
					return;
				}
				e=e||window.event;
				var k=e.charCode||e.keyCode||e.which;

				var pos=getCaretPosition(this);					
				var caretPos=pos.begin;	
				
				if(e.ctrlKey || e.altKey){//Ignore
					return true;
				}else if ((k>=41 && k<=122) ||k==32 || k>186){//typeable characters
					while(pos.begin<mask.length){	
						var reString=charMap[mask.charAt(pos.begin)];
						var match;
						if(reString){
							var reChar=new RegExp(reString);
							match=String.fromCharCode(k).match(reChar);
						}else{//we're on a mask char, go forward and try again
							pos.begin+=1;
							pos.end=pos.begin;
							caretPos+=1;
							continue;
						}

						if(match)
							buffer[pos.begin]=String.fromCharCode(k);
						else
							return false;//reject char

						while(++caretPos<mask.length){//seek forward to next typable position
							if(!locked[caretPos])							
								break;							
						}
						break;
					}
				}else
					return false;								

				writeBuffer();
				if(settings.completed && caretPos>=buffer.length)
					settings.completed.call(input);
				else
					setCaretPosition(this,caretPos);
				
				return false;				
			};
			input.bind("keypress",keypressEvent);

			/*Helper Methods*/
			function clearBuffer(start,end){
				for(var i=start;i<end;i++){
					if(!locked[i])
						buffer[i]=settings.placeholder;
				}				
			};
			
			function writeBuffer(pos){
				var s="";
				for(var i=0;i<mask.length;i++){
					s+=buffer[i];
					if(i==pos)
						s+=settings.placeholder;
				}
				input.val(s);
				return s;
			};
			
			function checkVal(){	
				//try to place charcters where they belong
				var test=input.val();
				var pos=0;
				for(var i=0;i<mask.length;i++){
					if(!locked[i]){
						while(pos++<test.length){
							//Regex Test each char here.
							var reChar=new RegExp(charMap[mask.charAt(i)]);
							if(test.charAt(pos-1).match(reChar)){
								buffer[i]=test.charAt(pos-1);
								break;
							}									
						}
					}
				}
				var s=writeBuffer();
				if(!s.match(re)){							
					input.val("");	
					clearBuffer(0,mask.length);
				}					
			};
			
			input.one("unmask",function(){
				input.unbind("focus",focusEvent);
				input.unbind("blur",checkVal);
				input.unbind("keydown",keydownEvent);
				input.unbind("keypress",keypressEvent);
				if ($.browser.msie) 
					this.onpaste= null;                     
				else if ($.browser.mozilla)
					this.removeEventListener('input',checkVal,false);
			});
							
		});
	};
})(jQuery);