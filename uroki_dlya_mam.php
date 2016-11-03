<?
$title ='Уроки для мамы';
$og_title = 'Познавательные видео-уроки для мамы';
$og_url = 'uroki_dlya_mam.php';
$og_image = 'img/shares/share_lessons.jpg';
$og_description = 'Оказывается, научить сморкаться и правильно дышать можно с помощью игры! Не откладывайте этот процесс до болезни, когда ребенок будет уставшим и капризным. Лучше сразу покажите ему простые приемы дыхания и высмаркивания в увлекательной форме.';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php") ?>
 <body>
    <div class="wrapper lessons">
       <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="<? echo $source; ?>img/title-img-lessons.jpg" alt="Потешки">
          <h1 class="main-title">Уроки для мамы</h1>
        </div>
        <div class="breadcrumb">
          <a href="<? echo $source; ?>calendar.php" class="breadcrumb__link">Планируй день</a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Уроки для мамы</a>
        </div>
        <h1 class="page-title">полезное видео</h1>
        <p class="page-about">Посмотрите познавательные видео и узнайте, как позаботиться о носике малыша. Оказывается, научить сморкаться и правильно дышать можно с помощью игры! Не откладывайте этот процесс до болезни, когда ребенок будет уставшим и капризным. Лучше сразу покажите ему простые приемы дыхания и высмаркивания в увлекательной форме.</p>
        <p class="page-about">Хотите узнать, как повысить иммунитет и защититься от простуды? Тогда смотрите урок о профилактике и закаливании.</p>
        <div class="video-wrapper">
          <div class="video-item">
            <div id="vid1" class="responsive-video">
              <iframe name="vid1" class="otrivin-mom-video1" width="560" height="315" 
			  src="https://www.youtube.com/embed/EP8Lr4pbH9c?iv_load_policy=3?&rel=0&showinfo=0&modestbranding=0&autohide=1" 
			  frameborder="0" allowfullscreen></iframe>
            
			
			</div>
            <p class="video-caption">Как научить малыша сморкаться?</p>
          </div>
          <div class="video-item">
            <div id="vid2" class="responsive-video">
              <iframe class="otrivin-mom-video2" width="560" height="315" src="https://www.youtube.com/embed/19vd29zPnmA?iv_load_policy=3?&rel=0&showinfo=0&modestbranding=0&autohide=1" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="video-caption">Как научить малыша правильно дышать?</p>
          </div>
          <div class="video-item">
            <div id="vid3" class="responsive-video">
              <iframe class="otrivin-mom-video3" width="560" height="315" src="https://www.youtube.com/embed/mxz9muQhPb4?iv_load_policy=3?&rel=0&showinfo=0&modestbranding=0&autohide=1" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="video-caption">Какую температуру поддерживать в доме?</p>
          </div>
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
        <!--div class="article-preview">
          <h3 class="article-preview__name">Мы подготовил для вас интересные статьи</h3>
          <a href="" class="preview-btn">ознакомиться</a>
        </div-->
      </div>
       <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer_main.php") ?>
    </div>
	
	<script src="<? echo $source; ?>js/jquery.iframetracker.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
	<script src="<? echo $source; ?>js/script-uroki.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
 <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>