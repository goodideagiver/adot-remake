const mainNav = document.querySelector(".main-nav");
const mainNavHeight = mainNav.offsetHeight;
const mobileNav = document.querySelector(".mobile-nav");
// mobileNav.style.transform = `translate(0,${mainNavHeight-3}px)`;
//console.log(mainNavHeight);
const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", mobileMenuToggle);
mobileNav.addEventListener("click",mobileMenuToggle);

function mobileMenuToggle() {
	mobileNav.classList.toggle("list-toggle");
    hamburger.classList.toggle("eaten");
}

function mobileNavPopulate() {
    const navAnchors = document.querySelectorAll('.links a');
    mobileNav.innerHTML ="";
    navAnchors.forEach(anchor => {
        mobileNav.appendChild(anchor.cloneNode(true))
    });
}

mobileNavPopulate();

document.onscroll = navHideOnScroll;

let target = document.querySelector('footer');


function navHideOnScroll() {
    if (elementInViewport2(target)) {
    mobileNav.classList.remove("list-toggle");
    hamburger.classList.remove("eaten");
    }
}

function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }