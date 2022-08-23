import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".horiz-scroll__card");
const principles = document.querySelector('.principles');

const matchMedia = gsap.matchMedia();
matchMedia.add("(min-width: 1025px)", () => {
  scrolling();
});

function scrolling() {
  gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".principles",
      start: "bottom bottom",
      pin: '.principles',
      // markers: true,
      scrub: 1,
      end: () => `+=${document.querySelector(".horiz-scroll").offsetWidth}`,
    }
  });
  ScrollTrigger.create({
    trigger: ".principles",
    start: "bottom bottom",
    end: () => "+=" + document.querySelector(".horiz-scroll").offsetWidth,
    onToggle: () => principles.classList.toggle('principles_without-border')
  });
}
