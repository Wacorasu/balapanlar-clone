const header = document.querySelector(".header");
const logo = header.querySelector(".header__logo");
const burgerOpenButton = header.querySelector('.header__burger-btn');
const burgerMenu = header.querySelector('.burger-menu');
const burgerCloseBtn = header.querySelector('.burger-menu__close-button');
const burgerNavLinks = burgerMenu.querySelectorAll('.burger-menu__nav-link'); 
const enrollOnCoursesBurgerButton = burgerMenu.querySelector('.burger-menu__button');

function openBurgerMenu() {
  burgerMenu.classList.add('burger-menu_active');
}

function closeBurgerMenu() {
  burgerMenu.classList.remove('burger-menu_active');
}

burgerOpenButton.addEventListener('click', openBurgerMenu);
burgerCloseBtn.addEventListener('click', closeBurgerMenu);

document.addEventListener("scroll", function () {
  if (window.pageYOffset >= 1) {
    header.classList.add("header_second-logo");
  } else {
    header.classList.remove("header_second-logo");
  }
});

burgerNavLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    closeBurgerMenu();
  });
});

enrollOnCoursesBurgerButton.addEventListener('click', function () {
  closeBurgerMenu();
});