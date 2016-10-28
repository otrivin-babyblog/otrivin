<? 
$title ='Музыка';

$ref = $_SERVER['HTTP_REFERER'];
$ref_title = explode('/',$ref);
if (count($ref_title) > 1){
$ref_title = $ref_title[count($ref_title)-1];

		if ($ref_title == 'calendar.php'){
			$ref_title = 'Планируй день';
		}else
		{
			$ref_title = 'Развлекай ребенка';	
		}

}else
{
$ref_title = 'Главная';	
}

include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
?>
<body>
    <div class="wrapper music">
      <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="<? echo $source; ?>img/title-img-music.jpg" alt="Музыка">
          <h1 class="main-title">Музыка</h1>
        </div>
        <div class="breadcrumb">
          <a href="<? echo $ref;?>" class="breadcrumb__link"><? echo $ref_title;?></a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Музыка</a>
        </div>
        <h1 class="page-title">подборка детских песен для малышей</h1>
        <p class="page-about">Музыка поможет вашему малышу развить воображение и почувствовать гармонию с окружающим миром. Различные музыкальные инструменты — пианино, флейта, ксилофон — разбудят фантазию и вызовут приятные эмоции. Включите ребенку спокойную музыку на ночь, и он быстрее расслабится и уснет. </p>
        <div class="music-wrapper">
		
		
          <div class="music-item">
            <h3 class="music__name">Колыбельная 1 (Twinkle Twinkle Little Star)
			 <a style=" font-weight: bold; font-size: 8px;color: #000;" target="_blank" href="<? echo $source; ?>files/34139392-twinkle-twinkle-little-star-lullaby-license.pdf" >авторские права</a></h3>
			
            <audio src="<? echo $source; ?>files/audio/Twinkle Twinkle Little Star.wav" preload="auto"></audio>
            <span class="music__listen otrivin-song-1">Слушать</span>
            <a href="<? echo $source; ?>files/audio/Twinkle Twinkle Little Star.wav" class="music-download otrivin-song-1">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">Колыбельная 2 (Chopin Nocturn Op9 No2)
			 <a style=" font-weight: bold; font-size: 8px;color: #000;" target="_blank" href="<? echo $source; ?>files/34139393-chopin-nocturne-op9-no2-license.pdf" >авторские права</a></h3>
			
            <audio src="<? echo $source; ?>files/audio/Chopin_Nocturn_Op9_No2.wav" preload="auto"></audio>
            <span class="music__listen otrivin-song-2">Слушать</span>
            <a href="<? echo $source; ?>files/audio/Chopin_Nocturn_Op9_No2.wav" class="music-download otrivin-song-2">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">Колыбельная 3 (10 LULLABY)  <a style=" font-weight: bold; font-size: 8px;color: #000;" target="_blank" href="<? echo $source; ?>files/34139395-lullaby-license.pdf" >авторские права</a></h3>
			
            <audio src="<? echo $source; ?>files/audio/10_LULLABY.wav" preload="auto"></audio>
            <span class="music__listen otrivin-song-3">Слушать</span>
            <a href="<? echo $source; ?>files/audio/10_LULLABY.wav" class="music-download otrivin-song-3">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">Колыбельная 4 (Fairy Orchestral Lullaby)
			<a style=" font-weight: bold; font-size: 8px;color: #000;" target="_blank" href="<? echo $source; ?>files/34139394-fairy-orchestral-lullaby-license.pdf" >авторские права</a></h3>
			
            <audio src="<? echo $source; ?>files/audio/Fairy_Orchestral_Lullaby.wav" preload="auto"></audio>
            <span class="music__listen otrivin-song-4">Слушать</span>
            <a href="<? echo $source; ?>files/audio/Fairy_Orchestral_Lullaby.wav" class="music-download otrivin-song-4">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
          <div class="music-item">
            <h3 class="music__name">Колыбельная 5 (Lullaby)
			<!--a style=" font-weight: bold; font-size: 8px;color: #000;" target="_blank" href="/files/34139395-lullaby10-license.pdf" >авторские права</a--></h3>
			
			
            <audio src="<? echo $source; ?>files/audio/Lullaby.wav" preload="auto"></audio>
            <span class="music__listen otrivin-song-5">Слушать</span>
            <a href="<? echo $source; ?>files/audio/Lullaby.wav" class="music-download otrivin-song-5">
              <div class="music-download__image"></div>
              <span class="music-download__text">скачать</span>
            </a>
          </div>
		  
        </div>
        <div class="content-footer content-footer_music">
          <img src="<? echo $source; ?>img/penguins.png" alt="" class="music-penguins">
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
    <script src="<? echo $source; ?>js/jquery.min.js"></script>
    <script src="<? echo $source; ?>files/audio.min.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
    <script>
      audiojs.events.ready(function() {
        var as = audiojs.createAll();
      });
    </script>
 <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>