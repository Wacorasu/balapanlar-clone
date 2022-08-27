import './index.css';
import {popupSelectorCourse, popupSelectorPartner, burgerMenuOpenButton, principlesSection, burgerMenuLinksArray, popupCourseButton, popupPartnerButtons} from '../utils/constants.js';
import {Popup} from '../components/Popup.js';
import {BurgerMenu} from '../components/BurgerMenu.js';
import {Header} from '../components/Header.js';
/* import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/all'; */
import {gsap} from "../../gsap-member/src/all";
import {ScrollTrigger} from '../../gsap-member/src/all';

gsap.registerPlugin(ScrollTrigger);
const cards = gsap.utils.toArray(".horiz-scroll__card");
const matchMedia = gsap.matchMedia();

window.addEventListener('load', () => {
  matchMedia.add("(min-width: 1025px)", () => {
    enableScrollAnimation();
  });
});

function enableScrollAnimation() {
  gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".principles",
      start: "bottom bottom",
      pin: '.principles',
      scrub: 1,
      end: () => `+=${document.querySelector(".horiz-scroll").offsetWidth}`,
    }
  });
  ScrollTrigger.create({
    trigger: ".principles",
    start: "bottom bottom",
    end: () => "+=" + document.querySelector(".horiz-scroll").offsetWidth,
    onToggle: () => principlesSection.classList.toggle('principles_without-border')
  });
}

const burgerMenu = new BurgerMenu('.burger-menu');
burgerMenu.setListeners();
burgerMenuOpenButton.addEventListener('click', () => {
  burgerMenu.open();
});

burgerMenuLinksArray.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.close();
  });
});

const header = new Header('.header');
document.addEventListener('scroll', () => {
  if(header.checkPageYOffset()) {
    header.enableSecondVariation();
  } else {
    header.enableFirstVariation();
  }
});

const popupCourse = new Popup({popupSelector: popupSelectorCourse});
const popupPartner = new Popup({popupSelector: popupSelectorPartner});

popupCourseButton.addEventListener('click', (e) =>{
  e.preventDefault();
  popupCourse.openPopup();
})

popupPartnerButtons.forEach(button => {
  button.addEventListener('click', (e) =>{
    e.preventDefault();
    popupPartner.openPopup();
  });
})
