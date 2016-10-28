<?
$source = 'http://promo.babyblog.ru/otrivin_baby/';


?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
	<title><? if(isset($title)){
		echo $title;
	}else
	{
		echo 'BabyBlog';
	};?></title>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta property="og:title" content="БэбиБлог - беременность, календарь беременности, дневники" />
 <meta property="og:type" content="image" />
 <meta property="og:url" content="https://www.babyblog.ru/" />
 <!-- <meta property="og:image" content="http://wogcafe.ua/stickers-ru/img/box.png" />     -->
 <meta property="og:description" content="Встречайте БэбиБлог в мессенджерах!" />  
	
	
	<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic,700italic|PT+Sans+Narrow:400,700|PT+Sans+Caption:400,700&subset=cyrillic-ext,latin-ext">
	<link rel="stylesheet" type="text/css" href="<? echo $source; ?>css/fonts.css">
	<link rel="stylesheet" type="text/css" href="<? echo $source; ?>css/styles_main.css">
	<link rel="stylesheet" type="text/css" href="<? echo $source; ?>css/responsive.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&subset=cyrillic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,500i" rel="stylesheet">
    <link href="<? echo $source; ?>css/bootstrap-datepicker.min.css" rel="stylesheet" type="text/css">
    <link href="<? echo $source; ?>css/bootstrap-datepicker.standalone.min.css" rel="stylesheet" type="text/css">
    <link href="<? echo $source; ?>css/styles.css" rel="stylesheet" type="text/css"/>
    <link href="<? echo $source; ?>css/main.css" rel="stylesheet" type="text/css">

	  <script src="<? echo $source; ?>js/jquery.min.js"></script>

    <script src="https://st.babyblog.ru/st20330/js/api/build/babyblog/bbapi.min.js"></script>
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-86413935-1', 'auto');
	  ga('send', 'pageview');
	</script>
</head>
