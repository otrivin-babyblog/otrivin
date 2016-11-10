'use strict';
var files;
var fileName = '';
var user_id = '';
var ajaxgetinfo = '';


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

$('.otrivin-mom-video1').load(function(){
  $(this).contents().find("body").on('click', function(event) { ga('send', 'event', 'mom_lessons', 'click', 'play_video_1'); });
});

$('.otrivin-mom-video2').load(function(){
  $(this).contents().find("body").on('click', function(event) { ga('send', 'event', 'mom_lessons', 'click', 'play_video_2'); });
});

$('.otrivin-mom-video3').load(function(){
  $(this).contents().find("body").on('click', function(event) { ga('send', 'event', 'mom_lessons', 'click', 'play_video_3'); });
});

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
			$('.js_contest').hide();
		}
       // console.log('iframe !!!!');
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
			callIframe('http://otrivindata.pdigit.top/api/images/form/-1/-1/-1');
	
		}
		
		
	 
	 /*------------------------------------------*/
	 /*--------     участики конкурса    -------*/
	 $.ajax({
			type: "GET",
			url: "http://otrivindata.pdigit.top/api/images/getall",
			success: function(msg) {
				//console.log(msg); 
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
				 
				 
				  $('#part443').prepend(
				  
				  '<div class="participant">'+
				 '<div style="height: 400px; min-height: 400px; overflow: hidden; margin-bottom: 20px;"> <img src="http://otrivindata.pdigit.top/uploads/1/'+item.url+'.jpg" alt="" class="participant__img" ></div>'+
				  '<div class="participant-author">'+
					'<img src="'+ava+'" alt="" class="author__img">'+
					'<h3 class="author__name">'+str+'</h3>'+
					/*'<p class="author__location">Москва</p>'+*/
				 '</div>'+
				  '<p class="participant__comment">'+item.description+'</p>'+
				
				'</div>'
					   );
				});
				/*
				*/
				var count_on_page = 1,
				    count_el = 0,
					cur_p = 0,
					cp = 1;
				var	count_page = 0;
				
				$('.participant').each(function(i,el){
					count_el = count_el + 1;
					cur_p = cur_p +1;
					$(el).addClass('pp142_p'+cp);
					
					if (cur_p >= count_on_page){
						cur_p = 0;
						cp = cp +1;
					}
				});
				
				count_page = (count_el % count_on_page) +1;
				console.log('el: '+count_el+' page: '+count_page);
				 $('#pag_part142').append('<li class="pagination-page pp142_min" data-id="pp" ><a id="pp" class="pagination__link">&lt;</a></li>');
				 
				 for(var i=0; i<count_page; i++)
				 {
					 var t = (i+1)+'';
					  $('#pag_part142').append(' <li class="pagination-page pp142_'+t+'" data-id="'+t+'" ><a id="p'+t+'" class="pagination__link">'+t+'</a></li>');
				 }
				 
				 
				 $('#pag_part142').append(' <li class="pagination-page pp142_max" data-id="pn" ><a id="pn" class="pagination__link">&gt;</a></li>');
				 
				 $('#p1').addClass('pagination__link_active');
			 /*<li class="pagination-page " data-id="1" ><a id="p1" class="pagination__link pagination__link_active">1</a></li>
            <li class="pagination-page " data-id="2" ><a id="p2" class="pagination__link">2</a></li>
            <li class="pagination-page p25" data-id="3" ><a id="p3" class="pagination__link">3</a></li>
            <li class="pagination-page p25" data-id="4" ><a id="p4" class="pagination__link">4</a></li>
            <li class="pagination-page p25" data-id="5" ><a id="p5" class="pagination__link">5</a></li>
           */
				
				/*
				*/
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


