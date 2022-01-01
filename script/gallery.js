// function galleryenabler(clickede) {
//     console.log('Clicked' + clickede)
//     if (clickede.classList.contains("enabled")) {
//         clickede.classList.remove("enabled");
//     } else {
//         gallimg.forEach(element => {
//             element.classList.remove("enabled");
//         });
//         clickede.classList.add("enabled");
//         setTimeout(() => {
//             clickede.scrollIntoView({block: "center",behavior: "smooth"});
//         }, 500);
//     }
// }

const gallimg = document.querySelectorAll(".images img");
gallContainer = document.createElement("div");
gallContainer.classList.add("lightbox");
xButton = document.createElement("div");
gallContainer.appendChild(xButton);
gallimg.forEach((element) => {
	gallContainer.appendChild(element.cloneNode(true));
});
document.querySelector("body > main").appendChild(gallContainer);
gallimg.forEach((galimage) => {
	galimage.addEventListener("click", () => showGallery(galimage));
});
document.querySelector(".lightbox > div").innerHTML='<i id="gallX" class="fas fa-times"></i>';
gallContainer.innerHTML += '<div class="lightbox-controls"><i id="goLeft" class="fas fa-arrow-left"></i><i id="goRight" class="fas fa-arrow-right"></i>';
document.getElementById("gallX").addEventListener('click',galClose);
//document.querySelector('.lightbox img').classList.add('show-img')
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
	let activeSlide = "";
	for (let i = 0; i < slides.length; i++) {
		if (slides[i].className != "") {
			activeSlide = i;
			return activeSlide;
		}
	}
}

function getClickedImageIndex(clickedImage) {
	let imageIndex ="";
	for (let i = 0; i < gallimg.length; i++) {
		if (gallimg[i] == clickedImage) {
			imageIndex = i;
			//console.log("Klikniety img = " + imageIndex);
			return imageIndex;
		} 
	}
}
