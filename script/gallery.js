const gallimg = document.querySelectorAll(".images img");
gallContainer = document.createElement("div");
gallContainer.classList.add("lightbox");
xButton = document.createElement("div");
gallContainer.appendChild(xButton);
imgwrapper = document.createElement("main");
gallimg.forEach((element) => {
	imgwrapper.appendChild(element.cloneNode(true));
});
gallContainer.appendChild(imgwrapper);
document.querySelector("body > main").appendChild(gallContainer);
gallimg.forEach((galimage) => {
	galimage.addEventListener("click", () => showGallery(galimage));
});
document.querySelector(".lightbox > div").innerHTML='<i id="gallX" class="fas fa-times"></i>';
gallContainer.innerHTML += '<div class="lightbox-controls"><i id="goLeft" class="fas fa-arrow-left"></i><i id="goRight" class="fas fa-arrow-right"></i>';
document.getElementById("gallX").addEventListener('click',galClose);
gallContainer.classList.toggle('closed');

const arrowLeft = document.querySelector("#goLeft");
const arrowRight = document.querySelector("#goRight");
let slides = document.querySelectorAll(".lightbox img")
arrowRight.addEventListener("click",nextSlide);
arrowLeft.addEventListener("click",prevSlide);


function showGallery(image) {
	gallContainer.classList.toggle('closed');
	slides[getClickedImageIndex(image)].classList.add('show-img');
}

function galClose() {
	gallimg[getActiveSlideIndex()].scrollIntoView({behavior: "smooth", inline: "nearest",block: "center"});
	slides[getActiveSlideIndex()].classList.remove('show-img');
	gallContainer.classList.toggle('closed');
}

function nextSlide() {
	let active = getActiveSlideIndex();
	slides[active].classList.toggle('show-img');
	if (active != slides.length-1) {
	slides[active+1].classList.toggle('show-img');
	} else {
		slides[0].classList.toggle('show-img');
	}
}

function prevSlide() {
	let active = getActiveSlideIndex();
	slides[active].classList.toggle('show-img');
	if (slides[active-1] == undefined) {
		slides[slides.length-1].classList.toggle('show-img');
	} else {
		slides[active-1].classList.toggle('show-img');
	}
}

function getActiveSlideIndex() {
	return getArrayItemIndex(slides,document.querySelector(".show-img"));
}

function getClickedImageIndex(clickedImage) {
	return getArrayItemIndex(gallimg, clickedImage);
}

function getArrayItemIndex(element,rule) {
	return Array.prototype.indexOf.call(element,rule)
}
