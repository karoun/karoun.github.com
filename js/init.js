$(function() {  
    if(location.host.indexOf('karounkasraie') > -1) {
		setTimeout("window.location\ =\ 'http://karoun.me'", 5000);
		$('body').append('<div id="redirect"><p>Sorry, this URL is outdated. You will be redirected to my new site momentarily.</p></div>');
		$('#redirect')
			.css({
				"cursor" : "pointer",
				"display" : "none",
				"position" : "fixed",
				"top": "0",
				"left": "0",
				"width" : "100%",
				"text-align" : "center", 
				"padding": "5px",
				"border" : "5px solid #008000", 
				"background-color" : "#359700",
				"color" : "#fff",
				"font-size": "1.1em"
			})
			.fadeIn()
			.click(function() { $(this).fadeOut(); });
	}
	
	$("#expandingContainer").accordion({
		header: "h2",
		autoHeight: false
	});
	$("#images1").jCarouselLite({
		btnNext: ".next",
		btnPrev: ".prev",
		visible: 1
	});
	$("#info1").jCarouselLite({
		btnNext: ".next",
		btnPrev: ".prev",
		visible: 1,
		vertical: true
	});
	$("#images2").jCarouselLite({
		btnNext: ".pnext",
		btnPrev: ".pprev",
		visible: 1
	});
	$("#info2").jCarouselLite({
		btnNext: ".pnext",
		btnPrev: ".pprev",
		visible: 1,
		vertical: true
	});
	$('.imageContainer a').fancybox();
	$('.imageContainer img').fadeTo("fast", 0.70);
	$('.imageContainer img').mouseover(function () {
		$(this).fadeTo("fast", 1);
	});
	$('.imageContainer img').mouseout(function () {
		$(this).fadeTo("fast", 0.70);
	});
	$('a[rel="external"]').attr('target', '_blank');
	jQuery.validator.messages.required = "";
	$('form.contact').validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
		},
		errorPlacement: function (error, element) {},
		highlight: function (element, errorClass) {
			$(element).css({
				'border': '2px solid red',
			})
		},
		submitHandler: function (form) {
			$(form).ajaxSubmit({
				success: function () {
					$('#contact').html("<div id='message'></div>");
					$('#message').html("<p>Thanks for contacting me!</p><p>I'll get back to you as soon as I can!</p>").hide().fadeIn('1500');
				}
			});
		}
	});
});