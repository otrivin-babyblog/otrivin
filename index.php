<?
$title ='Отривин Бэби';
$og_title = '';
$og_url = '';
$og_image = '';
$og_description = '';
include($_SERVER['DOCUMENT_ROOT']."/includes/header.php");


?>
<body>
	<div class="wrapper">
		<? include($_SERVER['DOCUMENT_ROOT']."/includes/header_main.php") ?>
		<div class="main">
			<div class="container">
				<div class="main_item">
					<ul>
						<li>
							<div class="main_info">
								<img src="<? echo $source; ?>img/main-1.png" alt="">
								<div class="main_info_item">
									<div class="main_info_link">
										<p><img src="<? echo $source; ?>img/main-line.png" alt=""></p>
										<a href="<? echo $source; ?>no_more_cold.php" class="info_a otrivin-no-more-cold">Прощай, насморк <i><img src="<? echo $source; ?>img/down-arrow.svg" alt=""></i></a>
										<div class="main_but"><a href="<? echo $source; ?>nose_hygiene.php" class="otrivin-no-more-cold"><span>Ознакомиться</span></a> <img src="<? echo $source; ?>img/elephant.png" alt=""></div>
									</div>

								</div>
							</div>
						</li>
						<li>
							<div class="main_info">
								<img src="<? echo $source; ?>img/main-2.png" alt="">
								<div class="main_info_item">
									<div class="main_info_link">
										<p><img src="<? echo $source; ?>img/main-line.png" alt=""></p>
										<a href="<? echo $source; ?>entertain.php" class="info_a otrivin-entertain">Развлекай ребёнка <i><img src="<? echo $source; ?>img/down-arrow.svg" alt=""></i></a>
										<div class="main_but"><a href="<? echo $source; ?>entertain.php" class="otrivin-entertain"><span>Перейти в раздел</span></a> <img src="<? echo $source; ?>img/elefant_twice.png" alt=""></div>
									</div>

								</div>
							</div>
						</li>
						<li>
							<div class="main_info">
								<img src="<? echo $source; ?>img/main-3.png" alt="">
								<div class="main_info_item">
									<div class="main_info_link">
										<p><img src="<? echo $source; ?>img/main-line.png" alt=""></p>
										<a href="<? echo $source; ?>save.php" class="info_a otrivin-save">Сохраняй важное <i><img src="<? echo $source; ?>img/down-arrow.svg" alt=""></i></a>
										<div class="main_but"><a href="<? echo $source; ?>save.php" class="otrivin-save"><span>Создать заметки</span></a> <img src="<? echo $source; ?>img/while.png" alt=""></div>
									</div>

								</div>
							</div>
						</li>
						<li>
							<div class="main_info">
								<img src="<? echo $source; ?>img/main-4.png" alt="">
								<div class="main_info_item">
									<div class="main_info_link">
										<p><img src="<? echo $source; ?>img/main-line.png" alt=""></p>
										<a href="<? echo $source; ?>calendar.php" class="info_a otrivin-plan-day">Планируй день <i><img src="<? echo $source; ?>img/down-arrow.svg" alt=""></i></a>
										<div class="main_but"><a href="<? echo $source; ?>calendar.php" class="otrivin-plan-day"><span>Начать планировать</span></a> <img src="<? echo $source; ?>img/penguim.png" alt=""></div>
									</div>

								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="main_bot">
					<div class="main_bot_item">
						<img src="<? echo $source; ?>img/disckl.png" alt="" class="disckl">
						<img src="<? echo $source; ?>img/disckl-320.png" alt="" class="disckl-320">
					</div>
				</div>
			</div>
		</div>
		<div class="social_foot">
			<div class="container">
				<div class="social_foot_item">
					<p>Поделиться в социальных сетях</p>
					<ul>
						<li><a href="https://www.babyblog.ru/" class="social_vk"><div class="ya-share2" data-services="vkontakte" data-counter=""></div></a></li>
						<li><a href="https://www.babyblog.ru/" class="social_fc"><div class="ya-share2" data-services="facebook"></div></a></li>
						<li><a href="https://www.babyblog.ru/" class="social_ok"><div class="ya-share2" data-services="odnoklassniki"></div></a></li>
						<li><a href="https://www.babyblog.ru/" class="social_g"><div class="ya-share2" data-services="gplus"></div></a></li>
						<li><a href="https://www.babyblog.ru/" class="social_tw"><div class="ya-share2" data-services="twitter"></div></a></li>
						<li><a href="https://www.babyblog.ru/" class="social_ml"><div class="ya-share2" data-services="moimir"></div></a></li>
						<li><a href="https://www.babyblog.ru/" class="social_whatsapp"><div class="ya-share2" data-services="whatsapp"></div></a></li>
						<li><a href="https://www.babyblog.ru/" class="social_vib"><div class="ya-share2" data-services="viber"></div></a></li><!--
						<li><a href="#" class="social_vk"><span></span></a></li>
						<li><a href="#" class="social_fc"><span></span></a></li>
						<li><a href="#" class="social_ok"><span></span></a></li>
						<li><a href="#" class="social_g"><span></span></a></li>
						<li><a href="#" class="social_tw"><span></span></a></li>
						<li><a href="#" class="social_ml"><span></span></a></li>
						<li><a href="#" class="social_whatsapp"><span></span></a></li>
						<li><a href="#" class="social_vib"><span></span></a></li> -->
					</ul>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="<? echo $source; ?>js/jquery.min.js"></script>
		<? include($_SERVER['DOCUMENT_ROOT']."/includes/footer_main.php") ?>
	</div>
	
	<script type="text/javascript" src="<? echo $source; ?>js/flexibility.js"></script>
	<script type="text/javascript" src="<? echo $source; ?>js/script.js"></script>
	<script src="//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"></script>
<script src="//yastatic.net/share2/share.js" async="async"></script>
<? include($_SERVER['DOCUMENT_ROOT']."/includes/footer.php") ?>