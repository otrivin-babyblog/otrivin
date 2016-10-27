
<? 
$title ='Игра “Здоровый зоопарк”';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
?> 
<body>
    <div class="wrapper">
        <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
        <div class="content">
          <div class="title-img">
            <img src="<? echo $source; ?>img/title-img-contests.jpg" alt="Игра “Здоровый зоопарк”">
            <h1 class="main-title">Игра “Здоровый зоопарк”</h1>
          </div>
          <div class="breadcrumb">
            <a href="/otrivin_baby/entertain.php" class="breadcrumb__link">Развлекай ребенка</a>
            <span class="breadcrumb__separator">/</span>
            <a href="" class="breadcrumb__link breadcrumb__link_current">Игра “Здоровый зоопарк”</a>
          </div>
          <div class="game-wrapper">
            <div id="game"></div>
            <div class="game-button">
              <a href="#">Играть еще раз</a>
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
    <script src="<? echo $source; ?>js/game.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>
