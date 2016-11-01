<?
$title ='Игры с ребенком';
$og_title = 'Играем вместе с малышом';
$og_url = 'igry_s_rebenkom.php';
$og_image = 'img/shares/share_games.jpg';
$og_description = 'Вы, конечно, знаете, что игра – это важнейшая форма активности ребенка. А для самых маленьких игровая деятельность является ведущей. Игра позволяет детям отдохнуть, снимает напряжение и развивает интеллектуальные и творческие способности ребенка.';
$ref = $_SERVER['HTTP_REFERER'];
$ref_title = explode('/',$ref);
if (count($ref_title) > 1){
$ref_title = $ref_title[count($ref_title)-1];

		if ($ref_title == 'calendar.php' ){
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
<body>
    <div class="wrapper music">
        <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="<? echo $source; ?>img/title-img-child-games.jpg" alt="Игры с ребенком">
          <h1 class="main-title">Игры с ребенком</h1>
        </div>
        <div class="breadcrumb">
          <a href="<? echo $ref;?>" class="breadcrumb__link"><? echo $ref_title;?></a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Игры с ребенком</a>
        </div>
        <h1 class="page-title xor_isr_subtitle_class">список занимательных игр для вас и малыша</h1>
        <p class="page-about">Когда мы играем с ребенком, мы учим его выражать эмоции, быть добрым и открытым, общаться и познавать мир. Вы устали каждый день катать машинки и собирать пирамидки? Тогда мы предлагаем вам несколько интересных забав, которые точно не оставят равнодушными вас и малыша.</p>
        <div class="child-games-wrapper">
          <div class="child-games-item">
            <h2 class="child-games__name">поезд на станцию</h2>
            <p class="child-games__excerpt">В этой игре используется принцип чайнворда: загадываются два слова – первое и второе. Задача играющего – связать эти слова логически, используя лишь существительные в единственном числе, именительном падеже.</p>
            <p class="child-games__excerpt">Начинать лучше со слов, наиболее близких логически, и одного слова для связки. Если ребенку понравится эта игра, ее легко можно будет усложнить.</p>
          </div>
          <div class="child-games-item">
            <h2 class="child-games__name">Угадай звук</h2>
            <p class="child-games__excerpt">Записываем звуки из дома на мобильный (стиральная машина, клавиатура, чайник, голоса папы, мамы, брата), даем слушать, а ребенок должен угадать.</p>
         </div>
          <div class="child-games-item">
            <h2 class="child-games__name">Переправа</h2>
            <p class="child-games__excerpt">Пол — это болото, заготавливаем кочки из цветного картона. Нужно пройти по кочкам, не наступив в болото. В конце — приз.</p>
            <p class="child-games__excerpt">Если ребенок старше, можно делать кочки разных цветов, тогда идти можно будет только по зеленым.</p>
          </div>
		  
		  
		  
		   <div class="child-games-item">
            <h2 class="child-games__name">Холодно-горячо</h2>
            <p class="child-games__excerpt">Прячем игрушку и просим ребенка ее найти, когда он далеко, говорим “холодно”, когда приближается “теплее”. Потом меняемся ролями.</p>
          </div>
          <div class="child-games-item">
            <h2 class="child-games__name">Угадывать игрушки на ощупь.</h2>
            <p class="child-games__excerpt">Угадывать игрушки на ощупь.</p>
         </div>
          <div class="child-games-item">
            <h2 class="child-games__name">Положить 5-10 игрушек, ребенок отворачивается, убираем одну, нужно угадать какую.</h2>
            <p class="child-games__excerpt">Положить 5-10 игрушек, ребенок отворачивается, убираем одну, нужно угадать какую.</p>
          </div>
		   <div class="child-games-item">
            <h2 class="child-games__name">Съедобное-несъедобное. С мячом, ловим, если съедобное.</h2>
           <p class="child-games__excerpt">Съедобное-несъедобное. С мячом, ловим, если съедобное.</p>
          </div>
          <div class="child-games-item">
            <h2 class="child-games__name">Гениальный художник.</h2>
            <p class="child-games__excerpt">По очереди рисовать детали картины.</p>
          </div>
          <div class="child-games-item">
            <h2 class="child-games__name">Угадай слово</h2>
            <p class="child-games__excerpt">Задается тема, например “Фрукты”. По очереди загадываете слова, чтобы угадать, надо задавать вопросы. Отвечать только да-нет.</p>
          </div>
		  <div class="child-games-item">
            <h2 class="child-games__name">Польза</h2>
             <p class="child-games__excerpt">Выберите любой предмет и предложите ребенку придумать, где он может пригодиться (можно придумывать фантастические случаи).</p>
          </div>
         <div class="child-games-item">
            <h2 class="child-games__name">Я сказочный герой</h2>
            <p class="child-games__excerpt">Попросите ребенка изобразить героя сказки, а сами угадайте, кто это.</p>
          </div>
         <div class="child-games-item">
            <h2 class="child-games__name">Сравни предметы</h2>
            <p class="child-games__excerpt">Ставим перед ребенком 2 предмета, малышу нужно найти общие признаки и отличия.</p>
          </div>
		  <div class="child-games-item">
            <h2 class="child-games__name">Что бывает липким?</h2>
           <p class="child-games__excerpt">Спрашиваете у ребенка про какой-то признак — липкое, большое, маленькое, тяжелое… Он придумывает, что таким бывает.</p>
          </div>
		  
		  
        </div>
        <div class="content-footer">
          <!--ul class="pagination">
            <li class="pagination-page"><a href="" class="pagination__link">&lt;</a></li>
            <li class="pagination-page"><a href="" class="pagination__link pagination__link_active">1</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">2</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">3</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">4</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">5</a></li>
            <li class="pagination-page"><a href="" class="pagination__link">&gt;</a></li>
          </ul-->
        </div>
        <div class="other-games-wrapper">
          <div class="other-games-item">
            <img src="<? echo $source; ?>img/penguins.png" alt="Здоровый зоопарк" class="other-games__img">
            <h3 class="other-games__name">поиграйте в “Здоровый зоопарк”</h3>
            <p class="other-games__about"></p>
            <a href="<? echo $source; ?>game.php" class="btn btn_other-games">начать игру</a>
          </div>
          <div class="other-games-item">
            <img src="<? echo $source; ?>img/gift.png" alt="Конкурсы" class="other-games__img other-games__img_offset">
            <h3 class="other-games__name">у нас для вас замечательные конкурсы</h3>
            <p class="other-games__about"></p>
            <a href="<? echo $source; ?>contests_s.php" class="btn btn_other-games">перейти к конкурсам</a>
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
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>