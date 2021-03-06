<?
$title ='Сохраняй важное';
$og_title = 'Сохраняй важное';
$og_url = 'save.php';
$og_image = 'img/shares/share_save_important.jpg';
$og_description = 'Нужно запомнить телефон соседки, адрес поликлиники или время занятий по рисованию? Записывай напоминания, прикрепляй стикеры на доску и сохраняй их прямо в режиме онлайн!';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
?> 
<body> 
    <div class="wrapper">
        <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
        <div class="content content-save">
          <div class="title-img">
            <img src="<? echo $source; ?>img/save-top.png" alt="Сохраняй важное">
            <h1 class="main-title">Сохраняй важное</h1>
          </div>
          <div class="breadcrumb">
            <a href="<? echo $source; ?>" class="breadcrumb__link">Главная</a>
            <span class="breadcrumb__separator">/</span>
            <a href="" class="breadcrumb__link breadcrumb__link_current">Сохраняй важное</a>
          </div>
          <h1 class="page-title page-save">ваша личная записная книжка</h1>
          <p class="page-about page-about_short font-save">Нужно запомнить телефон соседки, адрес поликлиники или время занятий по рисованию? Записывай напоминания, прикрепляй стикеры на доску и сохраняй их прямо в режиме онлайн! Когда шпаргалка потеряет актуальность, сотри ее одним нажатием на крестик.<br/><br/>
А если малыш приболел или ему просто прописали лекарства для профилактики, рецепт лечения всегда будет под рукой в нашем онлайн списке лекарств. Под названием для вашего удобства доступно описание средства.</p>
          <div class="save-wrapper">
		  
            <div class="phones-wrapper">
              <p class="title">Важные телефоны</p>
              <ul id="notes-list">
			  
						<!--li data-id="-1">
						<div class="top"><i onclick="javascript:void(0);" class="fa fa-times remSave"></i></div>
						  <div class="content">
							<p class="title">Участковый, Полиция</p>
						    <p class="phone">8 495 111 22 33</p>
							<p class="description">Участковый Иванов И.Д., каб. 303 вт-пт 9-18ч<br> сб-вс 11-17ч</p>
						  </div>
					    </li>-->
					   
						<li class="d12li li" data-id="-2">
						<div class="top"><i onclick="javascript:void(0);" class="fa fa-times remSave"></i></div>
						  <div class="content">
							<p class="title">Экстренная служба</p>
						    <p class="phone">112</p>
							<p class="description"></p>
						  </div>
					    </li>
			  
				<li class="d12li form">
                    <form id="add-note">
                      <div class="input">
                        <input id="title25" name="title" value="" placeholder="Название" type="text">
                      </div>
                      <div class="input">
                        <input maxlength="16" id="phone25" name="phone" value="" placeholder="Номер телефона" type="text">
                      </div>
                      <div class="input">
                        <textarea id="desc25" name="description" placeholder="Комментарий"></textarea>
                      </div>
                      <div id="btnSave" class="button">
                        <div class="btnsave">Сохранить телефон</div>
						
                      </div>
                    </form>
                  </li>
						<li class="li_print">
					  <div id="b29" class="print-btn"><span>распечатать</span></div>
					  </li>
			  
			  </ul>
            </div>
            <div class="drugs-wrapper">
              <p class="title">Список лекарств</p>
              <ul>
                <li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Дезинфицирующие и антисептические препараты  </a>
                  <div class="description"><p>Дезинфицирующие и антисептические препараты</p></div>
                </li>
                <li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Препараты для обработки ран и ожогов </a>
                  <div class="description"><p>Препараты для обработки ран и ожогов</p></div>
                </li>
                <li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Жаропонижающие и болеутоляющие препараты (например, Панадол Бэби 3мес+)</a>
                  <div class="description"><p>Жаропонижающие и болеутоляющие препараты (например, Панадол Бэби 3мес+)</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Средства от насморка:</a>
                  <div class="description"><p>- для очищения и увлажнения носика (например, Отривин Бэби 0+)<br>- сосудосуживающие капли (например, Виброцил 1+)</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Противокашлевые и отхаркивающие препараты (например, Синекод капли 2мес+)</a>
                  <div class="description"><p>Противокашлевые и отхаркивающие препараты (например, Синекод капли 2мес+)</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Препараты от боли в горле </a>
                  <div class="description"><p>Препараты от боли в горле </p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Противовирусные препараты</a>
                  <div class="description"><p>Противовирусные препараты</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Препараты от вздутия живота</a>
                  <div class="description"><p>Препараты от вздутия живота</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Препараты от аллергии (например, Фенистил капли 0+)</a>
                  <div class="description"><p>Препараты от аллергии (например, Фенистил капли 0+)</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Средства от зуда и раздражения на коже (например, Фенистил гель 1мес+)</a>
                  <div class="description"><p>Средства от зуда и раздражения на коже (например, Фенистил гель 1мес+)</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Препараты при отравлениях и нарушениях стула</a>
                  <div class="description"><p>Препараты при отравлениях и нарушениях стула</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Препараты от ушной боли</a>
                  <div class="description"><p>Препараты от ушной боли</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Успокоительные препараты</a>
                  <div class="description"><p>Успокоительные препараты</p></div>
                </li>
				
				
				<p style="margin-left: 20px;" class="title"> Дополнительные средства</p>
				
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Стерильные бинты и вата</a>
                  <div class="description"><p>Стерильные бинты и вата</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Бактерицидный и обычный пластырь</a>
                  <div class="description"><p>Бактерицидный и обычный пластырь</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Назальный аспиратор (например, Отривин бэби)</a>
                  <div class="description"><p>Назальный аспиратор (например, Отривин бэби)</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Термометр медицинский</a>
                  <div class="description"><p>Термометр медицинский</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Грелка</a>
                  <div class="description"><p>Грелка</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Несколько шприцов</a>
                  <div class="description"><p>Несколько шприцов</p></div>
                </li>
				
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Детский крем (например, Драполен) </a>
                  <div class="description"><p>Детский крем (например, Драполен) </p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Влажные дезинфицирующие салфетки</a>
                  <div class="description"><p>Влажные дезинфицирующие салфетки</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Бумажные платочки</a>
                  <div class="description"><p>Бумажные платочки</p></div>
                </li>
					<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Ватные палочки и диски</a>
                  <div class="description"><p>Ватные палочки и диски</p></div>
                </li>
				<li>
                  <a class="title" href="#"><i class="fa fa-plus"></i> <i class="fa fa-caret-down"></i> Ножницы</a>
                  <div class="description"><p>Ножницы</p></div>
                </li>
				
				
               
              </ul>
            </div>
          </div>
			 <div class="otriv-medic-save">
          <img src="img/elephant_family.png" alt="" class="otriv-medic-save-img">
          <img src="img/otriv_medic_save.png" alt="" class="otriv-medic-save-img">
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
        </div>
       <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer_main.php") ?>
    </div>
	 <script src="<? echo $source; ?>js/es5-shims.min.js"></script>
    <script src="<? echo $source; ?>js/jquery.min.js"></script>
    <!--script src="/js/save.js"></script-->
	
	
	<script type="text/javascript" src="http://st.babyblog.ru/st1/v4_bem/js/apps/bbapiclient.js"></script>
	 <script src="<? echo $source; ?>js/api-save.js"></script>
	
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
<? 
$scrollPage = 'important';
$s25 = true;$s50 = true;$s75 = true;$s100 = true;

include($_SERVER['DOCUMENT_ROOT']."/includes/doscroll.php");

include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>
