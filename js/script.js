'use strict';
var files;
var fileName = '';
//var user_id = '';
//var ajaxgetinfo = '';


function div(val, by){
    return (val - val % by) / by;
}
/*
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
		});*/
	


	
		
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






function vote(param1,param2){
	$.ajax({
			type: "GET",
			url: "http://otrivindata.pdigit.top/api/vote/"+param1+"/"+param2,
			success: function(msg) {
				//console.log(msg);
				
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
							//console.log('pvote block');

							
					$('.popupvote_close').click(function () {
						
						
						$('._participants').css({'height':'auto'/*,'overflow':'none'*/});
						$('#vote99').css({'height':'auto'});
						
					$('#vote99').css({'display':'none'});
					$('#vote2').remove();
					//console.log('vote close');
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
	
	    
		
	 
	 Participants();
	 
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


