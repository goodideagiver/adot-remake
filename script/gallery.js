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

const gallimg = document.querySelectorAll('.images img');
gallContainer = document.createElement("div");
gallContainer.classList.add("lightbox");
gallimg.forEach(element => {
    gallContainer.appendChild(element.cloneNode(true));
    //console.log(element);
});
//console.log(gallContainer)

gallimg.forEach(galimage => {
    galimage.addEventListener('click',() => showGallery(galimage));
});

