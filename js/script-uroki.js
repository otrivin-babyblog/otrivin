
$(document).ready(function () {
	
	$('#vid1 iframe').iframeTracker({
		blurCallback: function(){
			console.log('iframe 1 click');
			ga('send', 'event', 'mom_lessons', 'click', 'play_video_1');
		}
	});
	
	$('#vid2 iframe').iframeTracker({
		blurCallback: function(){
			console.log('iframe 2 click');
			ga('send', 'event', 'mom_lessons', 'click', 'play_video_2');
		}
	});
	
	
	$('#vid3 iframe').iframeTracker({
		blurCallback: function(){
			console.log('iframe 3 click');
			ga('send', 'event', 'mom_lessons', 'click', 'play_video_3');
		}
	});
	
	
});


