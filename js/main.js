$(function () {
	$('.slider__inner').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
	});

	$('.works__inner').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-prev slick-arrow"><img src="icons/arrow_left.svg" alt=""></button>',
		nextArrow: '<button class="slick-next slick-arrow"><img src="icons/arrow_right.svg" alt=""></button>',
	});

});