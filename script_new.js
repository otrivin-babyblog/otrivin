'use strict';
var user_id = '';
var ajaxgetinfo = '';
$('.js_contest').hide();

$(document).ready(function() {

    $('.subnews120').css({'display': 'none'});
    //console.log('120 none');


    $('#sn120').click(function() {

        $('.subnews120').css({'display': 'block'});

    });


    $('#btnsubmit120').click(function() {

        console.log('120s');

    });


    // Авторизация
    var authButton = $('#auth-button-container');

    var loginButton = $(
        '<a href="#">' +
            '<img src="http://promo.babyblog.ru/otrivin_baby/img/lock-main.png" alt="">' +
            '<span>Войти</span>' +
        '</a>')
            .on('click', function() {
                // Виджет авторизации.
                BBAPI.signup({
                    success_cb: function(user_data) {
                        // Данные о пользователе - user_data
						
                        authorizedButton = authorizedButton
                            .replace('USER_URL', 'https://www.babyblog.ru/user/lenta/' + user_data.login)
                            .replace('AVATAR_URL', user_data.avatar)
                            .replace('USER_NAME', user_data.fio);

                        authButton.html(authorizedButton);

						
						$('.vote').css({'display':'block'});
		$('.js_contest').show();
		
                        BBAPI.signup().hide();
                    }
                }).showAuthForm();

                return false;
            });

    var authorizedButton = '' +
        '<a href="USER_URL" target="_blank">' +
            '<img src="AVATAR_URL" alt="" style="height: 30px; width: 30px; border-radius: 15px;">' +
            '<span>USER_NAME</span>' +
        '</a>';


    $.ajax({
        url: 'https://www.babyblog.ru/user/ajax_get_info',

        xhrFields: {
            withCredentials: true
        }
    }).done(function(user_data) {
        // Данные о пользователе - user_data
		
		$('.vote').css({'display':'block'});
		$('.js_contest').show();
		
		user_id = user_data.user_id;
		ajaxgetinfo = user_data;
		
        authorizedButton = authorizedButton
            .replace('USER_URL', 'https://www.babyblog.ru/user/lenta/' + user_data.login)
            .replace('AVATAR_URL', user_data.avatar)
            .replace('USER_NAME', user_data.fio);

        authButton.html(authorizedButton);
    }).fail(function() {
        authButton.html(loginButton);
		
		//$('.vote').css({'display':'none'});
		$('.js_contest').hide();
		
    });

});

