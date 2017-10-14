$(document).ready(function() {
	$('.panel').on('click', function(z) {
		$(this).toggleClass('open');
		$(z.currentTarget.nextElementSibling).toggleClass('open');
		
		if ($('.panel.music').hasClass('open')) {
			$('.panel.ballet').hide();
			$('.panel.opera').hide();
		} else if ($('.panel.ballet').hasClass('open')) {
			$('.panel.music').hide();
			$('.panel.opera').hide();
		} else if ($('.panel.opera').hasClass('open')) {
			$('.panel.ballet').hide();
			$('.panel.music').hide();
		} else {
			$('.panel').show();
		}

	});
});