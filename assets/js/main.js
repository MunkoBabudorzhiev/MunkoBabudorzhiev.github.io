// const { default: Swiper } = require("swiper");

$(document).ready(function () {
  $('.nav__toggler').click(function () {
    $('.nav__toggler .nav__icon, .nav__list, .header').toggleClass('open');
  });
  $('.nav__link').click(function () {
    $('.nav__toggler .nav__icon, .nav__list, .header').removeClass('open');
  });
	const videos = new Swiper('.video__block .swiper', {
		navigation: {
			nextEl: '.video__block .swiper-button-next',
			prevEl: '.video__block .swiper-button-prev',
		},
	});
});