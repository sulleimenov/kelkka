// import '~/app/vendor/mmenu/dist/mmenu.js'
import Swiper, { Navigation } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.menu-burger');
	const content = document.querySelector('.menu-mobile');
	burger.addEventListener('click', () => {
		content.classList.toggle('show');
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
});
