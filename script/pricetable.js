const pricetableItems = document.querySelectorAll('.pricetable > div');
pricetableContainer = document.createElement("div");
pricetableContainer.classList.add('pricePreviewContainer','closed');
pricetableContainer.innerHTML = `
<div class="lightbox-controls">
    <div id="priceX">
    <i class="fas fa-times"></i>
    </div>
    </div>
    <main>
        ${copyPricetableInfo()}
    </main>
    <div class="lightbox-controls">
        <div>
            <i id="priceLeft"  class="fas fa-arrow-left"></i>
        </div>
        <div>
            <i id="priceRight"  class="fas fa-arrow-right"></i>
        </div>
    </div>
`;
document.querySelector('body > main').appendChild(pricetableContainer);
let paragraphs = document.querySelectorAll('.pricePreviewContainer p');
paragraphs.forEach(paragraph => {
    paragraph.remove();
});

function copyPricetableInfo() {
    infoPricetable = document.createElement("main");
    pricetableItems.forEach(priceDiv => {
        infoPricetable.appendChild(priceDiv.cloneNode(true));
        priceDiv.addEventListener('click',showPricetablePreview);
    });
    return infoPricetable.innerHTML;
}


function showPricetablePreview(clickedDiv) {
    console.log(getArrayItemIndex(pricetableItems,clickedDiv.currentTarget));
    pricetableContainer.classList.toggle('closed');
}


// pricetableItems.forEach(priceDiv => {
//     priceDiv.addEventListener("click",togglePriceItemPreview);
//     priceDiv.addEventListener("touch",togglePriceItemPreview);
// });

// function togglePriceItemPreview(event) {
//     event.currentTarget.classList.toggle('pricePreview');
//     document.querySelector('body').classList.toggle('no-scroll');
//     document.querySelector('html').classList.toggle('no-scroll');
// }