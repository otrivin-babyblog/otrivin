<?php
$title ='Планируй день';
$og_title = 'Календарь для мам';
$og_url = 'calendar.php';
$og_image = 'img/shares/share_plan_day.jpg';
$og_description = 'Спланируйте свой день по часам и постарайтесь четко следовать таймингу. Удивитесь, как это поможет организовать себя и сэкономить время! Освободившиеся час-два можно потратить на то, о чем вы давно мечтали — чтение книги или домашние спа-процедуры.';
?>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/header.php") ?>  
  <body>
    <div class="wrapper">
        <? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
        <div class="content">
          <div class="title-img">
            <img src="<? echo $source; ?>img/plan-day.png" alt="Конкурсы">
            <h1 class="main-title">Планируй день</h1>
          </div>
          <div class="breadcrumb">
            <a href="<? echo $source; ?>" class="breadcrumb__link">Главная</a>
            <span class="breadcrumb__separator">/</span>
            <a href="" class="breadcrumb__link breadcrumb__link_current">Планируй день</a>
          </div>
          <h1 class="page-title">Календарь для мам</h1>
          <p class="page-about page-about_short">У вашего малыша есть четкий распорядок дня — подъем, умывание, завтрак, прогулка, обед, дневной сон… А как с этим обстоят дела у вас? Вы бегаете вокруг малыша целый день, стараясь все успеть, и в результате на себя совсем не остается времени? Советуем составить расписание! <br/><br/> Спланируйте свой день по часам и постарайтесь четко следовать таймингу. Удивитесь, как это поможет организовать себя и сэкономить время! Освободившиеся час-два можно потратить на то, о чем вы давно мечтали — чтение книги или домашние спа-процедуры.</p>

          <div class="calendar-wrapper">
            <div class="choose-date">
              <div class="datepicker-wrapper">
                <input readonly type="text" id="datepc" class="datepicker">
                <i class="fa fa-caret-down pdot-dt"></i>
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
				
				<p>А для подробного ознакомления с потешками и сказками, кликните на нужной кнопке правой кнопкой мыши и выбирете "Открыть на новой вкладке" или "Открыть в новом окне" или наведите курсор на нужную кнопку и нажмите среднюю кнопку мыши (колесико)</p>
				<ul>
                  <li><a href="<? echo $source; ?>nose_hygiene.php" class="otrivin-nasmork-anons"><p>Гигиена носика</p></a></li>
                  <li><a href="<? echo $source; ?>igry_s_rebenkom.php" class="otrivin-nasmork-play"><p>Игры с ребенком</p></a></li>
                  <li><a href="<? echo $source; ?>music.php" class="otrivin-nasmork-music"><p>Музыка</p></a></li>
                  <li><a href="<? echo $source; ?>verses.php" class="otrivin-nasmork-poem"><p>Потешки</p></a></li>
				  
				  <li><a href="<? echo $source; ?>uroki_dlya_mam.php" class="otrivin-nasmork-mom-lessons"><p>Уроки для мам</p></a></li>
				  <li><a href="<? echo $source; ?>domestic_chores.php" class="otrivin-nasmork-house-cleaning"><p>Домашние дела</p></a></li>
				  <li><a href="<? echo $source; ?>tales.php" class="otrivin-nasmork-fairy-tale"><p>Сказки на ночь</p></a></li>
				  
				  
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
			
			
			
			
			
			
			 <div class="calendar-mobile-table">
              <div class="one-time">
                <p class="time">7:00 - 9:00</p>
                <ul></ul>
              </div>
              <div class="one-time">
                <p class="time">9:00 - 11:00</p>
                <ul></ul>
              </div>
              <div class="one-time">
                <p class="time">11:00 - 13:00</p>
                <ul></ul>
              </div>
              <div class="one-time">
                <p class="time">13:00 - 15:00</p>
                <ul></ul>
              </div>
              <div class="one-time">
                <p class="time">15:00 - 17:00</p>
                <ul></ul>
              </div>
              <div class="one-time">
                <p class="time">17:00 - 19:00</p>
                <ul></ul>
              </div>
              <div class="one-time">
                <p class="time">19:00 - 21:00</p>
                <ul></ul>
              </div>
            </div>
            <div class="calendar-actions-mobile">
              <form class="form-actions-mobile">
                <div class="tasks">
                  <p class="title">Выберите задачу</p>
                  <ul>
                    <li>
					<label>
                        <input type="checkbox" name="tasks" value="Гигиена носика">
                        <span>Гигиена носика</span>
                      </label>
					
					<label>
                        <input type="checkbox" name="tasks" value="Уроки для мам">
                        <span>Уроки для мам</span>
                      </label>
					  <label>
                        <input type="checkbox" name="tasks" value="Домашние дела">
                        <span>Домашние дела</span>
                      </label>
					  <label>
                        <input type="checkbox" name="tasks" value="Сказки">
                        <span>Сказки</span>
                      </label>
					
					
                      <label>
                        <input type="checkbox" name="tasks" value="Потешки">
                        <span>Потешки</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name="tasks" value="Игры">
                        <span>Игры</span>
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="checkbox" name="tasks" value="Музыка">
                        <span>Музыка</span>
                      </label>
                    </li>
                  </ul>
                </div>
                <div class="times">
                  <p class="title">Выберите время</p>
                  <div class="col">
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" name="times" value="1">
                          <span>7:00-9:00</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="times" value="2">
                          <span>9:00-11:00</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="times" value="3">
                          <span>11:00-13:00</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="times" value="4">
                          <span>13:00-15:00</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <ul>
                      <li>
                        <label>
                          <input type="checkbox" name="times" value="5">
                          <span>15:00-17:00</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="times" value="6">
                          <span>17:00-19:00</span>
                        </label>
                      </li>
                      <li>
                        <label>
                          <input type="checkbox" name="times" value="7">
                          <span>19:00-21:00</span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div class="clear"></div>
                </div>
                <button type="submit">Добавить задачу</button>
              </form>
            </div>
			
			
			
			
			
			
			
          </div>
          <div class="otriv-calend-pr"><img src="img/elephant_family.png" alt=""><img src="img/otriv_medic_save.png" alt="" ></div>
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
	<script> var siteurl = '<? echo $source; ?>'; </script>
    <script src="<? echo $source; ?>js/calendar.js"></script>
    <script src="<? echo $source; ?>js/script.js"></script>
    <script src="//yastatic.net/share2/share.js" async="async"></script>
<? 
$scrollPage = 'planning';
$s25 = true;$s50 = true;$s75 = true;$s100 = true;

include($_SERVER['DOCUMENT_ROOT']."/includes/doscroll.php");

include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>
