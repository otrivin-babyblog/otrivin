'use strict';
var files;
var fileName = '';
//var user_id = '';
//var ajaxgetinfo = '';


function div(val, by){
    return (val - val % by) / by;
}

$.ajax({
			type: "GET",
			url: "https://www.babyblog.ru/user/ajax_get_info",
			xhrFields: {
            withCredentials: true
			},
			success: function(msg) {
				
				ajaxgetinfo = msg;
				var uid = msg.user_id;
				if (uid)
				{
					user_id = uid;
					
					
					
					
					
				}
				
				
			},
			error: function(errmsg){
				console.log(errmsg);
			} 
		});
	


	
		
$(document).bind('popup_close', function(){
  	$(".popup _thanks").show();
	$(".popup _upload").hide();
});

$('#otrivin-logo').click( function(){
	ga('send', 'event', 'Main_menu', 'to_client', 'logo');
});

$('.otrivin-no-more-cold').click( function(){
	ga('send', 'event', 'Main', 'to_nasmork', 'anons_nasmork');
});

$('.otrivin-entertain').click( function(){
	ga('send', 'event', 'Main', 'to_fun', 'anons_fun');
});

$('.otrivin-save').click( function(){
	ga('send', 'event', 'Main', 'to_important', 'anons_important');
});

$('.otrivin-plan-day').click( function(){
	ga('send', 'event', 'Main', 'to_planning', 'anons_planning');
});

$('.otrivin-step-1').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'first_step');
});

$('.otrivin-step-2').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'second_step');
});

$('.otrivin-play-video').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'play_video');
});

$('.otrivin-lesson-1').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_1');
});

$('.otrivin-lesson-2').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_2');
});

$('.otrivin-lesson-3').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_3');
});

$('.otrivin-lesson-4').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_4');
});

$('.otrivin-lesson-5').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_5');
});

$('.otrivin-lesson-6').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_6');
});

$('.otrivin-lesson-7').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_7');
});

$('.otrivin-lesson-8').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_8');
});

$('.otrivin-lesson-9').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'lesson_9');
});

$('.otrivin-instructions').click( function(){
	ga('send', 'event', 'nasmork', 'click', 'instructions');
});

$('.otrivin-start-game').click( function(){
	ga('send', 'event', 'fun', 'click', 'game');
});

$('.otrivin-tales').click( function(){
	ga('send', 'event', 'fun', 'click', 'fairy_tale');
});

$('.otrivin-music').click( function(){
	ga('send', 'event', 'fun', 'to_music', 'anons_music');
});

$('.otrivin-poems').click( function(){
	ga('send', 'event', 'fun', 'click', 'poem');
});



$('.otrivin-song-1').click( function(){
	ga('send', 'event', 'music', 'click', 'song_1');
});

$('.otrivin-song-2').click( function(){
	ga('send', 'event', 'music', 'click', 'song_2');
});

$('.otrivin-song-3').click( function(){
	ga('send', 'event', 'music', 'click', 'song_3');
});

$('.otrivin-song-4').click( function(){
	ga('send', 'event', 'music', 'click', 'song_4');
});

$('.otrivin-song-5').click( function(){
	ga('send', 'event', 'music', 'click', 'song_5');
});

$('.otrivin-nasmork-anons').click( function(){
	ga('send', 'event', 'planning', 'to_nasmork', 'anons_nasmork');
});

$('.otrivin-nasmork-play').click( function(){
	ga('send', 'event', 'planning', 'to_play', 'anons_play');
});

$('.otrivin-nasmork-music').click( function(){
	ga('send', 'event', 'planning', 'to_music', 'anons_music');
});

$('.otrivin-nasmork-poem').click( function(){
	ga('send', 'event', 'planning', 'to_poem', 'anons_poem');
});

$('.otrivin-nasmork-mom-lessons').click( function(){
	ga('send', 'event', 'planning', 'to_mom_lessons', 'anons_mom_lessons');
});

$('.otrivin-nasmork-house-cleaning').click( function(){
 	ga('send', 'event', 'planning', 'to_house_cleaning', 'anons_house_cleaning');
});

$('.otrivin-nasmork-fairy-tale').click( function(){
 	ga('send', 'event', 'planning', 'to_fairy_tale', 'anons_fairy_tale');
});

/*
$('.otrivin-mom-video1').load(function(){
	//$(this).contents().find("body").on('click', function(event) { ga('send', 'event', 'mom_lessons', 'click', 'play_video_1'); });
});

$('.otrivin-mom-video2').load(function(){
  //$(this).contents().find("body").on('click', function(event) { ga('send', 'event', 'mom_lessons', 'click', 'play_video_2'); });
});

$('.otrivin-mom-video3').load(function(){
 // $(this).contents().find("body").on('click', function(event) { ga('send', 'event', 'mom_lessons', 'click', 'play_video_3'); });
});*/

$('.otrivin-anons-contest').click( function(){
	ga('send', 'event', 'fun', 'to_fk', 'anons_fk');
});


function callIframe(url) {
    $('.popup._upload').append(' <iframe id="f200" src="'+url+'" style="border: 0px; width: 100%; height: 550px;" ></iframe>');
   // $('iframe#f200').attr('src', url);
    $('iframe#f200').load(function()
    {
		if (user_id !=''){
			$('.js_contest').show();
			
			
			
		}else
		{
			//$('.js_contest').hide();
		}
       // console.log('iframe !!!!');
    });
}



function vote(param1,param2){
	$.ajax({
			type: "GET",
			url: "http://otrivindata.pdigit.top/api/vote/"+param1+"/"+param2,
			success: function(msg) {
				console.log(msg);
				
					if (msg=='200')
												{
													//$('.vote').css({'display':'none'});
													// vote +
													$('#vote99').prepend('<h2 id="vote2" class="popup-title">Спасибо, голос засчитан!</h2>');
													
												}else if (msg=='201'){
													
													// vote+
													//$('.vote').css({'display':'none'});
													$('#vote99').prepend('<h2 id="vote2" class="popup-title">Спасибо, голос засчитан!</h2>');
													
												}else if (msg=='301')
												{
													//$('.vote').css({'display':'none'});
													$('#vote99').prepend('<h2 id="vote2" class="popup-title">Извините, Вы уже голосовали за эту работу!</h2>');
													
												}else
													
													{
														$('#vote99').prepend('<h2 id="vote2" class="popup-title">Извините, Вы не можете голосовать!</h2>');
													
													}
												
							$('._participants').css({'height':'250px','overflow':'hidden'});
							$('#vote99').css({'height':'250px'});	
							
							$('#vote99').css({'display':'block'});
							console.log('pvote block');

							
					$('.popupvote_close').click(function () {
						
						
						$('._participants').css({'height':'auto'/*,'overflow':'none'*/});
						$('#vote99').css({'height':'auto'});
						
					$('#vote99').css({'display':'none'});
					$('#vote2').remove();
					console.log('vote close');
				});
				
				},
			error: function(errmsg){
				console.log(errmsg);
			} 
		});
	
}




$(document).ready(function () {
	
    $('.header_bot_menu_320_icon').click(function () {
        $('.header_bot_link_menu ul').fadeIn(700);
    });
    $('.closse_menu_320').click(function () {
        $('.header_bot_link_menu ul').hide();
    });

    /*amuse_baby*/
    $('.contest_link div a').click(function () {
        $('.contest_link p').css('-webkit-line-clamp', '20');
        $('.contest_link div a').text('Свернуть');
    });
	
	
	    if (user_id !='' && ajaxgetinfo!=''){
			callIframe('http://otrivindata.pdigit.top/api/images/form/'+user_id+'/'+ajaxgetinfo.fio+'/'+ajaxgetinfo.avatar);
	
		}else
		{
			callIframe('http://otrivindata.pdigit.top/api/images/form/-1/-1/null');
	
		}
		
		
	 
	 /*------------------------------------------*/
	 /*--------     участики конкурса    -------*/
	 $.ajax({
			type: "GET",
			url: "http://otrivindata.pdigit.top/api/images/getall",
			success: function(msg) {
				console.log(msg); 
				msg.forEach(function(item, i, arr) {
				 
				  var str = unescape(JSON.parse('"'+item.fio+'"'));
				  var ava ='';
				  
				 if (''+item.avatar=='null'){
					 ava = 'http://otrivin.pdigit.top/img/user.png';
					// console.log('nl');
				 }else
				 {
					 ava = item.avatar;
					 // console.log('nl  ---');
				 }
				 
				 if (user_id != ''){
				  $('#part443').append(
				  
				  '<div class="participant">'+
				 '<div style="height: 300px; min-height: 300px; overflow: hidden; margin-bottom: 20px;"> <img data-desc="'+str+'" src="http://otrivindata.pdigit.top/uploads/1/'+item.url+'.jpg" alt="" class="participant__img prewLB" ></div>'+
				  '<div class="participant-author">'+
					'<img src="'+ava+'" alt="" class="author__img">'+
					'<h3 class="author__name">'+str+'</h3>'+
					/*'<p class="author__location">Москва</p>'+*/
				 '</div>'+
				  '<p class="participant__comment">'+item.description+'</p>'+
					
					'<a onclick="javascript:vote(\''+user_id+'\',\''+item.url+'\');" class="btn vote" style="width:100%;">Голосовать</a>'+
				
				'</div>'
					   );
					   
				 }else
				 {
					  $('#part443').append(
				  
				  '<div class="participant">'+
				 '<div style="height: 300px; min-height: 300px; overflow: hidden; margin-bottom: 20px;"> <img data-desc="'+str+'" src="http://otrivindata.pdigit.top/uploads/1/'+item.url+'.jpg" alt="" class="participant__img prewLB" ></div>'+
				  '<div class="participant-author">'+
					'<img src="'+ava+'" alt="" class="author__img">'+
					'<h3 class="author__name">'+str+'</h3>'+
					/*'<p class="author__location">Москва</p>'+*/
				 '</div>'+
				  '<p class="participant__comment">'+item.description+'</p>'+
				  
					/*'<a href="javascript:void(0);" class="btn" style="width:100%; background: #fff;">Голосовать</a>'+*/
					'<a onclick="javascript:vote(\'2\',\''+item.url+'\');" class="btn vote" style="width:100%;">Голосовать</a>'+
				'</div>'
					   );
					   
				 }
					   
				});
				
				
				
				// проверка возможности голосование на старте
				// отменено
				/*if (user_id!='')
				{
					$.ajax({
									type: "GET",
									url: "http://otrivindata.pdigit.top/api/voteinfo/"+user_id,
									success: function(msg) {
												console.log(msg);
												if (msg=='info 301')
												{
													//$('.vote').css({'display':'none'});
												}else if (msg=='info 200'){
													$('.vote').css({'display':'block'});
												}
												
												
										},
									error: function(errmsg){
										console.log(errmsg);
									} 
									});
				}	
				else
					
					{
						//$('.vote').css({'display':'none'});
					}*/
				
				
				
				/*
				*/
				
				// TEST NEW EL
				// сгенерировать  тестовые элементы
			/*	var id2 = '1';
				var id12 = 'gPGRuZUY';
			for(var j=0; j<10; j++)
				{
						$('#part443').append(
				  
				  '<div class="participant">'+
				 '<div style="height: 300px; min-height: 300px; overflow: hidden; margin-bottom: 20px;"> <img data-desc="NAME'+j+'" src="http://otrivin.pdigit.top/img/user.png" alt="" class="participant__img prewLB" ></div>'+
				  '<div class="participant-author">'+
					'<img src="http://otrivin.pdigit.top/img/user.png" alt="" class="author__img">'+
					'<h3 class="author__name">NAME'+j+'</h3>'+
					//'<p class="author__location">Москва</p>'+
				 '</div>'+
				  '<p class="participant__comment">DESC'+j+'</p>'+
				
					'<a onclick="javascript:vote(\''+id2+'\',\''+id12+'\');" class="btn vote" style="width:100%;">Голосовать</a>'+
				
				'</div>'
					   );
						
						
				}*/
				
				$('.prewLB').click(function(){
					var s = $(this).attr('src');
					var d = $(this).data('desc');
					
					$('#lb99').append('<img id="imgprew" src="'+s+'" alt="" style="width: 100%; ">');
					$('#lb99').append('<h2 id="imgprew2" class="popup-title" style="color: #fff;">'+d+'</h2>');
					
					 $('.popuplb').css({'display':'block'});
					console.log('prewLB');
					
				});
				
				$('.popuplb_close').click(function () {
					$('.popuplb').css({'display':'none'});
					$('#imgprew').remove();
					$('#imgprew2').remove();
					console.log('prewLB close');
				});
				
				
				// paginator start
				
				var count_on_page = 3, // кол-во элементов на странице
				    count_el = 0, // кол-во элементов
					cur_p = 0, // дополнительные переменные для 
					cp = 1; // добавления соот. класса(номера страниц по сути) элементам
				var	count_page = 0; // кол-во страниц
				
				
				
				$('.participant').each(function(i,el){
					count_el = count_el + 1; // считаем элементы
					cur_p = cur_p +1; //отсчитываем какой класс (номер страницы по сути) присвоить элементу.
					$(el).addClass('pp142_p'+cp);
					
					// если ушли на следующую страницу
					if (cur_p >= count_on_page){
						cur_p = 0;
						cp = cp +1;
					}
				});
				
				count_page = div(count_el, count_on_page);// считаем кол-ко страниц
				if (count_on_page * count_page < count_el)
				{
					count_page = count_page +1;
				}
				
				if (count_page <=1){
					$('#pag_part142').css({'display':'none'});
				}else
				{
					$('#pag_part142').css({'display':'inline-block'});
				}
				
				
				//console.log('el: '+count_el+' page: '+count_page); // отладочный код
				 $('#pag_part142').append('<li class="pagination-page pp142_min" data-id="pp" ><a id="pp" class="pagination__link" style="text-align: center;">&lt;</a></li>');
				 
				 // добавляем линки в пагинатор
				 for(var i=0; i<count_page; i++)
				 {
					 var t = (i+1)+''; // номер страницы для каждого линка
					  $('#pag_part142').append(' <li class="pagination-page pp142" data-id="'+t+'" ><a id="p'+t+'" class="pagination__link" style="text-align: center;">'+t+'</a></li>');
				 }
				 
				 
				 $('#pag_part142').append(' <li class="pagination-page pp142_max" data-id="pn" ><a id="pn" class="pagination__link" style="text-align: center;">&gt;</a></li>');
				 
				 // активируем 1-ю страницу (линк)
				 $('#p1').addClass('pagination__link_active');
				/*---------------------------------------------------------------------------------*/
				
					var current_num_page = 1; // номер текущей страницы
					
					// отобразить текущую страницу
					$('.participant').each(function(i, el){
						if ($(el).hasClass('pp142_p'+current_num_page)){
						  $(el).css({'display':'inline-block'});
						}else
						{
							$(el).css({'display':'none'});
						}
					});
				
					// событие на линки
					$('.pp142').click(function(){
						
						$('#p'+current_num_page).removeClass('pagination__link_active');
						current_num_page = $(this).data('id'); // текущей становится страница с id из линка
						$('#p'+current_num_page).addClass('pagination__link_active');
						
						// отобразить элементы с текущей страницы
						if (current_num_page !== undefined)
						{
							
								$('.participant').each(function(i, el){
									if ($(el).hasClass('pp142_p'+current_num_page)){
									  $(el).css({'display':'inline-block'});
									}else
									{
										$(el).css({'display':'none'});
									}
								});
						}
						else{}
						
						
					});
					
					// линк "влево"
					$('.pp142_min').click(function(){
						
						$('#p'+current_num_page).removeClass('pagination__link_active');
						current_num_page = current_num_page - 1;
						if (current_num_page <=0){
							current_num_page = 1;
						}
						$('#p'+current_num_page).addClass('pagination__link_active');
					
					
					
						if (current_num_page !== undefined)
						{
							
								$('.participant').each(function(i, el){
									if ($(el).hasClass('pp142_p'+current_num_page)){
									  $(el).css({'display':'inline-block'});
									}else
									{
										$(el).css({'display':'none'});
									}
								});
						}
						else{}
					});
					
					// линк "вправо"
					$('.pp142_max').click(function(){
						
						$('#p'+current_num_page).removeClass('pagination__link_active');
						current_num_page = current_num_page + 1;
						if (current_num_page > count_page){
							current_num_page = count_page;
						}
						$('#p'+current_num_page).addClass('pagination__link_active');
					
					
					
						if (current_num_page !== undefined)
						{
							
								$('.participant').each(function(i, el){
									if ($(el).hasClass('pp142_p'+current_num_page)){
									  $(el).css({'display':'inline-block'});
									}else
									{
										$(el).css({'display':'none'});
									}
								});
						}
						else{}
					});
					
					// paginator end
				
				/*----------------------------------------------------------------------------------*/
			},
			error: function(errmsg){
				console.log(errmsg);
			} 
		});
	 /*--------------------------------------------------*/
	 /*--------------------------------------------------*/
	 
});
	


$(function () {
    $('.complex-step').on('click', function () {
        var productName = $(this).attr('data-name');
        $('.complex-step, .product-about').removeClass('_active');
        $('.complex-step[data-name="' + productName + '"], .product-about[data-name="' + productName + '"]').addClass('_active');
    });

    $('.input-file').each(function () {
        var $input = $(this),
            $counter = $input.parent('.input__label_file').next('.input__current-file'),
            counterVal = $counter.html();

        $input.on('change', function (e) {
           

            if (this.files && this.files.length > 1)

			{
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
				files = event.target.files;
				console.log(files);
			}
			else if 
			(e.target.value)
			{
				 fileName = e.target.value.split('\\').pop();
				files = e.target.value;
				console.log(files);
			}

            if (fileName) $counter.html('<span>Вы выбрали: </span>' + fileName);else $counter.html('<span>Вы выбрали: </span>' + counterVal);
        });
    });
});


