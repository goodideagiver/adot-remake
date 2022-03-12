const headerContainer = document.querySelector('.main-h main');
const images = [...document.querySelectorAll('.images img')];

const galleryContainer = document.createElement('div');
galleryContainer.classList = 'header-gallery';

const imageList = images.map((image, index) => {
	const imageWrapper = document.createElement('div');
	imageWrapper.classList = 'image-header-container';
	imageWrapper.append(image.cloneNode(true));
	galleryContainer.appendChild(imageWrapper);
	if (index !== 0) imageWrapper.classList.add('image-header-hide');
	return imageWrapper;
});

headerContainer.append(galleryContainer);

const nextSlideHeader = () => {
	const activeSlide = imageList.find(
		image => !image.classList.contains('image-header-hide')
	);
	const activeSlideIndex = imageList.indexOf(activeSlide);
	const nextSlideIndex =
		activeSlideIndex === imageList.length - 1 ? 0 : activeSlideIndex + 1;
	imageList[activeSlideIndex].classList.add('image-header-hide');
	imageList[nextSlideIndex].classList.remove('image-header-hide');
};

setInterval(() => {
	nextSlideHeader();
}, 10000);
