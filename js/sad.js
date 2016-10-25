'use strict';

var curpage = '1';

$('.tales__about').each(function(i, el){
	
	 $(el).attr('data-h',$(el).height());
	  $(el).css({'height':'130px','overflow':'hidden'});
	  
	});
	



$('.tales-item').each(function(i, el){
	
	// $(el).attr('data-h',$(el).height());
	if ($(el).hasClass('p'+curpage)){
	  $(el).css({'display':'inline-block'});
	}else
	{
		$(el).css({'display':'none'});
	}
	  
	  
	});


$(document).ready(function () {
    
	
	$('.btntales23').click(function(){
		
		var act = $(this).data('act');
		var did = $(this).data('id');
		//alert();
		
		if (act == '0'){
		
		if (did !== undefined)
		{
			$('#'+did).height($('#'+did).data('h'));
			$(this).html('Свернуть');
			$(this).data('act','1');
		}
		}else
			if (act == '1')
			{
				$('#'+did).height(120);
				$(this).html('Развернуть');
			$(this).data('act','0');
			}
		
	});
	
	
	$('.p25').click(function(){
		
		$('#p'+curpage).removeClass('pagination__link_active');
		curpage = $(this).data('id');
		$('#p'+curpage).addClass('pagination__link_active');
		
		
		if (curpage !== undefined)
		{
			
			$('.tales-item').each(function(i, el){
	
	// $(el).attr('data-h',$(el).height());
	if ($(el).hasClass('p'+curpage)){
	  $(el).css({'display':'inline-block'});
	}else
	{
		$(el).css({'display':'none'});
	}
	  
	  
	});
			
			
		}
		else{}
		
	});
	
	
	
	
	
	$('.p24').click(function(){
		
		$('#p'+curpage).removeClass('pagination__link_active');
			curpage = curpage - 1;
			if (curpage <=0){
				curpage = 1;
			}
		$('#p'+curpage).addClass('pagination__link_active');
		
		
		
		if (curpage !== undefined)
		{
			
			$('.tales-item').each(function(i, el){
	
	// $(el).attr('data-h',$(el).height());
	if ($(el).hasClass('p'+curpage)){
	  $(el).css({'display':'inline-block'});
	}else
	{
		$(el).css({'display':'none'});
	}
	  
	  
	});
			
			
		}
		else{}
		
		
	});
	
	
	
	
	$('.p26').click(function(){
		
		$('#p'+curpage).removeClass('pagination__link_active');
			curpage = curpage + 1;
			if (curpage > 5){
				curpage = 5;
			}
		$('#p'+curpage).addClass('pagination__link_active');
		
		
		
		if (curpage !== undefined)
		{
			
			$('.tales-item').each(function(i, el){
	
	// $(el).attr('data-h',$(el).height());
	if ($(el).hasClass('p'+curpage)){
	  $(el).css({'display':'inline-block'});
	}else
	{
		$(el).css({'display':'none'});
	}
	  
	  
	});
			
			
		}
		else{}
		
		
	});
	
	
});

