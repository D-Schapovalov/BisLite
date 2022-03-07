$(function () {
	$('.slider__inner').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
	});
	$('.works__slider-inner').slick({
		slidesToShow: 4,
		slidesToSkroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: '<button class="slick-prev slick-arrow"><img src="icons/arrow_left.svg" alt="arrow_left"></button>',
		nextArrow: '<button class="slick-next slick-arrow"><img src="icons/arrow_right.svg" alt="arrow_left"></button>',

	});

});