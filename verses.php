<? 
$title ='Потешки';

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
    <div class="wrapper verses">
      <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="<? echo $source; ?>img/title-img-verses.jpg" alt="Потешки">
          <h1 class="main-title">Потешки</h1>
        </div>
        <div class="breadcrumb">
          <a href="<? echo $ref;?>" class="breadcrumb__link"><? echo $ref_title;?></a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Потешки</a>
        </div>
        <h1 class="page-title">забавные стишки для малышей</h1>
        <p class="page-about">Малыши любят небольшие стишки, которые помогают сделать повседневные дела в форме игры. Вместе с потешкой можно умываться, завтракать, собираться на прогулку, играть и делать зарядку. Ребенок заплакал — произнесите знакомые слова ласковым голосом. Вашу интонацию уловит даже новорожденный, почувствует в ней тепло и заботу и сразу успокоится. Когда чадо подрастет, то будет с удовольствием повторять стих вместе с вами! Добавьте жесты, например, хлопанье в ладоши, поднимание рук, потягивание, и процесс станет еще увлекательней.</p>
        
		
		
		<div class="verses-wrapper">
          <div class="verse-size"></div>
          <div class="verse-gutter"></div>
		
		<div class="verse s27page1">
            <p class="verse__text">Ладушки-ладошки,<br>
            Хлопали в ладошки, <br>
            Хлопали в ладошки, <br>
            Отдохнем немножко.</p>
          </div>
          <!--div class="verse">
            <p class="verse__text">Топ, топ, топ, топ, <br>
            Ходи-ходи ножкой <br>
            Твердо по дорожке.</p>
          </div-->
          <div class="verse s27page1">
            <p class="verse__text">Мы пойдем купаться <br>
            И в воде плескаться,<br>
            Брызгаться, резвиться,<br>
            Будет Настя мыться.<br>
            Мы помоем ножки<br>
            Нашей милой крошке,<br>
            Вымоем ручонки<br>
            Маленькой Настёнке,<br>
            Спинку и животик,<br>
            Личико и ротик -<br>
            Чистая какая<br>
            Доченька родная!</p>
          </div>
          <div class="verse verse_bird s27page1">
            <p class="verse__text">Море-морюшко,<br>
            Серебряное донышко,<br>
            Золотой бережок,<br>
            По волнам гони стружок!<br>
            Легкое суденышко,<br>
            Золотое донышко,<br>
            Серебряное весельцо,<br>
            Мыщатое деревцо,<br>
            Зеленые трали.<br>
            Плыви, суденышко, подале!</p>
          </div>
          <div class="verse s27page1">
            <p class="verse__text">Топ, топ, топ, топ, <br>
            Ходи-ходи ножкой <br>
            Твердо по дорожке.</p>
          </div>
          <div class="verse  nofloat s27page1">
            <p class="verse__text">Буль, буль, буль, карасики. <br>
            Моемся мы в тазике. <br>
            Рядом лягушата, рыбки и утята.</p>
          </div>
		 
		  
		  
		  
		  
          <div class="verse s27page2">
            <p class="verse__text">- Ладушки, ладушки! <br>
            - Где были? <br>
            - У бабушки. <br>
            - Что ели?<br>
            - Кашку.<br>
            - Что пили?<br>
            - Бражку.<br>
            Кашка сладенька,<br>
            Бражка хмеленька.</p>
          </div>
          <div class="verse s27page2">
            <p class="verse__text">В печи калачи, <br>
            Как огонь горячи.<br>
            Для кого печены?<br>
            Для Машеньки калачи,<br>
            Для Машеньки горячи.</p>
          </div>
          <div class="verse s27page2">
            <p class="verse__text">Варись, варись, кашка,<br>
            В голубенькой чашке,<br><br>
            Варись поскорее,<br>
            Булькай веселее.<br>
            Варись, кашка, сладка,<br>
            Из густого молока,<br>
            Из густого молока,<br>
            Да из манной крупки.<br>
            У того, кто кашку съест,<br>
            Вырастут все зубки!</p>
          </div>
		  
		<!---------------------------------------------->
		  <div class="verse s27page2">
            <p class="verse__text">Мы проснулись, мы проснулись. <br>
			— Сладко, сладко потянулись.<br>
			— Маме с папой улыбнулись.</p>
          </div>
		  
		  
		<div class="verse s27page2">
            <p class="verse__text">
			Вот проснулись,<br>
			Потянулись,<br>
			С боку на бок<br>
			Повернулись!<br>
			Потягушечки!<br>
			Потягушечки!<br>
			Где игрушечки,<br>
			Погремушечки?<br>
			Ты, игрушка, погреми,<br>
			Нашу детку подними!
			</p>
		</div>	

		<div class="verse s27page2">
            <p class="verse__text">
			Ты мне ручки подай, <br>
			Да с кровати вставай, <br>
			Умываться пойдем, <br>
			Где водичка найдем! 
			</p>
		</div>	

		
		
		<div class="verse s27page3">
            <p class="verse__text">
			Водичка, водичка,<br>
			Умой Васино личико,<br>
			Чтобы глазоньки блестели,<br>
			Чтобы щёчки краснели,<br>
			Чтоб смеялся роток,<br>
			Чтоб кусался зубок. 
			</p>
		</div>	

		<div class="verse s27page3">
            <p class="verse__text">
			Вот лежат в кроватке<br>
			Розовые пятки.<br>
			Чьи это пятки —<br>
			Мягки да сладки?<br>
			Прибегут гусятки,<br>
			Ущипнут за пятки.<br>
			Прячь скорей, не зевай,<br>
			Одеяльцем накрывай!
			</p>
		</div>	



		<div class="verse s27page3">
            <p class="verse__text">
			Каша вкусная дымится,<br>
			Настя кашу есть садится,<br> 
			Очень каша хороша, <br>
			Ели кашу неспеша. <br>
			Ложка за ложкой, <br>
			Ели по немножку. 
			</p>
		</div>	

		<div class="verse s27page3">
            <p class="verse__text">
			Люли, люли, люленьки,<br>
			Прилетели гуленьки, <br>
			Стали гули говорить: <br>
			«Чем нам Ниночку кормить?»<br> 
			Один скажет: «кашкою», <br>
			Другой — «простоквашкою»,<br>
			Третий скажет — «молочком <br>
			И румяным пирожком».
			</p>
		</div>	

		<div class="verse s27page3">
            <p class="verse__text">
			Глубоко — не мелко,<br>
			Корабли в тарелках.<br>
			Луку головка,<br>
			Красная морковка,<br>
			Петрушка, картошка,<br>
			Крупки немножко.<br>
			Вот кораблик плывет,<br>
			Заплывает прямо в рот!
			</p>
		</div>	

		<div class="verse nofloat s27page3">
            <p class="verse__text">
			Ах, водичка хороша!<br>
			Хороша водичка!<br>
			Искупаем малыша,<br>
			Чтоб сияло личико! 
			</p>
		</div>	

		<div class="verse s27page4">
            <p class="verse__text">
			Ай, лады, лады,<br>
			Не боимся мы воды,<br>
			Чисто умываемся,<br>
			Маме улыбаемся.<br>
			Вода текучая,<br>
			Дитя растучее,<br>
			С гуся вода — <br>
			С дитя худоба.<br>
			Вода книзу,<br>
			А дитя кверху.
			</p>
		</div>	

		<div class="verse s27page4">
            <p class="verse__text">
			Кран, откройся! <br>
			Нос, умойся! <br>
			Мойтесь сразу, <br>
			Оба глаза! <br>
			Мойтесь, уши, <br>
			Мойся, шейка! <br>
			Шейка, мойся <br>
			Хорошенько! <br>
			Мойся, мойся, <br>
			Обливайся! <br>
			Грязь, смывайся! <br>
			Грязь, смывайся!
			</p>
		</div>	

		<div class="verse s27page4">
            <p class="verse__text">
			Не плачь, не плачь,<br> 
			Куплю калач. <br>
			Не хнычь, не ной, <br>
			Куплю другой. <br>
			Слезы утри, <br>
			Дам тебе три.
			</p>
		</div>	
 
		<div class="verse s27page4">
            <p class="verse__text">
			Раз зубок, два зубок —<br>
			Скоро Анечке годок!<br>
			Хнычет доченька опять,<br>
			Будем Аню утешать:<br>
			Уж вы, зубки, вырастайте<br>
			Потихонечку, полегонечку.<br>
			Не мешайте доче спать!<br>
			Не мешайте ей играть!<br>
			Будем прыгать и скакать,<br>
			Маму нежно обнимать!
			</p>
		</div>	
		
		<div class="verse s27page4">
            <p class="verse__text">
			Придет киска не спеша <br>
			И погладит малыша.<br>
			“Мяу-мяу”, — скажет киска, —<br>
			“Наша детка хороша”.
			</p>
		</div>	

		<div class="verse s27page4">
            <p class="verse__text">
			Раз, два, три, четыре, пять!<br>
			Вышли пальчики гулять! <br>
			Этот пальчик гриб нашел,<br>
			Этот пальчик чистит стол, <br>
			Этот — резал, <br>
			Этот — ел. <br>
			Ну, а этот лишь глядел!
			</p>
		</div>	

		<div class="verse nofloat s27page4">
            <p class="verse__text">
			Потянись дружок, <br>
			Повернись на бочок,<br>
			На животик повернись,<br>
			Нежно маме улыбнись.<br>
			Я по спинке пройду,<br>
			Хворобушку отведу,<br>
			Расти ладненький<br>
			Да здоровенький.
			</p>
		</div>	

		<div class="verse s27page5">
            <p class="verse__text">
			Большие ноги<br>
			Шли по дороге:<br>
			Топ-топ-топ.<br>
			Маленькие ножки<br>
			Бежали по дорожке:<br>
			Топ-топ-топ,<br>
			Топ-топ-топ. 
			</p>
		</div>	

		<div class="verse s27page5">
            <p class="verse__text">
			Топ, топ, топотушки...<br>
			Удивляются игрушки,<br>
			На окошко прыгнул кот:<br>
			Надя по полу идет!<br>
			Ходит не ладошками,<br>
			А топочет ножками,<br>
			Маленькими ножками,<br>
			Красными сапожками.<br>
			И сама удивлена,<br>
			Что не падает она!
			</p>
		</div>	
 
		<div class="verse s27page5">
            <p class="verse__text">
			Баю-баю-байки,<br>
			Прилетели чайки.<br>
			Стали крыльями махать,<br>
			Нашу Свету усыплять.
			</p>
		</div>	

		<div class="verse s27page5">
            <p class="verse__text">
			Маленькие заиньки<br>
			Захотели баиньки,<br>
			Захотели баиньки,<br>
			Потому что заиньки.<br>
			Мы немножечко поспим,<br>
			Мы на спинке полежим.<br>
			Мы на спинке полежим<br>
			И тихонько посопим.
			</p>
		</div>	

		<div class="verse s27page5">
            <p class="verse__text">
			Солнышко, солнышко,<br>
			Выгляни в окошко!<br>
			Солнышко, нарядись,<br>
			Красное, покажись!<br>
			Ждут тебя детки,<br>
			Маленькие детки!
			</p>
		</div>	

		<div class="verse s27page5">
            <p class="verse__text">
			Дождик, дождик, посильней —<br>
			Будет травка зеленей, <br>
			Вырастут цветочки<br>
			На нашем лужочке.<br>
			Дождик, дождик, пуще,<br>
			Расти, трава, гуще.
			</p>
		</div>	

		<div class="verse s27page5">
            <p class="verse__text">
			Выйди, радуга-дуга, <br>
			На зеленые луга. <br>
			Своим концом, <br>
			Золотым венцом! 
			</p>
		</div>	

		<div class="verse nofloat s27page5">
            <p class="verse__text">
			Улитка, улитка!<br>
			Покажи свои рога,<br>
			Дам кусок пирога,<br>
			Пышки, ватрушки,<br>
			Сдобной лепешки,<br>
			Высуни рожки! 
			</p>
		</div>
		
		  
          <div class="verse verse_whale">
            <img src="<? echo $source; ?>img/whale-and-sea-reversed.png" alt="" class="verse__img">
          </div>
        </div>
		
        
      </div>
	  
	  <div class="content-footer">
          <!--ul class="pagination">
            <li class="pagination-page" id="pageprev"><a class="pagination__link">&lt;</a></li>
            <li class="pagination-page" id="page1"><a id="p1" class="pagination__link pagination__link_active">1</a></li>
            <li class="pagination-page" id="page2"><a id="p2" class="pagination__link">2</a></li>
            <li class="pagination-page" id="page3"><a id="p3" class="pagination__link">3</a></li>
            <li class="pagination-page" id="page4"><a id="p4" class="pagination__link">4</a></li>
            <li class="pagination-page" id="page5"><a id="p5" class="pagination__link">5</a></li>
            <li class="pagination-page" id="pagenext"><a class="pagination__link">&gt;</a></li>
          </ul-->
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
	  
	  
       <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer_main.php") ?>
    </div>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
   
	
	  <script src="<? echo $source; ?>js/masonry.pkgd.min.js"></script>
    <script src="<? echo $source; ?>js/masonry.js"></script>
 <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>