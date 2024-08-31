'use strict';

//animation function

$(window).on('load', function() { 
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
		Isotope Filter
	--------------------*/
	var $container = $('.isotope_items');
	$container.isotope();

	$('.portfolio-filter li').on("click", function(){
		$(".portfolio-filter li").removeClass("active");
		$(this).addClass("active");				 
		var selector = $(this).attr('data-filter');
		$(".isotope_items").isotope({
				filter: selector,
				animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
});



(function($){

	/*------------------
  		HEADER
  	--------------------*/
	  var navMenu = $('.menu-list');
	  navMenu.onePageNav();
	  
	  $(window).on('scroll resize', function(e) {
		  if ($(this).scrollTop() > 70) {
			  $('.header-section').addClass('sticky');
		  } else {
			  $('.header-section').removeClass('sticky');
		  }
	  
		  // Ensure menu is visible when resizing to a larger screen
		  if ($(window).width() >= 768) {
			  navMenu.show();  // Ensure menu is visible
		  }
	  
		  e.preventDefault();
	  });
	  
	  $('.responsive').on('click', function(event) {
		  navMenu.slideToggle(400);
		  $('.header-section').toggleClass('bgc');
		  event.preventDefault();
	  });
	  
	  $('.menu-list li a').on('click', function(event) {
		  if ($(window).width() < 768) {
			  navMenu.slideUp(400);
			  $('.header-section').removeClass('bgc');
		  }
	  });



	
	/*------------------
		MAGNIDIC POPUP
	--------------------*/
	$('.work-item').magnificPopup({
		type: 'image',
		gallery: { enabled: true },
		removalDelay: 400,
		zoom:{enabled: true, duration: 300}
	});


	/*------------------
		WOW JS
	--------------------*/
	new WOW().init();


})(jQuery);