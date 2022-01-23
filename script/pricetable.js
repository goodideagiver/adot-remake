const pricetableItems = document.querySelectorAll('.pricetable > div');
pricetableContainer = document.createElement('div');
pricetableContainer.classList.add('pricePreviewContainer', 'closed');
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
        <div id="priceLeft">
            <i class="fas fa-arrow-left"></i>
        </div>
        <div id="priceRight">
            <i class="fas fa-arrow-right"></i>
        </div>
    </div>
`;
document.querySelector('body > main').appendChild(pricetableContainer);
pricetableContainer.addEventListener('click', () => {
	if (event.target === pricetableContainer) {
		closePricetablePreview();
	}
});

function copyPricetableInfo() {
	infoPricetable = document.createElement('main');
	pricetableItems.forEach((priceDiv) => {
		infoPricetable.appendChild(priceDiv.cloneNode(true));
		priceDiv.addEventListener('click', showPricetablePreview);
	});
	infoPricetable.querySelectorAll('p').forEach((element) => {
		element.remove();
	});
	return infoPricetable.innerHTML;
}
const priceDivs = document.querySelectorAll(
	'.pricePreviewContainer main > div'
);
document
	.getElementById('priceX')
	.addEventListener('click', closePricetablePreview);
document
	.getElementById('priceLeft')
	.addEventListener('click', prevPricetableItem);
document
	.getElementById('priceRight')
	.addEventListener('click', nextPricetableItem);

function nextPricetableItem() {
	let active = getActivePricetableDiv();
	priceDivs[active].classList.remove('priceDivVisible');
	active++;
	if (active > priceDivs.length - 1) active = 0;
	priceDivs[active].classList.add('priceDivVisible');
}

function prevPricetableItem() {
	let active = getActivePricetableDiv();
	priceDivs[active].classList.remove('priceDivVisible');
	active = active - 1;
	if (active < 0) active = priceDivs.length - 1;
	priceDivs[active].classList.add('priceDivVisible');
}

function closePricetablePreview() {
	toggleBodyScroll('on');
	let active = getActivePricetableDiv();
	pricetableItems[active].scrollIntoView({ block: 'center' });
	pricetableContainer.classList.add('close-anim');
	setTimeout(() => {
		priceDivs[active].classList.remove('priceDivVisible');
		pricetableContainer.classList.add('closed');
		pricetableContainer.classList.remove('close-anim');
	}, 500);
}

function getActivePricetableDiv() {
	return getArrayItemIndex(
		priceDivs,
		document.querySelector('.priceDivVisible')
	);
}

function showPricetablePreview(clickedDiv) {
	toggleBodyScroll('off');
	let clickedDiv1 = getArrayItemIndex(
		pricetableItems,
		clickedDiv.currentTarget
	);
	pricetableContainer.classList.remove('closed');
	priceDivs[clickedDiv1].classList.add('priceDivVisible');
}
