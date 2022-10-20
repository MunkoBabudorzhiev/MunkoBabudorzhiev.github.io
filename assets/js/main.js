
const videos = new Swiper('.video__block .swiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
		992: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	},
	navigation: {
		nextEl: '.video__block .swiper-button-next',
		prevEl: '.video__block .swiper-button-prev',
	},
});
$(document).ready(function () {
  $('.nav__toggler').click(function () {
    $('.nav__toggler .nav__icon, .nav__list, .header').toggleClass('open');
  });
  $('.nav__link').click(function () {
    $('.nav__toggler .nav__icon, .nav__list, .header').removeClass('open');
  });

})

let map_titles, map_parts, map_content, map_info, map_content_items;
map_titles = document.querySelectorAll('.map-title');
// map_parts = document.querySelectorAll('.map-part');
// map_content = document.querySelectorAll('.map-content__item');
map_info = document.querySelector('.map-info');
map_content = document.querySelector('.map-content');
map_content_items = document.querySelectorAll('.map-content__item');
map_parts = document.querySelectorAll('.map-part');

function showPart(evnt) {
	let title_num = evnt.currentTarget.getAttribute('data-distr');
	let part_id = `map-${title_num}`
	document.getElementById(part_id).classList.add('highlight');
}

function hidePart(evnt) {
	let title_num = evnt.currentTarget.getAttribute('data-distr');
	let part_id = `map-${title_num}`;
	document.getElementById(part_id).classList.remove('highlight');
}	



function showContent(evnt) {
	// let part_num, map_info, map_content, map_content_items, map_parts;
	let part_num;
	part_num = evnt.currentTarget.getAttribute('data-part');
	

	
	if (!map_info.classList.contains('hide') && !map_content.classList.contains('show')) {
		map_info.classList.add('hide');
		map_content.classList.add('show');
	}
	
	for(let n = 0; n < map_parts.length; n++) {
		if (map_parts[n].classList.contains('highlight')) {
			map_parts[n].classList.remove('highlight');
		}
	}

	for(let i = 0; i < map_content_items.length; i++) {
		if (map_content_items[i].classList.contains('active') ) {
			map_content_items[i].classList.remove('active'); 
		}
	}

	document.getElementById(`map-${part_num}`).classList.add('highlight');
	document.getElementById(`content-${part_num}`).classList.add('active');
}

function hideContent(evnt) {
	if (map_info.classList.contains('hide') && map_content.classList.contains('show')) {
		map_info.classList.remove('hide');
		map_content.classList.remove('show');
	}
	for(let n = 0; n < map_parts.length; n++) {
		if (map_parts[n].classList.contains('highlight')) {
			map_parts[n].classList.remove('highlight');
		}
	}
}

for(let i = 0; i < map_titles.length; i++) {
	map_titles[i].addEventListener('mouseover', showPart);
	map_titles[i].addEventListener('mouseout', hidePart);
}

for(let n = 0; n < map_parts.length; n++) {
	map_parts[n].addEventListener('click', showContent);
}

document.querySelector('.btn__map').addEventListener('click', hideContent)


