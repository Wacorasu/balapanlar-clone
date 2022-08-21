import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray(".horiz-scroll__card");

let matchMedia = gsap.matchMedia();

matchMedia.add("(min-width: 700px)", () => {
  scrolling()
})

function scrolling() {
  gsap.to(cards, {
    xPercent: -100 * (cards.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".horiz-scroll",
      pin: true,
      scrub: 1,
      snap: 1 / (cards.length - 1),
      end: () => "+=" + document.querySelector(".horiz-scroll").offsetWidth
    }
  })
}
