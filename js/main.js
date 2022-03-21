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
		responsive: [
			{
				breakpoint: 911,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 681,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 455,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.burger').on('click', function () {
		$('.menu__list').slideToggle();
	});

	$('.menu__drop-down.drop-down').on('click', function () {
		$(this).children('.drop-down__list').slideToggle();
		$(this).children('.menu__drop-down.drop-down > a').toggleClass('active');
	});
});