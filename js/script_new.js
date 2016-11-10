'use strict';
var user_id = '';
var ajaxgetinfo = '';
$('.js_contest').hide();
$('.js_contest2').hide();

function callIframe(url) {
	
	//console.log(url);
	$('.popup._upload iframe').remove();
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



function ParticipantsRemove()
{
	 $('#part443 > .participant').remove();
	 $('#pag_part142 > .pagination-page').remove();
	 
	  $('#part443-contest2 > .participant').remove();
	 
	 console.log('removed');
}



function ParticipantsC2(){
	 /*------------------------------------------*/
	 /*--------     участики конкурса    -------*/
	 $.ajax({
			type: "GET",
			url: "http://otrivindata.pdigit.top/api/images/getall2",
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
				 
				 if (user_id != ''){
				  $('#part443-contest2').append(
				  
				  '<div class="participant">'+
				 '<div style="height: 300px; min-height: 300px; overflow: hidden; margin-bottom: 20px;"> <img data-desc="'+str+'" src="http://otrivindata.pdigit.top/uploads/2/'+item.url+'.jpg" alt="" class="participant__img prewLB" ></div>'+
				  '<div class="participant-author">'+
					'<img src="'+ava+'" alt="" class="author__img">'+
					'<h3 class="author__name">'+str+'</h3>'+
					/*'<p class="author__location">Москва</p>'+*/
				 '</div>'+
				  '<p class="participant__comment">'+item.description+'</p>'+
					
					'<a onclick="javascript:vote2(\''+user_id+'\',\''+item.url+'\');" class="btn vote" style="width:100%;">Голосовать</a>'+
				
				'</div>'
					   );
					   
				 }else
				 {
					  $('#part443-contest2').append(
				  
				  '<div class="participant">'+
				 '<div style="height: 300px; min-height: 300px; overflow: hidden; margin-bottom: 20px;"> <img data-desc="'+str+'" src="http://otrivindata.pdigit.top/uploads/2/'+item.url+'.jpg" alt="" class="participant__img prewLB" ></div>'+
				  '<div class="participant-author">'+
					'<img src="'+ava+'" alt="" class="author__img">'+
					'<h3 class="author__name">'+str+'</h3>'+
					/*'<p class="author__location">Москва</p>'+*/
				 '</div>'+
				  '<p class="participant__comment">'+item.description+'</p>'+
				  
					/*'<a href="javascript:void(0);" class="btn" style="width:100%; background: #fff;">Голосовать</a>'+*/
					'<a onclick="javascript:vote2(\'1\',\''+item.url+'\');" class="btn vote" style="width:100%;">Голосовать</a>'+
				'</div>'
					   );
					   
				 }
					   
				});
				
				
				
				
				// TEST NEW EL
				// сгенерировать  тестовые элементы
			/*	var id2 = '1';
				var id12 = 'gPGRuZUY';
			for(var j=0; j<10; j++)
				{
						$('#part443-contest2').append(
				  
				  '<div class="participant">'+
				 '<div style="height: 300px; min-height: 300px; overflow: hidden; margin-bottom: 20px;"> <img data-desc="NAME'+j+'" src="http://otrivin.pdigit.top/img/user.png" alt="" class="participant__img prewLB" ></div>'+
				  '<div class="participant-author">'+
					'<img src="http://otrivin.pdigit.top/img/user.png" alt="" class="author__img">'+
					'<h3 class="author__name">NAME'+j+'</h3>'+
					//'<p class="author__location">Москва</p>'+
				 '</div>'+
				  '<p class="participant__comment">DESC'+j+'</p>'+
				
					'<a onclick="javascript:vote2(\''+id2+'\',\''+id12+'\');" class="btn vote" style="width:100%;">Голосовать</a>'+
				
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
}

function Participants(){
	
	
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
					'<a onclick="javascript:vote(\'1\',\''+item.url+'\');" class="btn vote" style="width:100%;">Голосовать</a>'+
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
	
	
	
}


$(document).ready(function() {

	window.addEventListener("message", function(event) {
		if (event.data && event.data.type == 'socialAuth') {
			var signup = BBAPI.signup();
			signup.setUser(event.data.user).socialAuthSuccess();
		}
	});



	



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
				//alert(1);
				//console.log('21132');
                // Виджет авторизации.
                BBAPI.signup({
                    success_cb: function(user_data) {
                        // Данные о пользователе - user_data
						
						user_id = user_data.user_id;
						ajaxgetinfo = user_data;
						
						//console.log('user_id: '+user_id+' ainfo: '+ajaxgetinfo);
						/*if (user_id !='' && ajaxgetinfo!=''){
							callIframe('http://otrivindata.pdigit.top/api/images/form/'+user_id+'/'+ajaxgetinfo.fio+'/'+ajaxgetinfo.avatar);
					
						}else
						{
							callIframe('http://otrivindata.pdigit.top/api/images/form/-1/-1/null');
					
						}*/
						
						
						var loc = window.location.pathname;
						console.log(loc);
						
						if (loc=='/contests_s.php')
						{
							ParticipantsRemove();
							Participants();
						
						}else if (loc == '/contests.php')
						{
							ParticipantsRemove();
							ParticipantsC2();
						
						}else if (loc == '/otrivin_baby/contests_s.php')
						{
							ParticipantsRemove();
							Participants();
						
						}else if (loc == '/otrivin_baby/contests.php')
						{
							ParticipantsRemove();
							ParticipantsC2();
						
						}
						
						
						/*
						*/
		
						
						
                        authorizedButton = authorizedButton
                            .replace('USER_URL', 'https://www.babyblog.ru/user/lenta/' + user_data.login)
                            .replace('AVATAR_URL', user_data.avatar)
                            .replace('USER_NAME', user_data.fio);

                        authButton.html(authorizedButton);

						
						
						
						
						
						$('.vote').css({'display':'block'});
						$('.js_contest').show();
						$('.js_contest2').show();
		
                        BBAPI.signup().hide();
                    }
                }).showAuthForm();

					
				console.log('21132');
                return false;
            });

    var authorizedButton = '' +
        '<a href="USER_URL" target="_blank">' +
            '<img src="AVATAR_URL" alt="" style="height: 30px; width: 30px; border-radius: 15px;">' +
            '<span>USER_NAME</span>' +
        '</a>';

	$('.js__socialAuthButton >.r-signin__item >.r-signin__item-facebook').data('url','https://auth.babyblog.ru/user/register2/socialauth/facebook');
	
	
	
    $.ajax({
        url: 'https://www.babyblog.ru/user/ajax_get_info',

        xhrFields: {
            withCredentials: true
        }
    }).done(function(user_data) {
        // Данные о пользователе - user_data
		console.log('auth +');
		$('.vote').css({'display':'block'});
		$('.js_contest').show();
		$('.js_contest2').show();
		
		user_id = user_data.user_id;
		ajaxgetinfo = user_data;
		/*
		console.log('user_id: '+user_id+' ainfo: '+ajaxgetinfo);
	    if (user_id !='' && ajaxgetinfo!=''){
			callIframe('http://otrivindata.pdigit.top/api/images/form/'+user_id+'/'+ajaxgetinfo.fio+'/'+ajaxgetinfo.avatar);
	
		}else
		{
			callIframe('http://otrivindata.pdigit.top/api/images/form/-1/-1/null');
	
		}*/
		
		
		
		
		
        authorizedButton = authorizedButton
            .replace('USER_URL', 'https://www.babyblog.ru/user/lenta/' + user_data.login)
            .replace('AVATAR_URL', user_data.avatar)
            .replace('USER_NAME', user_data.fio);

        authButton.html(authorizedButton);
    }).fail(function() {
        authButton.html(loginButton);
		console.log('auth -');
		//$('.vote').css({'display':'none'});
		$('.js_contest').hide();
		
    });

});

