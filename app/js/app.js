// import '~/app/vendor/mmenu/dist/mmenu.js'
import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.menu-burger');
	const content = document.querySelector('.menu-mobile');
	burger.addEventListener('click', () => {
		content.classList.toggle('show');
		burger.classList.toggle('open');
		document.body.classList.toggle('lock');
	});

	Swiper.use([Navigation]);

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		// centeredSlides: true,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},

		navigation: {
			nextEl: '.ex-slider__slider-next',
			prevEl: '.ex-slider__slider-prev',
		},
	});

	document.querySelectorAll('a[href^="#"').forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);

			const topOffset = document.querySelector('.header').offsetHeight;
			// const topOffset = 0; // если не нужен отступ сверху
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth',
			});
		});
	});
});
