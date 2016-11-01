'use strict';

$(function () {
	$('.verses-wrapper').masonry({
		itemSelector: '.verse',
		columnWidth: '.verse-size',
		gutter: '.verse-gutter'
	});
});