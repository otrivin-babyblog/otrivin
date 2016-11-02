'use strict'

var url = 'http://otrivindata.pdigit.top';
//var obj;
var user_id = '';
var count = 0;



$('.print-btn').on('click', function (e) {
    ga('send', 'event', 'planning', 'click', 'print');
	
	
	$('.otriv-medic-save').css({'display':'flex'});
	
	
    e.preventDefault;
	
	var c = 0 , co = 0;
	var block = 0;
	$('#notes-list .li').each(function(i, el){
		//console.log('i   :'+i);
		c = c +1;
		co = co +1;
		
		
					if (c % 8 == 0  )
					{
						//console.log('add block :'+block);
						block = block +1;
						$(el).after('<div id="b'+block+'" class="d12" style="width:100%; height: 250px;"></div>');
						
					}						
						
						if (c>8){
							c = c -8;
						}
						//console.log(c);
						
	});
	
	if (co % 8 == 0){
	$('#b'+block).remove();
	}
	
	$('.li').css({'margin':'5px'});
	window.print();
	$('.otriv-medic-save').css({'display':'none'});
	$('.d12').remove();
	$('.li').css({'margin':'0 0 25px'});
	//$('.li').css({'margin-right':'10px'});
});



$(function () {
	 $('.drugs-wrapper ul li a').on('click', function (e) {
    e.preventDefault();
    var li = $(e.currentTarget).parent('li');
    var description = li.find('.description');
    var open = li.hasClass('open');
    if (open) {
      description.slideUp(300);
    } else {
      description.slideDown(300);
    }
    li.toggleClass('open');
  });
	
});





function remSave(param1)
{
	var did = $('#save'+param1).data('id');
	
	
	// не можем удалить, если не авторизованы
	if (user_id != ''){
	$.ajax({
			type: "GET",
			url: url+"/api/post/"+did+"/delete",
			success: function(msg) {
				console.log(msg); 
				
			},
			error: function(errmsg){
				console.log(errmsg);
			} 
		});
	}
	
	
	
	
	$('#save'+param1).remove();
	if ($("[id^='save']").length ==0)
	{
		$('.print-btn').hide();
	}
}	
	

$(document).ready(function () {
	
	// генерируем тестовые блоки 
	/*for(var i=0; i<12; i++){
		
		$('#notes-list').prepend(
							  
										'<li class="li">'+
									  '<div class="top"><i class="fa fa-times remSave"></i></div>'+
									  '<div class="content">'+
										'<p class="title">34234234</p>'+
									   ' <p class="phone">34242424</p>'+
										'<p class="description">23424234</p>'+
									  '</div>'+
								   ' </li>' );
	}*/
	
	$('.print-btn').hide();
	$.ajax({
			type: "GET",
			url: "https://www.babyblog.ru/user/ajax_get_info",
			xhrFields: {
            withCredentials: true
			},
			success: function(msg) {
				
				var uid = msg.user_id;
				if (uid)
				{
					user_id = uid;
					
					
						$.ajax({
						type: "GET",
						url: url+"/api/post/get/"+user_id,
						success: function(msg) {
							//console.log(msg); 
							/**/
							msg.forEach(function(item, i, arr) {
							 // console.log( i + ": " + item.name + " (массив:" + arr + ")" );
							 count = count+1;
							$('.print-btn').show();
							  $('#notes-list').prepend(
							  
										'<li class="li" data-id="'+item.id+'" id="save'+count+'">'+
									  '<div class="top"><i onclick="javascript:remSave(\''+count+'\');"data-id="'+count+'" class="fa fa-times remSave"></i></div>'+
									  '<div class="content">'+
										'<p class="title">'+item.name+'</p>'+
									   ' <p class="phone">'+item.phone+'</p>'+
										'<p class="description">'+item.description+'</p>'+
									  '</div>'+
								   ' </li>' );
							});
							/*
							*/
						},
						error: function(errmsg){
							console.log(errmsg);
						} 
						});
					
					
					
				}
				
				
			},
			error: function(errmsg){
				console.log(errmsg);
			} 
		});
		
	
	
	
	
	if (document.getElementById("phone25")){
	document.getElementById("phone25").onkeypress= function(event){

	 event= event || window.event;
	 if (event.charCode && (event.charCode < 48 || event.charCode > 57))// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...

	 return false;
	};
	}
	
	
    $('#btnSave').click(function () {
		ga('send', 'event', 'important', 'click', 'save_phone');
		var t = $('#title25').val(),
			phone = $('#phone25').val(),
			desc = $('#desc25').val();
			
			
			if (phone!='' && t!='')
			{
     
		   
		   
		   
		   /* сохранение в  базу*/
		   
		   // не можем сохранить, если не авторизованы
		   console.log('uid: '+user_id);
		   count = count+1;
		   
			if (user_id != ''){
				
				var mas = {name:t, phone:phone, description: desc, user_id:user_id};
				
				   $.ajax({
					type: "POST",
					url: url+"/api/post/save",
					data: mas,
					success: function(msg) {
						$('.print-btn').show();
						console.log(msg); 
							//count = count+1;
							$('#notes-list').prepend(
					  
								'<li class="li" data-id="'+msg+'" id="save'+count+'">'+
							  '<div class="top"><i onclick="javascript:remSave(\''+count+'\');"data-id="'+count+'" class="fa fa-times remSave"></i></div>'+
							  '<div class="content">'+
								'<p class="title">'+t+'</p>'+
							   ' <p class="phone">'+phone+'</p>'+
								'<p class="description">'+desc+'</p>'+
							  '</div>'+
						   ' </li>' );
						
						
					},
					error: function(errmsg){
						console.log('Error');
						console.log(errmsg);
					} 
					});
			}else
				
			
			{
				$('.print-btn').show();
				$('#notes-list').prepend(
					  
								'<li class="li" data-id="" id="save'+count+'">'+
							  '<div class="top"><i onclick="javascript:remSave(\''+count+'\');"data-id="'+count+'" class="fa fa-times remSave"></i></div>'+
							  '<div class="content">'+
								'<p class="title">'+t+'</p>'+
							   ' <p class="phone">'+phone+'</p>'+
								'<p class="description">'+desc+'</p>'+
							  '</div>'+
						   ' </li>' );
			}
			
			
							
							
		   
		   
		   $('#title25').val('');  
		  $('#phone25').val('');  
		   $('#desc25').val('');  
		   
		   
		   
			}else
			{
				if (t==''){
				$('#title25').addClass('error');
				}
				
				if (phone==''){
				$('#phone25').addClass('error');
				}
				
				setTimeout(function(){
				$('#title25').removeClass('error');
				$('#phone25').removeClass('error');

				},500);
			}
				
		   
		 
	  
    });
	
    
});
