<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Evaluación del recurso suelo</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="style.css" />
<!--[if lte IE 6]><link rel="stylesheet" type="text/css" href="ie.css" /><![endif]-->




<!-- Start WOWSlider.com HEAD section -->
	<link rel="stylesheet" type="text/css" href="engine1/style.css" media="screen" />
	
	
    
	<script type="text/javascript" src="engine1/jquery.js"></script>
<!-- End WOWSlider.com HEAD section -->












<!-- Start WOWSlider.com HEAD section -->
	<link rel="stylesheet" type="text/css" href="engine1/style.css" media="screen" />
	<script type="text/javascript" src="engine1/jquery.js"></script>
<!-- End WOWSlider.com HEAD section -->



<!-- Start WOWSlider.com HEAD section -->
	<link rel="stylesheet" type="text/css" href="engine2//style.css" media="screen" />
	<script type="text/javascript" src="engine2//jquery.js"></script>
<!-- End WOWSlider.com HEAD section -->



<!-- Start WOWSlider.com HEAD section -->
	<link rel="stylesheet" type="text/css" href="engine2//style.css" media="screen" />
	<script type="text/javascript" src="engine2//jquery.js"></script>
<!-- End WOWSlider.com HEAD section -->



<!-- Start WOWSlider.com HEAD section -->
	<link rel="stylesheet" type="text/css" href="engine3//style.css" media="screen" />
	<script type="text/javascript" src="engine3//jquery.js"></script>
<!-- End WOWSlider.com HEAD section -->



<!-- Start WOWSlider.com HEAD section -->
	<link rel="stylesheet" type="text/css" href="engine4//style.css" media="screen" />
	<script type="text/javascript" src="engine4//jquery.js"></script>
<!-- End WOWSlider.com HEAD section -->

</head>

<script src="los_script.js" > 



</script>
<script src="jquery-1.6.2.min.js">
</script>

<script>

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }


function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }



 window.fbAsyncInit = function() {
    FB.init({
      appId      : '1570515483215478',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.3'
    });

 FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


$(document).ready(function(){
cambios();//Función donde está todo
$("#noticia").html($("#noticia1").html()); //Muestra el texto




});









</script>

<body>
<?php
 //define('FACEBOOK_SDK_V4_SRC_DIR', 'src/Facebook/');
require('autoload.php');
require_once('src/Facebook/FacebookSession.php');
FacebookSession::setDefaultApplication('1570515483215478', '3b396bc3f2f9839c280fedabca2cfe25');

?>
<!-- BEGIN wrapper -->
<div id="wrapper">
  <!-- BEGIN header -->
  



<div id="header">
    <ul>
      <li></li>
    </ul>
<p>&nbsp;</p>
    <table width="930" border="0" align="center" cellspacing="1">
      <tr>
        



<p id="cabeza"></p>
<p ><b></b></p>

<br>
<br>
<img src="imagen_encabezado.jpg"><!-- End WOWSlider.com BODY section -->
<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
</fb:login-button>
<div id="status">
</div>
<th width="919" scope="col">

</th>
</tr>
    </table>

   
    <div class="break"></div>
   
    <div class="ad498x60"></div>
    <div class="break"></div>
   
    <div class="break"></div>

  </div>
  <!-- END header -->
  <!-- BEGIN content -->

 <div id="izquierdo">
   <!-- begin ads -->
<ul>
 <li><b>Contenido</b></li>
      <li><span class="actual">Inicio</span></li>
<li><a href="introduccion.html">Introduccion</a></li>
<li><a href="definicion.html">Definicion de suelos</a></li>
      <li><a href="ecosistema.html">Funciones de los suelos en el ecosistema</a></li>
      <li><a href="unidades.html">Unidades de estudios de los suelos</a></li>
      <li><a href="composicion.html">Composición del suelo</a></li>
     
<li><a href="factores.html">Factores formadores del suelo</a></li>
      <li><a href="formacion.html">Procesos formadores del suelo</a></li>
      
<li><a href="caracteristicas.html">Características del suelo</a></li>
<li><a href="Prueba.html">Prueba</a></li>
 <li><a href="analisis.html">Datos</a></li>




     
    </ul>

    <div class="ads">

</div>
   
  </div>  <!-- END izquierdo -->





  <div id="content">
<div id="post">


</div>
<div id="noticia">
&nbsp;
</div>

<div id="noticia1">
<h2>Inicio</h2>
<p>
Este instrumento de aprendizaje está dirigido a estudiantes de los cursos de Ecología de la Escuela de Biología de la Universidad Central de Venezuela. Tiene como objeto instruir  sobre los conceptos básicos sobre suelos con un enfoque ecológico, así como su proceso de formación, sus características y las funciones que se le adjudican dentro de los ecosistemas naturales y manejados por el hombre, de manera que permita entender su importancia, conservación y uso racional.

</p>
<img  src='Imagen6.jpg'  id="imagen_noticia2" alt=''/>
</div>




<br>
<br>








 

   
 
<div class="ads"> </div>
    <!-- end post -->


    
    <!-- begin post -->
    <div class="post">
      

<!-- Start WOWSlider.com BODY section id=wowslider-container2 --><script type="text/javascript" src="engine2//wowslider.js"></script>
	<script type="text/javascript" src="engine2//script.js"></script>
<!-- End WOWSlider.com BODY section -->



<!-- Start WOWSlider.com BODY section id=wowslider-container2 -->
	
	<script type="text/javascript" src="engine2//wowslider.js"></script>
	<script type="text/javascript" src="engine2//script.js"></script>
<!-- End WOWSlider.com BODY section -->

    </div>
 <div class="ads"></div>
    <p><!-- end post -->
      <!-- begin post -->
    </p>
    
  
    
    
    
   
    
    <!-- begin post navigation -->
    <div class="postnav">


      <ul>

        



        <li><a href="introduccion.html">&raquo;</a></li>
      </ul>
<div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>
      <div class="break"></div>
    </div>    <!-- end post navigation -->
  </div>
  <!-- END content -->
  <!-- BEGIN sidebar -->
  <div id="sidebar">
   <!-- begin ads -->
<br>

<br>

    <div class="ads">
<br>

<br>
<br>

<br>
<br>

</div>
    <!-- end ads -->
    <!-- begin search -->
   
    <!-- end search -->
    <div class="wrapper">
      <!-- begin popular posts -->
      &nbsp;
      <!-- end popular posts -->
      <!-- begin flickr photos -->
     
      <div class="flickr"> &nbsp;</div>
      <!-- end flickr photos -->
      <!-- begin featured video -->
      
      <div class="video"> &nbsp; </div>
      <!-- end featured video -->
      <!-- begin tags -->
      
      <div class="tags"> </div>
      <!-- end tags -->
      <!-- BEGIN left -->
      <div class="l sbar">
        <!-- begin categories -->
        &nbsp;
        <!-- end categories -->
        <!-- begin pages -->
        &nbsp;
        <!-- end pages -->
      </div>
      <!-- END left -->
      <!-- BEGIN right -->
      <div class="r sbar">
        <!-- begin archives -->
        <h2>&nbsp;</h2>
        &nbsp;
        <!-- end archives -->
        <!-- begin blogroll -->
        &nbsp;
        <!-- end blogroll -->
        <!-- begin meta -->
       
        <!-- end meta -->
 
      </div>
      <!-- END right -->
    </div>
  <div class="ads"> &nbsp;</div>
  </div>  <!-- END sidebar -->

  <!-- BEGIN footer -->
  <div id="footer">
   
    
  </div>
  <!-- END footer -->
</div>
<!-- END wrapper -->
<div align=center>This template  downloaded form <a href='http://all-free-download.com/free-website-templates/'>free website templates</a></div></body>
</html>
