const mainNav = document.querySelector(".main-nav");
const mainNavHeight = mainNav.offsetHeight;
const mobileNav = document.querySelector(".mobile-nav");
// mobileNav.style.transform = `translate(0,${mainNavHeight-3}px)`;
//console.log(mainNavHeight);
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", mobileMenuToggle);

function mobileMenuToggle() {
	mobileNav.classList.toggle("list-toggle");
    hamburger.classList.toggle("eaten");
}
