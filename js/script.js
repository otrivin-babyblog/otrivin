'use strict';
var files;
 var fileName = '';
var user_id = '';

$.ajax({
			type: "GET",
			url: "https://www.babyblog.ru/user/ajax_get_info",
			success: function(msg) {
				
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
	
	
	
		
	
	
	$('iframe').load(function(){
		if (user_id !=''){
			$('.js_contest').show();
			$('iframe').contents().find('input#name').val(user_id);
		}else
		{
			//alert('Необходимо авторизоваться!');
			$('.js_contest').hide();
		}
      
     });
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


