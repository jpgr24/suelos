function cambios(){ //Función principal, cambia los textos del documento

$("#cabeza").html("<b>EL SUELO</b>");
//$("#subtitulo b").text($(".actual").text());
bib="'bibliografia.html'";
if($("#subtitulo").text()!="Lecturas complementarias")
$("#izquierdo ul").append("<li><a href="+bib+">Lecturas complementarias</a></li>");
else
$("#izquierdo ul").append("<li><span class='actual'>Lecturas complementarias</li>");
z=1;
regi="<li><a href='registrar.html'>Registrarse</a></li>";
$("#izquierdo ul").append(regi);

$("#cambio1").css({"background-color":"#000000","color":"#726114", "font-family":"Lucida Sans"});
actual=1;
$("#noticia").html($("#noticia1").html());
//Además de mostrarse los cambios a la izquierda se muestran en el documento
$("boton1").text($("#cambio1").text());

$("boton2").text($("#cambio2").text());
$("boton3").text($("#cambio3").text());
$("boton4").text($("#cambio4").text());
$("boton5").text($("#cambio5").text());
$("boton6").text($("#cambio6").text());

//Cambia los colores de los botones
cambio_boton("#cambio1", 1);
cambio_boton("#cambio2", 2);
cambio_boton("#cambio3", 3);
cambio_boton("#cambio4", 4);
cambio_boton("#cambio5", 5);
cambio_boton("#cambio6", 6);
cambio_boton("boton1", 1);
cambio_boton("boton2", 2);
cambio_boton("boton3", 3);
cambio_boton("boton4", 4);
cambio_boton("boton5", 5);
cambio_boton("boton6", 6);

//El color inicial del primer botón.
$("#cambio1").css({"background-color":"#EBF1DE","color": "#1F497d", "font-family":"Lucida Sans"});
$("boton1").css({"background-color":"#EBF1DE","color": "#1F497d", "font-family":"Lucida Sans"});
camb2=$("#cambio2").text();
//Texto inicial de los botones que cambian los textos
$("#seguir").text(camb2);
$("#seguir").css({"background-color":"#EBF1DE","color":"#FF0000", "font-family":"Lucida Sans"});

$("#seguir").mouseenter(function(){
$("#seguir").css({"background-color":"#EBF1DE","color":"#1F497d"});});

$("#seguir").mouseleave(function(){

$("#seguir").css({"background-color":"#EBF1DE","color":"#FF0000"});});

$("#seguir").click(function(){
z++;

cambiar(z,actual,long);//Cambia los textos según el botón y la cantidad de botones.
actual=z;

});

$("#retroceder").css({"background-color":"#EBF1DE","color":"#FF0000", "font-family":"Lucida Sans"});
$("#retroceder").text("Anterior");
$("#retroceder").click(function(){
z--;

cambiar(z,actual,long);
actual=z;

});

$("#retroceder").mouseenter(function(){
$("#retroceder").css({"background-color":"#EBF1DE","color":"#1F497d"});});

$("#retroceder").mouseleave(function(){

$("#retroceder").css({"background-color":"#EBF1DE","color":"#FF0000"});});
}

function cambiar(z,actual,long){
//Cambia los textos
noti="#noticia"+z;
notiact="#noticia"+actual;
marcact="#marca"+actual;
cambact="#cambio"+actual;
cambio="#cambio"+z;

//Muestra el texto actual
$("#noticia").html($(noti).html());

$(cambact).css({"background-color":"#EBF1DE","color":"#FF0000"});
camov=cambact+":hover";

botact="boton"+actual;
$(botact).css({"background-color":"#EBF1DE","color":"#FF0000"});

$(cambio).css({"background-color":"#EBF1DE","color":"#1F497d"});
boton="boton"+z;
$(boton).css({"background-color":"#EBF1DE","color":"#1F497d"});

//Si está en el último texto elimina el botón que lleva al texto siguiente
if(z==long){
$("#seguir").hide();


}

else{
//Lleva al texto siguiente
y=z+1;
camb2="#cambio"+y;
camb2=$(camb2).text();
$("#seguir").text(camb2)

$("#seguir").show();
}
if(z==1)
$("#retroceder").hide();
else{
y=z-1;
camb2="#cambio"+y;
camb2=$(camb2).text();
$("#retroceder").text(camb2)

$("#retroceder").show();

}
}


function cambio_boton(identificador, numero){
//Cambia los colores de los botones.
$(identificador).css({"background-color":"#EBF1DE","color":"#FF0000", "font-family":"Lucida Sans"});

$(identificador).mouseenter(function(){
if(z!=numero)
$(identificador).css({"background-color":"#EBF1DE","color": "#1F498d"});});

$(identificador).mouseleave(function(){
if(z!=numero)
$(identificador).css({"background-color":"#EBF1DE","color":"#FF0000"});});



 $(identificador).click(function(){
z=numero;
//Cambia el texto
cambiar(z,actual,long);
actual=z;
});

//Botón en la evaluación.
$("#prueba").css({"background-color":"#EBF1DE","color":"#FF0000", "font-family":"Lucida Sans"});
$("#prueba").mouseenter(function(){
$("#prueba").css({"background-color":"#EBF1DE","color": "#1F498d"});});

$("#prueba").mouseleave(function(){
$("#prueba").css({"background-color":"#EBF1DE","color":"#FF0000"});});

}

function aleatorio(y){
//Selecciona un número aleatorio de cero a "y".
 x=Math.random();
 x=x*y;
 s=Math.round(x);
if(s>x)
 s--;
return s;}




function ordenar_aleatorio(A, cantidad_total, cantidad_ordenar){
//Selecciona las preguntas según el tema, A son las preguntas, cantidad_total es el total de preguntas
//cantidad_ordenar: La cantidad de preguntas que se van a mostrar
ocupado=[];

for(i=0;i<cantidad_total;i++){
 ocupado[i]=0;
}


//Si ya el número de pregunta está, busca otro número.

for(i=0;i<cantidad_ordenar;i++){
 t=aleatorio(cantidad_total);
  if(ocupado[t]==1)
   while(ocupado[t]==1)
    t=aleatorio(cantidad_total);
  A[i]=t;
  ocupado[t]=1;
}

}

function repartir_pregunta(a,b,c,cantidad_pregunta){ 
//a: Las preguntas
//b: El número de preguntas
//c: Las preguntas a mostrar
 for(i=0;i<cantidad_pregunta;i++){
  j=b[i];
  c[i]=a[j];
}
 
}

function repartir_y_ordenar(a,b,c,cantidad_total,cantidad_pregunta){ //Ordena los números de las preguntas y las reparte
//a: las preguntas.
//b: Los números de las preguntas a mostrar.
//c: Las preguntas a mostrar.
ordenar_aleatorio(b,cantidad_total,cantidad_pregunta); //ordena aleatoriamente los números de las preguntas
repartir_pregunta(a,b,c,cantidad_pregunta); //Muestra las preguntas


}



function ordenar_seleccion_aleatorio(A, cantidad_total, cantidad_ordenar){ //Se eligen las preguntas
//La posición de las posibles preguntas
//A: El arreglo de las posibles preguntas
//cantidad_total: Cantidad de preguntas
//cantidad_ordenar: Cantidad mostrar

ocupado=[];

for(i=0;i<cantidad_total;i++){
 ocupado[i]=0; //No hay nada
}


for(i=0;i<cantidad_ordenar;i++){
 t=aleatorio(cantidad_total);
  if(ocupado[t]==1)
   while(ocupado[t]==1)
    t=aleatorio(cantidad_total);
  A[i]=t;
  ocupado[t]=1;
}
}

function corregir_seleccion(i,se,correcta){ //Corrige cada pregunta e indica cuál es la respuesta correcta si es incorrecta
//i: Número de pregunta a corregir
//Valor numérico de la posible respuesta
//Respuestas correctas
 aux=correcta[i]; //Asigna la respuesta correcta
//posición de las etiquetas de las posibles respuestas
j=4*i;
aux=aux+j;
co="#seleccion";
corr_sel=co+aux;
correccion=$(corr_sel).text();


retorno=0;

var correc;
var incorrec;
//Si es correcto
if(se=="Correcto"){


 //Muestra que su respuestas es correcta
 correc=" <correctitud><b>Correcto</b></correctitud>";

 retorno=1;

}else{//Caso cotrario


se=Number(se);

se=se+1;
se=se+j;
 se=co+se;

 incorrec="<incorrectitud><b> Respuesta incorrecta</b></incorrectitud>";

 correc="<correctitud> <b> Respuesta correcta</b></correctitud>";
//Indica si es incorrecta la respuesta
$(se).append(incorrec);
}

//Indica la posición correcta
$(corr_sel).append(correc);
return retorno;
}




function preguntas_seleccion_prueba(pr,resp,cantidad_pregunta,ubic,n,posible1, posible2, posible3){
//pr: Las preguntas a mostrar.
//resp: Las respuestas de cada pregunta
//cantidad_pregunta: Cantidad de cada pregunta
//ubic: Número de pregunta a mostrar
//n: Posición de pregunta a mostrar
//posible1: Posible respuesta.
//posible2: Posible respuesta.
//posible3: Posible respuesta.
//Se toman las posibles respuestas
posible=[];
posible[0]=posible1[ubic];
posible[1]=posible2[ubic];
posible[2]=posible3[ubic];

//Se inicia desocupadas todas las posiciones
ocu=[];
l=3;
for(i=0;i<l;i++){
 ocu[i]=0;
}
B=[];
//Se toma la posición de la respuesta correcta y se almacena
s=aleatorio(4);

B[s]=ubic;
x=4*n;
x=x+s;
x=x+1;
//Se muestra el texto de la respuesta correcta
selec1="#sel"+x;
selec2="#seleccion"+x;
correct=s;








if(correct==0){ //Si la respuesta de la primera posición es la respuesta correcta se ocupan las demás, si ya está se buscan las otras
 for(i=1;i<4;i++){
  t=aleatorio(l);
 
 
 if(ocu[t]==1){
  while(ocu[t]==1)
   t=aleatorio(l);
}

t=posible[t];
 r=resp[t];
 e=0;
 for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
  if(e==1){
   while(e==1){
    t=aleatorio(l);
    e=0;
    t=posible[t];
    r=resp[t];
     for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
   }
 
} 
 B[i]=t;
 ocu[t]=1;
 
}




}else if(correct==1){ //Si la respuesta correcta está en la segunda posición
//Se busca la posible respuesta para la primera posición
t=aleatorio(l);
t=posible[t];
 r=resp[t];
B[0]=t;
ocu[0]=1; //Se marca como ocupada
//Se busca las posibles respuesta para las otras posiciones
for(i=2;i<4;i++){
  t=aleatorio(l);
 
 //Si ya está se busca otra posible respuesta
 if(ocu[t]==1){
  while(ocu[t]==1)
   t=aleatorio(l);
}
t=posible[t];
 r=resp[t];

e=0;
 for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
  if(e==1){
   while(e==1){
    t=aleatorio(l);
    e=0;
    t=posible[t];
    r=resp[t];
     for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
   }

  
} 

 B[i]=t;
 ocu[t]=1;
  
}
}
else if(correct==3){ //Si está en la cuarta posición
  for(i=0;i<3;i++){
  t=aleatorio(l);
 
 
 if(ocu[t]==1){
  while(ocu[t]==1)
   t=aleatorio(l);
}

t=posible[t];
 r=resp[t];
 e=0;
 for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
  if(e==1){
   while(e==1){
    t=aleatorio(l);
    e=0;

    t=posible[t];
    r=resp[t];
     for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
   }

  
} 

 B[i]=t;
 ocu[t]=1;  
}
  
}else{ //Si está en la tercera posición

for(i=0;i<2;i++){
  t=aleatorio(l);

 
 if(ocu[t]==1){
  while(ocu[t]==1)
   t=aleatorio(l);
}
t=posible[t];
 r=resp[t];

e=0;
 for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
  if(e==1){
   while(e==1){
    t=aleatorio(l);
    e=0;
    t=posible[t];
    r=resp[t];
     for(j=0;j<i;j++){
  if(resp[B[j]]==r)
   e=1;
} 
   }

  
} 

 B[i]=t;
 ocu[t]=1;
  
}
t=aleatorio(l);

if(ocu[t]==1){
  while(ocu[t]==1)
   t=aleatorio(l);
}
t=posible[t];
r=resp[t];

e=0;
 for(j=0;j<2;j++){
  if(resp[B[j]]==r)
   e=1;
} 
  if(e==1){
   while(e==1){
    t=aleatorio(l);
    e=0;
    t=posible[t];
    r=resp[t];
     for(j=0;j<2;j++){
  if(resp[B[j]]==r)
   e=1;
} 
   }

  
} 



B[3]=t;


}

etiqueta1=[];
etiqueta2=[];
j=4*n;
//Se marcan las etiquetas y se inicia la marca en la posición de las etiquetas
for(i=0;i<4;i++){
j=j+1;
etiqueta1[i]="#sel"+j;
etiqueta2[i]="#seleccion"+j;
}
//Se toma la pregunta "ubic"
preg_sel=pr[ubic];
for(i=0;i<4;i++){ //Se asigna valores numéricos y texto a las etiquetas.
 $(etiqueta1[i]).attr("value",i);
$(etiqueta2[i]).text(resp[B[i]]);
}
//A la última posible respuesta se decide si se asigna la respuesta textual o "Ninguna de las anteriores"
des=aleatorio(2);
j=4*n;
j="#seleccion"+j;
 if(des==1)
  $(j).text("Ninguna de las anteriores");
preg_text="#preg_sel";
j=n+1;
preg_text=preg_text+j;
en=j+") ";
preg_sel=en+preg_sel;
$(preg_text).text(preg_sel);
v=4*n;
v=v+correct;
v=v+1;
v="#sel"+v;
q="Correcto";
$(v).attr("value",q);
cr=correct+1;
return cr;

}

