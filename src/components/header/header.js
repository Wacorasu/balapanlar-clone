const header = document.querySelector(".header");
const logo = header.querySelector(".header__logo");
const burgerButton = header.querySelector('.header__burger-btn');
const burgerMenu = header.querySelector('.burger-menu');
const burgerCloseBtn = header.querySelector('.burger-menu__close-button');

burgerButton.addEventListener('click', function() {
	burgerMenu.classList.add('burger-menu_active');
});

burgerCloseBtn.addEventListener('click', function() {
	burgerMenu.classList.remove('burger-menu_active');
});

document.addEventListener("scroll", function () {
  if (window.pageYOffset >= 1) {
    header.classList.add("header_second-logo");
  } else {
    header.classList.remove("header_second-logo");
  }
});