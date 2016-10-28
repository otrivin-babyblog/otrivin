<? $title ='Планируй день';?>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/header.php") ?>  
  <body>
    <div class="wrapper">
        <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
        <div class="content">
          <div class="title-img">
            <img src="<? echo $source; ?>img/title-img-contests.jpg" alt="Конкурсы">
            <h1 class="main-title">Планируй день</h1>
          </div>
          <div class="breadcrumb">
            <a href="/otrivin_baby/" class="breadcrumb__link">Главная</a>
            <span class="breadcrumb__separator">/</span>
            <a href="" class="breadcrumb__link breadcrumb__link_current">Планируй день</a>
          </div>
          <h1 class="page-title">Календарь для мам</h1>
          <p class="page-about page-about_short">У вашего малыша есть четкий распорядок дня — подъем, умывание, завтрак, прогулка, обед, дневной сон… А как с этим обстоят дела у вас? Вы бегаете вокруг малыша целый день, стараясь все успеть, и в результате на себя совсем не остается времени? Советуем составить расписание! Спланируйте свой день по часам и постарайтесь четко следовать таймингу. Удивитесь, как это поможет организовать себя и сэкономить время! Освободившиеся час-два можно потратить на то, о чем вы давно мечтали — чтение книги или домашние спа-процедуры.</p>

          <div class="calendar-wrapper">
            <div class="choose-date">
              <div class="datepicker-wrapper">
                <input readonly type="text" class="datepicker">
                <i class="fa fa-caret-down"></i>
              </div>
            </div>
            <div class="calendar-images">
              <ul>
                <li><img src="<? echo $source; ?>img/calendar-image-1.png" alt=""></li>
                <li><img src="<? echo $source; ?>img/calendar-image-2.png" alt=""></li>
                <li><img src="<? echo $source; ?>img/calendar-image-3.png" alt=""></li>
              </ul>
            </div>
            <div class="calendar-table">
              <table>
                <tr>
                  <td class="head">7:00-9:00</td>
                  <td class="head">9:00-11:00</td>
                  <td class="head">11:00-13:00</td>
                  <td class="head">13:00-15:00</td>
                  <td class="head">15:00-17:00</td>
                  <td class="head">17:00-19:00</td>
                  <td class="head">19:00-21:00</td>
                </tr>
                <tr>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                </tr>
                <tr>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                </tr>
                <tr>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                </tr>
                <tr>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                </tr>
                <tr>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                </tr>
                <tr>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                  <td class="action"></td>
                </tr>
              </table>
            </div>
            <div class="calendar-actions-wrapper">
              <div class="calendar-actions">
                <p>Выберите необходимые дела ниже и просто перетащите в нужное время вашего календаря</p>
                <ul>
                  <li><a href="/otrivin_baby/nose_hygiene.php">Гигиена носика</a></li>
                  <li><a href="/otrivin_baby/igry_s_rebenkom.php">Игры с ребенком</a></li>
                  <li><a href="/otrivin_baby/music.php">Музыка</a></li>
                  <li><a href="/otrivin_baby/verses.php">Потешки</a></li>
				  
				  <li><a href="/otrivin_baby/uroki_dlya_mam.php">Уроки для мам</a></li>
				  <li><a href="/otrivin_baby/domestic_chores.php">Домашние дела</a></li>
				  <li><a href="/otrivin_baby/tales.php">Сказки на ночь</a></li>
				  
				  
                  <li>
                    <div class="add-form">
                      <form>
                        <input required type="text" name="title" value="" placeholder="Название дела">
                        <div class="buttons">
                          <button class="save" type="submit">
                            <i class="fa fa-check"></i>
                          </button>
                          <button class="cancel">
                            <i class="fa fa-times"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <a class="add">Добавить задачу</a>
                  </li>
				  
				    <!--li><a class="print" style="background: #F2937E; color: #fff;">Распечатать</a></li-->
				  
                </ul>
				 <!--button class="print-btn"><span>распечатать</span></button-->
				<button class="print-btn"><span>распечатать</span></button>
              </div>
              <div class="calendar-image">
                <img src="<? echo $source; ?>img/calendar-elephant.png" alt="">
              </div>
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
	  <script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
    <script src="<? echo $source; ?>js/jquery.min.js"></script>
    <script src="<? echo $source; ?>js/bootstrap-datepicker.min.js"></script>
    <script src="<? echo $source; ?>js/bootstrap-datepicker.ru.min.js"></script>
    <script src="<? echo $source; ?>js/calendar.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>
