<? 
$title ='Музыка';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
?>
<body>
    <div class="wrapper music">
      <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="./img/title-img-music.jpg" alt="Музыка">
          <h1 class="main-title">Музыка</h1>
        </div>
        <div class="breadcrumb">
          <a href="/" class="breadcrumb__link">Главная</a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Музыка</a>
        </div>
        <h1 class="page-title">подборка детских песен для малышей</h1>
        <p class="page-about">Музыка поможет вашему малышу развить воображение и почувствовать гармонию с окружающим миром. Различные музыкальные инструменты — пианино, флейта, ксилофон — разбудят фантазию и вызовут приятные эмоции. Включите ребенку спокойную музыку на ночь, и он быстрее расслабится и уснет. </p>
        <div class="music-wrapper">
		
		
          <div class="music-item">
            <h3 class="music__name">Twinkle Twinkle Little Star</h3>
            <audio src="./files/audio/Twinkle Twinkle Little Star.wav" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/Twinkle Twinkle Little Star.wav" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">Chopin Nocturn Op9 No2</h3>
            <audio src="./files/audio/Chopin Nocturn Op9 No2.wav" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/Chopin Nocturn Op9 No2.wav" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">10 LULLABY</h3>
            <audio src="./files/audio/10 LULLABY.wav" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/10 LULLABY.wav" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">Fairy Orchestral Lullaby</h3>
            <audio src="./files/audio/Fairy Orchestral Lullaby.wav" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/Fairy Orchestral Lullaby.wav" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">Lullaby</h3>
            <audio src="./files/audio/Lullaby.wav" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/Lullaby.wav" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <!--div class="music-item">
            <h3 class="music__name">Сказочные сны</h3>
            <audio src="./files/audio/PHA_Date_With_Destiny.mp3" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/PHA_Date_With_Destiny.mp3" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
          <div class="music-item">
            <h3 class="music__name">Сказочные сны</h3>
            <audio src="./files/audio/PHA_Date_With_Destiny.mp3" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/PHA_Date_With_Destiny.mp3" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
          <div class="music-item">
            <h3 class="music__name">Сказочные сны</h3>
            <audio src="./files/audio/PHA_Date_With_Destiny.mp3" preload="auto"></audio>
            <span class="music__listen">Слушать</span>
            <a href="./files/audio/PHA_Date_With_Destiny.mp3" class="music-download">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div-->
        </div>
        <div class="content-footer content-footer_music">
          <img src="img/penguins.png" alt="" class="music-penguins">
          <ul class="pagination pagination_music" style="visibility: hidden;">
            <li class="pagination-page"><a href="" class="pagination__link">&lt;</a></li>
            <li class="pagination-page"><a href="" class="pagination__link pagination__link_active">1</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">2</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">3</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">4</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">5</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">&gt;</a></li>
          </ul>
          <div class="social social_absolute">
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
    <script src="./js/jquery.min.js"></script>
    <script src="./files/audio.min.js"></script>
    <script src="./js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
    <script>
      audiojs.events.ready(function() {
        var as = audiojs.createAll();
      });
    </script>
 <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>