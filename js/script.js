$(document).ready(function() {
	$('.panel').on('click', function(z) {
		$(this).toggleClass('open');
		$(z.currentTarget.nextElementSibling).toggleClass('open');
		
		if ($('.panel.music').hasClass('open')) {
			$('.panel.ballet').fadeOut('fast');
			$('.panel.opera').fadeOut('fast');
		} else if ($('.panel.ballet').hasClass('open')) {
			$('.panel.music').fadeOut('fast');
			$('.panel.opera').fadeOut('fast');
		} else if ($('.panel.opera').hasClass('open')) {
			$('.panel.ballet').fadeOut('fast');
			$('.panel.music').fadeOut('fast');
		} else {
			$('.panel').fadeIn('slow');
		}

		if ($('.panel').hasClass('open')) {
			$('.panel-logo').fadeOut();
		} else {
			$('.panel-logo').fadeIn();
		}
	});
});