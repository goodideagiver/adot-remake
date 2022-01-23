const gallimg = document.querySelectorAll('.images img');
gallContainer = document.createElement('div');
gallContainer.classList.add('lightbox');
xButton = document.createElement('div');
gallContainer.appendChild(xButton);
imgwrapper = document.createElement('main');
gallimg.forEach((element) => {
	imgwrapper.appendChild(element.cloneNode(true));
});
gallContainer.appendChild(imgwrapper);
document.querySelector('body > main').appendChild(gallContainer);
gallimg.forEach((galimage) => {
	galimage.addEventListener('click', () => showGallery(galimage));
});
document.querySelector('.lightbox > div').classList.add('lightbox-controls');
document.querySelector('.lightbox > div').innerHTML =
	'<div id="gallX"><i class="fas fa-times"></i>';
gallContainer.innerHTML +=
	'<div class="lightbox-controls"><div id="goLeft"><i  class="fas fa-arrow-left"></i></div><div id="goRight"><i  class="fas fa-arrow-right"></div></i>';
document.getElementById('gallX').addEventListener('click', galClose);
gallContainer.classList.toggle('closed');

const arrowLeft = document.querySelector('#goLeft');
const arrowRight = document.querySelector('#goRight');
const slides = document.querySelectorAll('.lightbox img');
arrowRight.addEventListener('click', nextSlide);
arrowLeft.addEventListener('click', prevSlide);
gallContainer.addEventListener('click', () => {
	if (event.target === gallContainer) {
		galClose();
	}
});

function showGallery(image) {
	gallContainer.classList.toggle('closed');
	slides[getClickedImageIndex(image)].classList.add('show-img');
	toggleBodyScroll('off');
}

function toggleBodyScroll(option) {
	switch (option) {
		case 'on':
			document.querySelector('body').classList.remove('no-scroll');
			document.querySelector('html').classList.remove('no-scroll');
			break;
		case 'off':
			document.querySelector('body').classList.add('no-scroll');
			document.querySelector('html').classList.add('no-scroll');
			break;
		default:
			break;
	}
}

function galClose() {
	if (getActiveSlideIndex() < 0) {
		return;
	}
	gallimg[getActiveSlideIndex()].scrollIntoView({
		behavior: 'smooth',
		inline: 'nearest',
		block: 'center',
	});
	slides[getActiveSlideIndex()].classList.remove('show-img');
	gallContainer.classList.toggle('closed');
	toggleBodyScroll('on');
}

function nextSlide() {
	let active = getActiveSlideIndex();
	if (active < 0) {
		return;
	}
	slides[active].classList.toggle('show-img');
	if (active != slides.length - 1) {
		slides[active + 1].classList.toggle('show-img');
	} else {
		slides[0].classList.toggle('show-img');
	}
}

function prevSlide() {
	let active = getActiveSlideIndex();
	if (active < 0) {
		return;
	}
	slides[active].classList.toggle('show-img');
	if (slides[active - 1] == undefined) {
		slides[slides.length - 1].classList.toggle('show-img');
	} else {
		slides[active - 1].classList.toggle('show-img');
	}
}

function getActiveSlideIndex() {
	return getArrayItemIndex(slides, document.querySelector('.show-img'));
}

function getClickedImageIndex(clickedImage) {
	return getArrayItemIndex(gallimg, clickedImage);
}

function getArrayItemIndex(element, rule) {
	return Array.prototype.indexOf.call(element, rule);
}

document.onkeydown = checkKey;
function checkKey(e) {
	e = e || window.event;

	if (e.keyCode == '38') {
		// up arrow
	} else if (e.keyCode == '40') {
		// down arrow
	} else if (e.keyCode == '37') {
		// left arrow
		prevSlide();
	} else if (e.keyCode == '39') {
		// right arrow
		nextSlide();
	} else if (e.key === 'Escape') {
		galClose();
	}
}
