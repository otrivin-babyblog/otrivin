'use strict'

var url = 'http://otrivindata.pdigit.top';
//var obj;
var userid = '1';
var count = 0;


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


/*--------------------------------------*/
$(function(){
	
	
	/*try {
            BB.init("UR9MWcMuOXSpMvqVH4EeyQJFS7cpTp5ByOh97Emg");
        }
        catch(err) {
        //....
        }
	*/
	/*BB.callMethod(
            "getMyInfo",
            {},
            function(data){
                //Ваш код обработки результата
				userid = data.result.user_id;
            },
            function(err){
                //Ваш код обработки ошибки
            }
        );*/
	
	$.ajax({
			type: "GET",
			url: url+"/api/post/get/"+userid,
			success: function(msg) {
				alert(msg);
			},
			error: function(errmsg){
				console.log(errmsg);
			} 
		});
	
	
	
});


function remSave(param1)
{
	$('#save'+param1).remove();
}	
	

$(document).ready(function () {
	
	
	
	
	
	
	if (document.getElementById("phone25")){
	document.getElementById("phone25").onkeypress= function(event){

	 event= event || window.event;
	 if (event.charCode && (event.charCode < 48 || event.charCode > 57))// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...

	 return false;
	};
	}
	
	
    $('#btnSave').click(function () {
		
		var t = $('#title25').val(),
			phone = $('#phone25').val(),
			desc = $('#desc25').val();
			
			
			if (phone!='' && t!='')
			{
      count = count+1;
	  $('#notes-list').prepend(
	  
				'<li id="save'+count+'">'+
              '<div class="top"><i onclick="javascript:remSave(\''+count+'\');"data-id="'+count+'" class="fa fa-times remSave"></i></div>'+
              '<div class="content">'+
                '<p class="title">'+t+'</p>'+
               ' <p class="phone">'+phone+'</p>'+
                '<p class="description">'+desc+'</p>'+
              '</div>'+
           ' </li>' );
		   
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
