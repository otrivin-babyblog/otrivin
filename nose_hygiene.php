<?
$title ='Гигиена носика';
$og_title = 'Гигиена носика';
$og_url = 'nose_hygiene.php';
$og_image = 'img/shares/share_gigiena_nosika.jpg';
$og_description = 'Как помочь малышу, если у него заложен носик? Каждая мама довольно часто задаётся этим вопросом. Кроха в таком состоянии капризничает, плачет, плохо спит, мало кушает...';
$ref = $_SERVER['HTTP_REFERER'];
$ref_title = explode('/',$ref);
if (count($ref_title) > 1){
$ref_title = $ref_title[count($ref_title)-1];

		if ($ref_title == 'calendar.php'){
			$ref_title = 'Планируй день';
		}else
		{
			$ref_title = 'Главная';	
		}

}else
{
$ref_title = 'Главная';	
}


include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
 ?>
 <link href="<? echo $source; ?>css/style_active_noise.css" rel="stylesheet" type="text/css"/>
<body>
    <div class="wrapper nose_hygiene">
      <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="<? echo $source; ?>img/title-img-nose-hygiene.jpg" alt="Гигиена носика">
          <h1 class="main-title">Гигиена носика</h1>
        </div>
        <div class="breadcrumb">
          <a href="<? echo $ref;?>" class="breadcrumb__link"><? echo $ref_title;?></a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Гигиена носика</a>
        </div>
        <p class="page-about">Как помочь малышу, если у него заложен носик? Каждая мама довольно часто задаётся этим вопросом. Кроха в таком состоянии капризничает, плачет, плохо спит, мало кушает... </p>
        <div class="complex-wrapper">
          <!-- Lots of hacks inside, beware -->
          <h3 class="complex__name">Что делать, если у малыша заложен носик?</h3>
          <div class="complex-cta">
            <img src="<? echo $source; ?>img/elephant-right.png" alt="Слоненок" class="complex-cta__img">
            <div class="complex-cta__header">Используйте комплекс Отривин бэби</div>
            <img src="<? echo $source; ?>img/elefant_twice.png" alt="Слоненок" class="complex-cta__img">
          </div>
          <div class="complex-step _active" data-name="drops">
            <div class="complex-step__arrow"></div>
            <div class="complex-step-content">
              <div class="complex-step-wrapper">
                <h2 class="complex-step__name"><span>шаг 1</span></h2>
                <p class="complex-step__about">Увлажните полость носика малыша <a href="">Каплями</a> или <a href="">Спреем</a> Отривин Бэби для того, чтобы размягчить корочки и слизь</p>
                <img src="<? echo $source; ?>img/complex-step1.png" alt="" class="complex-step__img">
              </div>
            </div>
          </div>
          <div class="complex-step" data-name="aspirator">
            <div class="complex-step__arrow complex-step__arrow_reversed"></div>
            <div class="complex-step-content">
              <div class="complex-step-wrapper">
                <h2 class="complex-step__name"><span>шаг 2</span></h2>
                <p class="complex-step__about">Освободите полость носа от корочек и слизи с помощью <a href="">Аспиратора</a>. Во избежание повторного инфицирования, используйте насадки однократно</p>
                <img src="<? echo $source; ?>img/complex-step2.png" alt="" class="complex-step__img">
              </div>
            </div>
          </div>
        </div>
        <div class="product-about _active" data-name="drops">
          <h2 class="page-title">ОТРИВИН БЭБИ, капли назальные</h2>
          <img src="<? echo $source; ?>img/nasal-drops-about.png" alt="" class="product__img">
          <ul class="product-steps">
            <li class="product__step">Капли Отривин бэби – это стерильный изотонический солевой раствор без консервантов  в удобных одноразовых флаконах-капельницах.  Уровень pH близок к уровню слизистой носа.</li>
            <li class="product__step">Применяются у младенцев с первых дней жизни для размягчения носовой слизи и корочек.</li>
            <li class="product__step">Предназначены для мягкого орошения слизистой оболочки носа при заложенности, например, во  время простудных заболеваний или  при  аллергии.  Также используются для увлажнения слизистой оболочки носа при сухости и раздражении, и  для ежедневной гигиены полости носа у детей.</li>
            <li class="product__step">Для гигиеничного удаления слизи увлажните носик малыша каплями Отривин бэби, а затем освободите полость носа от слизистого секрета  с помощью аспиратора Отривин бэби.</li>
            <li class="product__step">При регулярном использовании увеличивают способность слизистой бороться с бактериями и вирусами, а также помогают избежать простудных и аллергических заболеваний.</li>
          </ul>
        </div>
        <div class="product-about _active" data-name="drops">
          <h2 class="page-title">ОТРИВИН БЭБИ, спрей назальный</h2>
          <ul class="product-steps">
            <li class="product__step">Отривин Бэби спрей - изотонический раствор морской соли. Без консервантов.</li>
            <li class="product__step">Применяется у младенцев с 3х месяцев для размягчения носовой слизи и корочек.</li>
            <li class="product__step">Предназначен для мягкого орошения слизистой оболочки носа при заложенности, например, во  время простудных заболеваний или  при  аллергии.  Также используется для увлажнения слизистой оболочки носа при сухости и раздражении, и  для ежедневной гигиены полости носа у детей.</li>
            <li class="product__step">Для гигиеничного удаления слизи  увлажните носик малыша спреем  Отривин бэби, а затем освободите полость носа от слизистого секрета  с помощью аспиратора Отривин бэби.</li>
            <li class="product__step">При регулярном использовании увеличивает способность слизистой бороться с бактериями и вирусами, а также помогает избежать простудных и аллергических заболеваний.</li>
          </ul>
        </div>
        <div class="product-about" data-name="aspirator">
          <h2 class="page-title">ОТРИВИН БЭБИ, аспиратор назальный</h2>
          <ul class="product-steps">
            <li class="product__step">Аспиратор Отривин бэби -  это приспособление для мягкого очищения носика малыша.</li>
            <li class="product__step">Применяется у младенцев с первых дней жизни, когда малыш еще не умеет самостоятельно сморкаться.</li>
            <li class="product__step">Помогает при насморке, а также используется  в гигиенических целях для мягкого удаления слизи из носика ребенка.</li>
            <li class="product__step">Очень важно перед применением аспиратора использовать  капли или спрей Отривин бэби для размягчения слизистого секрета и корочек.</li>
            <li class="product__step">В целях соблюдения гигиены и для исключения повторного инфицирования не забывайте своевременно менять одноразовые насадки.</li>
            <li class="product__step">Важно помнить, что своевременное удаление слизи и корочек из носа способствует предотвращению осложнений, например, отита, гайморита и кашля.</li>
          </ul>
        </div>
		<div style="display: flex;  flex-wrap: wrap;">
		  <a id="piluli" class="otrivin-instructions"  href="http://www.piluli.ru/product/Otrivin_behbi" target="_blank"  style="margin: 10px auto;">Купить на Piluli</a>
       
	      <a id="apteka" class="otrivin-instructions" href="http://apteka.ru/search/?q=%D0%BE%D1%82%D1%80%D0%B8%D0%B2%D0%B8%D0%BD+%D0%B1%D1%8D%D0%B1%D0%B8&order=products%2Cmaterials&vendor=&shop=" target="_blank"  style="margin: 10px auto;">Купить на Apteka.ru</a>
       </div>
        <div class="product-video-wrapper">
          <div class="product-video__name">Как правильно пользоваться комплексом Отривин Бэби?</div>
          <h3 class="product-video__title">Смотрите видео-инструкцию</h3>
          <div class="product-video">
            <div class="responsive-video">
              <iframe width="911" height="512" src="https://www.youtube.com/embed/9hKbR32sEMo?iv_load_policy=3?&rel=0&showinfo=0&modestbranding=0&autohide=1" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          <a href="http://www.otrivin.ru/products/otrivin-baby-aspirator-instruktsiya.html" target="_blank" class="btn btn_product-video">смотреть инструкцию по применению</a>
        </div>
        <div class="content-footer">
          <div class="social">
            <p class="social__text">Поделиться в социальных сетях</p>
            <ul class="social-wrap">
              <li class="social-item"><a href="https://www.babyblog.ru/" class="social_vk"><div class="ya-share2" data-services="vkontakte" data-counter=""></div></a></li>
              <li class="social-item"><a href="https://www.babyblog.ru/" class="social_fc"><div class="ya-share2" data-services="facebook"></div></a></li>
              <li class="social-item"><a href="https://www.babyblog.ru/" class="social_ok"><div class="ya-share2" data-services="odnoklassniki"></div></a></li>
              <li class="social-item"><a href="https://www.babyblog.ru/" class="social_g"><div class="ya-share2" data-services="gplus"></div></a></li>
              <li class="social-item"><a href="https://www.babyblog.ru/" class="social_tw"><div class="ya-share2" data-services="twitter"></div></a></li>
              <li class="social-item"><a href="https://www.babyblog.ru/" class="social_ml"><div class="ya-share2" data-services="moimir"></div></a></li>
            </ul>
          </div>
        </div>
        <img src="<? echo $source; ?>img/disclaimer.jpg" alt="Имеются противопоказания. Необходимо проконсультироваться со специалистом" class="disclaimer">
      </div>
       <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer_main.php") ?>
    </div>
    <script src="<? echo $source; ?>js/jquery.min.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
 <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>