const gallimg = document.querySelectorAll('.images img');
console.log(gallimg);

gallimg.forEach(galimage => {
    galimage.addEventListener('click',() => galleryenabler(galimage));
});

function galleryenabler(clickede) {
    console.log('Clicked' + clickede)
    clickede.classList.toggle("enabled");
    setTimeout(() => {
        clickede.scrollIntoView(true);
    }, 500);
}