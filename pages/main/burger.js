
const body = document.querySelector(".body");
const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".nav");

const shadow = document.querySelector(".shadow");
const logoContainer = headerNav.querySelector(".logo__container");
const listLink = headerNav.querySelectorAll(".list__link");

const allElem = [ burger, logoContainer, shadow, ...listLink];
let isMenuOpen = false;

const openMenu = () => {
  body.classList.add("body__overflow");
  burger.classList.remove("burger__rotateOut");
  burger.classList.add("burger__rotateIn");
  headerNav.classList.remove("nav__slideout");
  headerNav.classList.add("nav__slidein");
  shadow.classList.add("shadow__active");
 
  isMenuOpen = true;
};

const closeMenu = () => {
  body.classList.remove("body__overflow");
  burger.classList.remove("burger__rotateIn");
  burger.classList.add("burger__rotateOut");
  headerNav.classList.add("nav__slideout");
  headerNav.classList.remove("nav__slidein");
  shadow.classList.remove("shadow__active");
  
  isMenuOpen = false;
};

const isMenuOpenF = () => {
  if (!isMenuOpen) {
    openMenu();
    document.documentElement.style.overflowY = "hidden"
  } else {
    closeMenu();
    document.documentElement.style.overflowY = "visible"
  }
};

allElem.forEach((element) => {
  element.addEventListener("click", isMenuOpenF);
});



