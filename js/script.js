const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const item = document.querySelectorAll('.burger-item');

burger.addEventListener('click', function () {
	menu.classList.toggle('menu_active');
});


burger.addEventListener('click', function () {
	item.forEach(element => {
		element.classList.toggle('active');
	});
});