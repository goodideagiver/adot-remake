const gallimg = document.querySelectorAll('.images img');
//console.log(gallimg);

gallimg.forEach(galimage => {
    galimage.addEventListener('click',() => galleryenabler(galimage));
});

function galleryenabler(clickede) {
    console.log('Clicked' + clickede)
    if (clickede.classList.contains("enabled")) {
        clickede.classList.remove("enabled");
    } else {
        gallimg.forEach(element => {
            element.classList.remove("enabled");
        });
        clickede.classList.add("enabled");
        setTimeout(() => {
            clickede.scrollIntoView({block: "center",behavior: "smooth"});
        }, 500);
    }
}