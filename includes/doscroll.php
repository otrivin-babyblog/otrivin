<?php $scrollPage = isset($scrollPage) ? $scrollPage : 'page'; ?>
<script>


	var DoScroll = {
		eventStorage: {
			'e25' : false,
			'e50' : false,
			'e75' : false,
			'e100' : false
		},

		event: function(proc) {
			
			var proc = (window.pageYOffset + DoScroll.getPageSize()[3]) / document.body.clientHeight * 100;
			//console.log(proc);
			
			if (proc > 25 && !DoScroll.eventStorage.e25) {
				DoScroll.eventStorage.e25 = true;
				<?php if (!isset($s25) || $s25 === true ) { ?>
				ga('send', 'event', '<?=$scrollPage?>', 'scroll', '25');
                <?php } ?>
			}
			if (proc > 50 && !DoScroll.eventStorage.e50) {
				DoScroll.eventStorage.e50 = true;
                <?php if (!isset($s50) || $s50 === true ) { ?>
                ga('send', 'event', '<?=$scrollPage?>', 'scroll', '50');
                <?php } ?>
			}
			if (proc > 75 && !DoScroll.eventStorage.e75) {
				DoScroll.eventStorage.e75 = true;
                <?php if (!isset($s75) || $s75 === true ) { ?>
                ga('send', 'event', '<?=$scrollPage?>', 'scroll', '75');
                <?php } ?>
			}
			if (proc == 100 && !DoScroll.eventStorage.e100) {
				DoScroll.eventStorage.e100 = true;
                <?php if (!isset($s100) || $s100 === true ) { ?>
                ga('send', 'event', '<?=$scrollPage?>', 'scroll', '100');
                <?php } ?>
			}

			<?php if (isset($_GET['scroll'])) { ?>
			$('#dbg').html(Math.round(proc, 0) + '% <br>'
				+' 25: ' + DoScroll.eventStorage.e25 +' <br>'
				+' 50: '+ DoScroll.eventStorage.e50 +' <br>'
				+' 75: '+ DoScroll.eventStorage.e75 +' <br>'
				+' 100: '+ DoScroll.eventStorage.e100 +' <br>'
			);
			<?php } ?>

		},

		getPageSize: function () {
			var xScroll, yScroll;
			if (window.innerHeight && window.scrollMaxY) {
				xScroll = document.body.scrollWidth;
				yScroll = window.innerHeight + window.scrollMaxY;
			} else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
				xScroll = document.body.scrollWidth;
				yScroll = document.body.scrollHeight;
			} else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) { // Explorer 6 strict mode
				xScroll = document.documentElement.scrollWidth;
				yScroll = document.documentElement.scrollHeight;
			} else { // Explorer Mac...would also work in Mozilla and Safari
				xScroll = document.body.offsetWidth;
				yScroll = document.body.offsetHeight;
			}
			var windowWidth, windowHeight;
			if (self.innerHeight) { // all except Explorer
				windowWidth = self.innerWidth;
				windowHeight = self.innerHeight;
			} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
				windowWidth = document.documentElement.clientWidth;
				windowHeight = document.documentElement.clientHeight;
			} else if (document.body) { // other Explorers
				windowWidth = document.body.clientWidth;
				windowHeight = document.body.clientHeight;
			}
			// for small pages with total height less then height of the viewport
			if (yScroll < windowHeight) {
				pageHeight = windowHeight;
			} else {
				pageHeight = yScroll;
			}
			// for small pages with total width less then width of the viewport
			if (xScroll < windowWidth) {
				pageWidth = windowWidth;
			} else {
				pageWidth = xScroll;
			}
			return [pageWidth, pageHeight, windowWidth, windowHeight];
		},

	};

	$(function () {
		window.onscroll = DoScroll.event;
		window.onresize = DoScroll.event;
		DoScroll.event();
	});

</script>
