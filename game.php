
<? 
$title ='Игра “Здоровый зоопарк”';
$og_title = 'Интерактивная игра “Здоровый зоопарк”';
$og_url = 'game.php';
$og_image = 'img/shares/share_healthy_zoo.jpg';
$og_description = 'Животные в нашем зоопарке простудились, у них насморк: носик забит и совсем не дышит. Добрый доктор Айболит очень занят, но вы можете помочь ему вылечить зверят. Дайте питомцу правильное лекарство и он мигом поправится!';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
?> 
<body>
    <div class="wrapper">
        <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
        <div class="content">
          <div class="title-img">
            <img src="<? echo $source; ?>img/game-img-top.png" alt="Игра “Здоровый зоопарк”">
            <h1 class="main-title">Здоровый зоопарк</h1>
          </div>
          <div class="breadcrumb">
            <a href="<? echo $source; ?>entertain.php" class="breadcrumb__link">Развлекай ребенка</a>
            <span class="breadcrumb__separator">/</span>
            <a href="" class="breadcrumb__link breadcrumb__link_current">Игра “Здоровый зоопарк”</a>
          </div>
          <div class="game-wrapper">
		  
		  <p class="page-about">
		  Зоопарк
Животные в нашем зоопарке простудились, у них насморк: носик забит о совсем не дышит. 
Добрый доктор Айболит очень занят, но вы можете помочь ему вылечить зверят. 
Дайте питомцу правильное лекарство и он мигом поправится! 
</p>
<p  class="page-about" style="margin-bottom: 30px;">
<br><span>1. Нажми на нужное лекарство, чтобы дать его зверенку. </span><br>
<span>2. Если лекарство подошло зверенок выздоровеет, а если нет тогда нужно попробовать выбрать другой вариант ответа!</span><br>
<span>3. Нажми "играть еще раз", чтобы помочь другому обитателю нашего зоопарка.</span><br>
		
		  </p>
        
		  
		  
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
    <script src="<? echo $source; ?>js/es5-shims.min.js"></script>
    <script src="<? echo $source; ?>js/jquery.min.js"></script>
    <script src="<? echo $source; ?>js/game.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>
