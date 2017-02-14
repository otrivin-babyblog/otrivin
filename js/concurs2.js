'use strict';

$(document).ready(function () {

  
  /* winners*/
 
   $.ajax({
			type: "GET",
			url: "http://otrivindata.pdigit.top/api/images/getwinners2",
			success: function(msg) {
				//console.log(msg[0]); 
				var temp = msg[0];
				msg[0] = msg[2];
				msg[2] = msg[1];
				msg[1] = temp;
				
				msg.forEach(function(item, i, arr) {
					//console.log(item);
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
				 
					$('#winners1').append(
					
					 '<div class="winner-compet-item winner-'+(i+1)+'">'+
    				'<p class="photo-win" style="min-height: 310px;overflow: hidden; margin-bottom: 15px;"><img src="http://otrivindata.pdigit.top/uploads/2/'+item.url+'.jpg" alt=""></p>'+
    				'<div class="win-name">'+
    					'<p class="photo-name">'+
    						'<img src="'+ava+'" alt="">'+
    					'</p>'+
    					'<p class="win-name-item"><span class="win-name-item-span">'+str+'</span><img src="img/place'+(i+1)+'-concers.png"  alt="">'+'</p>'+
    					'<p class="place">'+
    						//'<img src="img/place'+(i+1)+'-concers.png" alt="">'+
    					'</p>'+
    				'</div>'+
    				'<p class="win-text" style="min-height: 100px;" >'+item.description+'</p>'+
    				'<div class="golosa">'+
    					'<div>'+
    						'<p style="text-align: center;">'+item.votes+'</p>'+
    						'<p>голос(ов)</p>'+
    					'</div>'+
    				'</div>'+
				'</div>'+
  				'<div class="winner-prew prew-'+(i+1)+'">'+
  					'<div class="winner-prew-item">'+
							'<a href="javascript:void(0);" class="close-pop-concurs"><img src="img/close_menu_320.png" alt=""></a>'+
							'<h2 class="page-title">Фотографии победителей</h2>'+
							'<p class="winner-prew-img"><img src="http://otrivindata.pdigit.top/uploads/2/'+item.url+'.jpg" alt=""></p>'+
							'<div class="winner-prew-link">'+
								'<p class="winner-prew-photo"><img src="'+ava+'" alt=""></p>'+
								'<p class="name">'+str+'</p>'+
								'<p class="info">'+item.description+'</p>'+
							'</div>'+
  					'</div>'+
					'</div>'
					 );
				 
				 

					
				});
				
				
									   $('.condit').click(function () {
										   
										   var ot = document.body.scrollTop;
										   //console.log(ot);
										   /*$('.pop-uslovia').css({'top': (ot+25)+'px'});*/
										  $('.pop__back').show();
												$('.pop-uslovia').show(700);
								  });
								  $('.priz').click(function () {
									  
									   var ot = document.body.scrollTop;
									   $('.pop__back').show();
										/*$('.pop-prizu').css({'top': (ot+25)+'px'});*/
									$('.pop-prizu').show(700);
								  });
								  $('.winner-1').click(function () {
									$('.prew-1').show(700);
								  });
								  $('.winner-2').click(function () {
									$('.prew-2').show(700);
								  });
								  $('.winner-3').click(function () {
									$('.prew-3').show(700);
								  });
								  $('.close-pop-concurs, .pop-uslovia-item, .pop-prizu-item').click(function () {
									$('.pop-prizu, .pop-uslovia, .winner-prew, .pop__back').hide();
								  });
												
				
			},
			error: function(errmsg){
				console.log(errmsg);
			} 
		});

});