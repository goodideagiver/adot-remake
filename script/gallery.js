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
xButton = document.createElement("div").innerHTML='<i class="fas fa-times"></i>';
gallContainer.appendChild.xButton;
gallimg.forEach((element) => {
	gallContainer.appendChild(element.cloneNode(true));
});
document.querySelector("body > main").appendChild(gallContainer);
gallContainer.addEventListener("click",galClose);
gallimg.forEach((galimage) => {
	galimage.addEventListener("click", () => showGallery(galimage));
});





function showGallery(image) {
	galClose();
}

function galClose() {
	gallContainer.classList.toggle('closed');
}