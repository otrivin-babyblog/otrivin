'use strict';
var files;
var fileName = '';

function div(val, by){
    return (val - val % by) / by;
}

		
$(document).bind('popup_close', function(){
  	$(".popup _thanks").show();
	$(".popup _upload").hide();
});



function vote2(param1,param2){
	$.ajax({
			type: "GET",
			url: "http://otrivindata.pdigit.top/api/vote2/"+param1+"/"+param2,
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

   
	 
	 ParticipantsC2();
	 
});



