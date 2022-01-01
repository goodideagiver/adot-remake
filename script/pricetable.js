const pricetableItems = document.querySelectorAll('.pricetable > div');

pricetableItems.forEach(priceDiv => {
    console.log(priceDiv);
    priceDiv.addEventListener("click",togglePriceItemPreview)
});

function togglePriceItemPreview() {
    event.currentTarget.classList.toggle('pricePreview');
    document.querySelector('body').classList.toggle('no-scroll');
}