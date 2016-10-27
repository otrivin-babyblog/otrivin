<? 
$title ='Конкурсы';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");
?> 
<body>
    <div class="wrapper contests">
      <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
      <div class="content">
        <div class="title-img">
          <img src="<? echo $source; ?>img/title-img-contests.jpg" alt="Конкурсы">
          <h1 class="main-title">Конкурсы</h1>
        </div>
        <div class="breadcrumb">
          <a href="/entertain.php" class="breadcrumb__link">Развлекай ребенка</a>
          <span class="breadcrumb__separator">/</span>
          <a href="" class="breadcrumb__link breadcrumb__link_current">Конкурсы</a>
        </div>
        <h1 class="page-title">Поразительное сходство</h1>
        <p class="page-about page-about_short">Участвуй в семейном конкурсе и получай подарки! 
		Загрузи фотографию на тему «Поразительное сходство - на кого больше похож носик - на мамин или на папин». 10 наиболее популярных 
		среди читателей работ выйдут в финал. Жюри BabyBlog выберет из их числа трех победителей и наградит призами!</p>
        <div class="contest-wrapper">
          <div class="contest-sender">
            <a class="btn btn_border js_contest">отправить фотографии</a>
          </div>
          <div class="contest-prizes">
            <div class="contest-prize">
              <img src="<? echo $source; ?>img/ozon-card.png" alt="" class="contest-prize__img">
              <h3 class="contest-prize__standing">1 место</h3>
              <p class="contest-prize__about">Сертификат на 4000р в магазине «Озон»</p>
            </div>
            <div class="contest-prize">
              <img src="<? echo $source; ?>img/ozon-card.png" alt="" class="contest-prize__img">
              <h3 class="contest-prize__standing">2 место</h3>
              <p class="contest-prize__about">Сертификат на 4000р в магазине «Озон»</p>
            </div>
            <div class="contest-prize">
              <img src="<? echo $source; ?>img/ozon-card.png" alt="" class="contest-prize__img">
              <h3 class="contest-prize__standing">3 место</h3>
              <p class="contest-prize__about">Сертификат на 4000р в магазине «Озон»</p>
            </div>
          </div>
          <div class="contest-about">
            <a class="btn btn_yellow js_participants">Участники</a>
            <a class="btn btn_blue js_conditions">условия участия</a>
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
    <div class="popup _upload">
      <h2 class="popup-title">Для участия в конкурсе:</h2>
      <button class="popup-close"></button>
      <form action="" class="js-validate" id="contest-upload">
        <fieldset>
          <div class="input-row">
            <p class="input__name">1. Загрузите фотографию</p>
            <label for="attachment" class="input__label input__label_file">
              <span class="input-btn">ВЫБРАТЬ (jpg, png)</span>
              <input required type="file" class="input-file" id="attachment" name="attachment">
            </label>
            <p class="input__current-file"></p>
          </div>
          <div class="input-row">
            <p class="input__name">2. напишите  комментарий</p>
            <textarea required class="input-comment" id="commentary" name="commentary"></textarea>
            <label for="commentary" class="input__label input__label_textarea">Максимальное количество символов 120</label>
          </div>
          <div class="input-row">
            <input required type="checkbox" class="input-checkbox" id="terms" name="terms">
            <label for="terms" class="input-label_checkbox">Я согласен с условиями конкурса</label>
          </div>
          <div class="input-row">
            <input type="submit" class="btn btn_submit">
          </div>
        </fieldset>
      </form>
    </div>
    <div class="popup _thanks">
      <h2 class="popup-title">Спасибо, Ваша работа на премодерации</h2>
      <button class="popup-close"></button>
    </div>
    <div class="popup _conditions">
      <h2 class="popup-title">условия участия и правила</h2>
      <button class="popup-close"></button>
      <ol class="conditions">
        <li>Общие положения:
          <ol>
            <li>Конкурс под названием «Повтори опыт и выиграй приз!» (далее по тексту настоящих Правил – Конкурс) проводится ООО «Хипп Русь» (далее по тексту настоящих Правил – Организатор).</li>
            <li>Информационным партнером Конкурса выступает ООО «Бэбиблог-РТ» ИНН 9715008910, ОГРН 5147746448670 (Далее по тексту настоящих Правил - Информационный партнер).</li>
            <li>Объявление о Конкурсе размещается в открытом доступе в сети Интернет по адресу: http://promo.babyblog.ru/hipp2016/fk</li>
            <li>Организатор при проведении настоящего Конкурса ставит перед собой следующие общественно-полезные цели: поддержка творческого самовыражения и развитие творческих навыков у Участников Конкурса.</li>
            <li>Конкурс не является лотереей либо иной, основанной на риске, игрой. Определение победителей Конкурса (далее – Победитель) не носит вероятностного (случайного) характера, а происходит согласно настоящим Правилам.</li>
          </ol>
        </li>
        <li>Информация об Организаторе конкурса <br>
        Общество с ограниченной ответственностью «Хипп Русь» <br>
        ИНН 7704668968 КПП 770401001 <br>
        ОГРН 1077762982483 ОКАТО 45286590000 ОКПО 84045640 <br>
        Юридический адрес:119435, Б. Саввинский пер., д. 12, стр. 18.
        </li>
        <li>Сроки проведения Конкурса.
          <ol>
            <li>Общий срок проведения Конкурса с 05 сентября 2016 г. до 30 ноября 2016 г. включительно.</li>
            <li>Период загрузки работы Участника на Конкурс с 05 сентября 2016 г. по 02 октября 2016 г. (23:59) часов включительно.</li>
            <li>Определение Победителей Конкурса производится 10 октября 2016 г. Результаты определения Победителей будут опубликованы в глобальной сети Интернет по адресу http://promo.babyblog.ru/hipp2016/fk</li>
            <li>Вручение призов, указанных в п. 6 Правил, проводится в период с 17 октября 2016 г. года по 30.11.2016 года включительно в порядке, указанном в п.14 Правил.</li>
          </ol>
        </li>
        <li>Территория проведения Конкурса.
          <ol>
            <li>Конкурс проводится на территории г. Москвы, Санкт-Петербурга, Балашихи, Видного, Долгопрудного, Королева, Люберцы, Мытищи, Одинцово, Реутова, Химки, Лобни.</li>
            <li>Конкурс проводится в глобальной сети Интернет на Интернет-сайте http://www.babyblog.ru.</li>
          </ol>
        </li>
        <li>Порядок и способ информирования участников Конкурса о Правилах, а также о результатах Конкурса
          <ol>
            <li>Информирование участников Конкурса и потенциальных участников Конкурса о его условиях, сроках, досрочном прекращении его проведения будет происходить посредством:</li>
          </ol>
        </li>
      </ol>
    </div>
    <div class="popup _participants">
      <h2 class="popup-title">участники конкурса</h2>
      <button class="popup-close"></button>
      <div class="participants">
        <div class="participant">
          <img src="<? echo $source; ?>img/participant-1.jpg" alt="" class="participant__img">
          <div class="participant-author">
            <img src="<? echo $source; ?>img/participant-author.jpg" alt="" class="author__img">
            <h3 class="author__name">Катерина</h3>
            <p class="author__location">Москва</p>
          </div>
          <p class="participant__comment">Дима обожает опыты и мечтает стать химиком, когда вырастет, на фотографии он улыбается, на фотографии он улыбается</p>
          <a href="" class="btn btn__vote">голосовать</a>
        </div>
        <div class="participant">
          <img src="<? echo $source; ?>img/participant-2.jpg" alt="" class="participant__img">
          <div class="participant-author">
            <img src="<? echo $source; ?>img/participant-author.jpg" alt="" class="author__img">
            <h3 class="author__name">Катерина</h3>
            <p class="author__location">Москва</p>
          </div>
          <p class="participant__comment">Дима обожает опыты и мечтает стать химиком, когда вырастет, на фотографии он улыбается, на фотографии он улыбается</p>
          <a href="" class="btn btn__vote">голосовать</a>
        </div>
        <div class="participant">
          <img src="<? echo $source; ?>img/participant-3.jpg" alt="" class="participant__img">
          <div class="participant-author">
            <img src="<? echo $source; ?>img/participant-author.jpg" alt="" class="author__img">
            <h3 class="author__name">Катерина</h3>
            <p class="author__location">Москва</p>
          </div>
          <p class="participant__comment">Дима обожает опыты и мечтает стать химиком, когда вырастет, на фотографии он улыбается, на фотографии он улыбается</p>
          <a href="" class="btn btn__vote">голосовать</a>
        </div>
        <div class="participant">
          <img src="<? echo $source; ?>img/participant-1.jpg" alt="" class="participant__img">
          <div class="participant-author">
            <img src="<? echo $source; ?>img/participant-author.jpg" alt="" class="author__img">
            <h3 class="author__name">Катерина</h3>
            <p class="author__location">Москва</p>
          </div>
          <p class="participant__comment">Дима обожает опыты и мечтает стать химиком, когда вырастет, на фотографии он улыбается, на фотографии он улыбается</p>
          <a href="" class="btn btn__vote">голосовать</a>
        </div>
        <div class="participant">
          <img src="<? echo $source; ?>img/participant-2.jpg" alt="" class="participant__img">
          <div class="participant-author">
            <img src="<? echo $source; ?>img/participant-author.jpg" alt="" class="author__img">
            <h3 class="author__name">Катерина</h3>
            <p class="author__location">Москва</p>
          </div>
          <p class="participant__comment">Дима обожает опыты и мечтает стать химиком, когда вырастет, на фотографии он улыбается, на фотографии он улыбается</p>
          <a href="" class="btn btn__vote">голосовать</a>
        </div>
        <div class="participant">
          <img src="<? echo $source; ?>img/participant-3.jpg" alt="" class="participant__img">
          <div class="participant-author">
            <img src="<? echo $source; ?>img/participant-author.jpg" alt="" class="author__img">
            <h3 class="author__name">Катерина</h3>
            <p class="author__location">Москва</p>
          </div>
          <p class="participant__comment">Дима обожает опыты и мечтает стать химиком, когда вырастет, на фотографии он улыбается</p>
          <a href="" class="btn btn__vote">голосовать</a>
        </div>
      </div>
      <div class="content-footer">
        <ul class="pagination">
          <li class="pagination-page"><a href="" class="pagination__link">&lt;</a></li>
          <li class="pagination-page"><a href="" class="pagination__link pagination__link_active">1</a></li>
          <li class="pagination-page"><a href="" class="pagination__link">2</a></li>
          <li class="pagination-page"><a href="" class="pagination__link">3</a></li>
          <li class="pagination-page"><a href="" class="pagination__link">4</a></li>
          <li class="pagination-page"><a href="" class="pagination__link">5</a></li>
          <li class="pagination-page"><a href="" class="pagination__link">&gt;</a></li>
        </ul>
      </div>
    </div>
    <script src="<? echo $source; ?>js/jquery.min.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
    <script src="<? echo $source; ?>js/jquery.validate.min.js"></script>
    <script src="<? echo $source; ?>js/jquery.bpopup.min.js"></script>
 <? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>