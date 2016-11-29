<?
$title ='Развлекай ребенка';
$og_title = 'Чем занять ребенка?';
$og_url = 'entertain.php';
$og_image = 'img/shares/share_entertain_baby.jpg';
$og_description = 'Вы устали каждый день катать машинки и собирать пирамидки? Тогда мы предлагаем вам несколько интересных забав, которые точно не оставят равнодушными вас и малыша.';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
?> 
  <body>
    <div class="wrapper entertain">
      <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="<? echo $source; ?>img/title-img-entertain.jpg" alt="Развлекай ребенка">
          <h1 class="main-title">Развлекай ребенка</h1>
        </div>
        <div class="breadcrumb">
          <a href="<? echo $source; ?>" class="breadcrumb__link">Главная</a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Развлекай ребенка</a>
        </div>
        <div class="zoo-links-wrapper">
          <img src="<? echo $source; ?>img/whale-and-sea.png" alt="Китенок" class="zoo-links__img">
          <h2 class="zoo-links__title">Игра “Здоровый зоопарк”</h2>
          <p class="zoo-links__about">Животные в нашем зоопарке простудились, у них насморк: носик забит о совсем не дышит. Добрый доктор Айболит очень занят, но вы можете помочь ему вылечить зверят. Дайте питомцу правильное лекарство и он мигом поправится! <br>
          Поиграйте вместе с малышом, это поможет развить эмпатию, привить любовь к животным, и просто здорово развеселит. Выучите, как говорит каждый зверь, и повторяйте вместе с ним. К тому же, ребенок будет лучше относиться к лечению, когда вы скажите: “Закапаем в носик, как китенку”</p>
          <a href="<? echo $source; ?>game.php" class="btn btn__zoo otrivin-start-game">начать игру</a>
        </div>
        <div class="activities-wrapper">
          <h2 class="page-title">наши конкурсы</h2>
          <!-- <img src="img/bird_amuse.png" alt="" class="bird_amuse_ent"> -->
          <div class="activity activity_bird">
            <h3 class="activity__name">Важный носик знает толк</h3>
            <p class="activity__about">Поделись фотоисторией о своем ребенке и выиграй подарки! ...</p>
            <a href="/contests.php" class="activity__link">Подробнее</a>
          </div>
          <div class="activity"    >
            <h3 class="activity__name">поразительное сходство</h3>
            <p class="activity__about">Участвуй в семейном конкурсе и получай подарки! ...</p>
			 <!--h3 class="activity__name">Конкурс … совсем скоро! Следи за обновлениями!</h3-->
            <a href="<? echo $source; ?>contests_s.php" class="activity__link otrivin-anons-contest">Подробнее</a>
          </div>
          <!--div class="activity">
            <h3 class="activity__name">папин сын</h3>
            <p class="activity__about">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
            <a href="/contests_p.php" class="activity__link">Подробнее</a>
          </div-->
        </div>
        <div class="activities-wrapper activities-wrapper_reversed">
          <h2 class="page-title">занимательный досуг</h2>
          <div class="activity">
            <h3 class="activity__name">сказки</h3>
            <p class="activity__about">Маша и медведь, Морозко, Теремок, Колобок и другие аудиосказки...</p>
            <a href="<? echo $source; ?>tales.php" class="activity__link otrivin-tales">Подробнее</a>
          </div>
          <div class="activity">
            <h3 class="activity__name">детские песенки</h3>
            <p class="activity__about">Включите ребенку спокойную музыку на ночь, и он быстрее ...</p>
            <a href="<? echo $source; ?>music.php" class="activity__link otrivin-music">Подробнее</a>
          </div>
          <div class="activity">
            <h3 class="activity__name">забавные потешки</h3>
            <p class="activity__about">Малыши любят небольшие стишки, которые помогают сделать ...</p>
            <a href="<? echo $source; ?>verses.php" class="activity__link otrivin-poems">Подробнее</a>
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
      </div>
      <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer_main.php") ?>
    </div>
    <script src="<? echo $source; ?>js/jquery.min.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>