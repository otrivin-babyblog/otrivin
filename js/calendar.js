'use strict';

function init() {
var objBrowse = window.navigator;
if (objBrowse.appName == "Opera") {
	
	$('.print-btn').on('click', function (e) {
    ga('send', 'event', 'planning', 'click', 'print');
    e.preventDefault;
	
  $('.otriv-calend-pr').css({'display':'flex'});
  // $('.header_bot_link_menu').css({'background':'none'});
  $('.calendar-images').css({'display':'block'});
	
	$('.calendar-mobile-table , .calendar-actions-mobile').hide();
   setTimeout('window.print()', 500);
	$('.otriv-calend-pr').css({'display':'none'});
	
  });
		
} else {

$('.print-btn').on('click', function (e) {
    ga('send', 'event', 'planning', 'click', 'print');
    e.preventDefault;
	
  $('.otriv-calend-pr').css({'display':'flex'});
  // $('.header_bot_link_menu').css({'background':'none'});
  $('.calendar-images').css({'display':'block'});
	
	$('.calendar-mobile-table , .calendar-actions-mobile').hide();
    window.print();
	
	$('.otriv-calend-pr').css({'display':'none'});
	
  });


}
}

window.onload = init;

$(function () {





  // callbacks
  var callbacks = {
    changeDate: function changeDate(date) {
      console.log('\u0414\u0430\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430 \u043D\u0430 ' + date);
    },
    add: function add(column, text) {
      console.log('"' + text + '" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0432 \u043A\u043E\u043B\u043E\u043D\u043A\u0443 ' + (column + 1));
    },
    remove: function remove(column, text) {
      console.log('"' + text + '" \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0432 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 ' + (column + 1));
    },
    addAction: function addAction(text) {
      console.log('\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 "' + text + '"');
    }
  };

  // datepicker
  $('.datepicker').datepicker({
    autoclose: true,
    format: 'DD dd MM yyyy',
    language: 'ru'
  }).on('changeDate', function (e) {
    callbacks.changeDate(e.date);
  });

  $('.datepicker').datepicker('update', new Date());

  // drag
  var drag = null;

  $('.calendar-actions').on('mousedown', function (e) {
    var target = $(e.target);
	//console.log(e);
	if (e.button==2)
		{
			// right
			
		}
		else if (e.button==0)
		{
		
			if (target.is('a') && !target.hasClass('add') && !target.hasClass('print')) {
			  e.preventDefault();
			  var width = target.width();
			  var height = target.height();
			  drag = target.clone();
			  drag.addClass('drag-action').css({ top: e.pageY - height / 2, left: e.pageX - width / 2 }).width(width).height(height);
			  $('body').append(drag);
			}
			//left
		}
	
	
	
  });

  $('.calendar-table').on('mousedown', function (e) {
    var target = $(e.target);
	//console.log(e);
	if (e.button==2)
		{
			// right
			
		}
		else if (e.button==0)
		{
		
			if (target.is('a')) {
			  e.preventDefault();
			  callbacks.remove(target.parent('td').index(), target.text());
			  var width = target.width();
			  var height = target.height();
			  
			  // фон для освободившегося поля таблицы
			  var idx = findActiveTd({ x: e.pageX, y: e.pageY });
			   $('.calendar-table .action').eq(idx).css({'background':'#ffffff','padding-top':'40px'});
			  
			  drag = target;
			  drag.addClass('drag-action').css({ top: e.pageY - height / 2, left: e.pageX - width / 2 }).width(width).height(height);
			  $('body').append(drag);
			}
			//left
		}
	
  });

  $(document).on('mousemove', function (e) {
    if (drag) {
      e.preventDefault();
      var width = drag.width();
      var height = drag.height();
      drag.css({ top: e.pageY - height / 2, left: e.pageX - width / 2 });
    }
  });

  $(document).on('mouseup', function (e) {
    if (drag) {
      e.preventDefault();
      var target = $(e.target);
      var idx = findActiveTd({ x: e.pageX, y: e.pageY });
      if (idx !== undefined) {
        $('.calendar-table .action').eq(idx).html(drag.clone().removeClass('drag-action').attr('style', '')).css({'background':'#ffe6df','padding-top':'40px'});
        callbacks.add(idx % 7, drag.text());
		//console.log(drag.text());
      }
      drag = null;
      $('body .drag-action').remove();
    }
  });

  var findActiveTd = function findActiveTd(coords) {
    var tdIdx = void 0;
    $('.calendar-table .action').each(function (idx, td) {
      var clientBounding = td.getBoundingClientRect();
      var bounding = {
        x: clientBounding.x !== undefined ? clientBounding.x : clientBounding.left,
        y: clientBounding.y !== undefined ? clientBounding.y : clientBounding.top,
        width: clientBounding.width,
        height: clientBounding.height
      };
      bounding.x += window.pageXOffset;
      bounding.y += window.pageYOffset;
      var inX = coords.x > bounding.x && coords.x < bounding.x + bounding.width;
      var inY = coords.y > bounding.y && coords.y < bounding.y + bounding.height;
      if (inX && inY) {
        tdIdx = idx;
      }
    });
    return tdIdx;
  };

  $('.calendar-actions .add').on('click', function (e) {
    $('.calendar-actions .add').hide();
    $('.calendar-actions .add-form').show();
  });

  $('.calendar-actions .add-form .cancel').on('click', function (e) {
    e.preventDefault();
    $('.calendar-actions .add').show();
    $('.calendar-actions .add-form').hide();
    $('.calendar-actions .add-form input').val('');
  });

  $('.calendar-actions .add-form form').on('submit', function (e) {
	  // form add new task
	  
    e.preventDefault();
    $('.calendar-actions .add').show();
    $('.calendar-actions .add-form').hide();
    var title = $('.calendar-actions .add-form input').val();
	// xss
			title = title.replace(/\&/gi, "&amp;");
			title = title.replace(/\</gi, "&lt;");
			title = title.replace(/\>/gi, "&gt;");
			
    $('.calendar-actions .add-form input').val('');
	
	var valid = title.replace(/\s+/g,'');
	if (valid!=''){
		$('.calendar-actions .add').parent('li').before('<li><a>' + title + '</a></li>');
		callbacks.addAction(title);
		//console.log('1');
	}else
	{
		//console.log('0');
	}
	
	
	
  });

  /* mobile */

  $('.form-actions-mobile').on('submit', function (e) {
    e.preventDefault();
    var values = [];
    $('input[name="tasks"]').each(function (idx, input) {
      if ($(input).prop('checked')) {
        values.push($(input).val());
      }
    });
    var times = [];
    $('input[name="times"]').each(function (idx, input) {
      if ($(input).prop('checked')) {
        times.push($(input).val());
      }
    });
    times.forEach(function (time) {
      values.forEach(function (value) {
		  
		  var v_link='';
		  var v_class_ga = '';
		  
		  if (value=='Гигиена носика'){
			  v_link = 'nose_hygiene.php';
			  v_class_ga = 'otrivin-nasmork-anons';
		  }else
			  if(value=='Игры'){
			  v_link = 'igry_s_rebenkom.php';
			   v_class_ga = 'otrivin-nasmork-play';
		  }else
			  if(value=='Музыка'){
			  v_link = 'music.php';
			  v_class_ga = 'otrivin-nasmork-music';
		  }else
			  if(value=='Потешки'){
			  v_link = 'verses.php';
			  v_class_ga = 'otrivin-nasmork-poem';
		  }else
			  if(value=='Уроки для мам'){
			  v_link = 'uroki_dlya_mam.php';
			  v_class_ga = 'otrivin-nasmork-mom-lessons';
		  }else
			  if(value=='Домашние дела'){
			  v_link = 'domestic_chores.php';
			  v_class_ga = 'otrivin-nasmork-house-cleaning';
		  }else
			  if(value=='Сказки'){
			  v_link = 'tales.php';
			  v_class_ga = 'otrivin-nasmork-fairy-tale';
		  }
		  
        $('.calendar-mobile-table .one-time:eq(' + (time - 1) + ') ul').append('<li><a class="'+v_class_ga+'" target="_blank" href="'+siteurl+v_link+'" >' + value + '</a></li>');
        callbacks.add(time - 1, value);
      });
    });
  });
/*
  $('.calendar-mobile-table .one-time').on('click', function (e) {
    var target = $(e.target);
    if (target.is('a')) {
      e.preventDefault();
      callbacks.remove(target.parents('.one-time').index(), target.text());
      target.parent('li').remove();
    }
  });*/
  
  
  
});


