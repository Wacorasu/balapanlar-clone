import './index.css';
<<<<<<< HEAD
import '../components/header/header.js';
import '../components/horiz-scroll.js'
=======
import '../components/header/header.js'
import { Popup } from '../components/Popup/Popup.js';
import { popupSelectorCourse, popupSelectorPartner } from '../utils/constants';

const popupCourseButton = document.querySelector('.partners__title');
const popupCourse = new Popup({popupSelector: popupSelectorCourse});

const popupPartnerButton = document.querySelector('.partners__border');
const popupPartner = new Popup({popupSelector: popupSelectorPartner});

console.log('asdasf');


popupCourseButton.addEventListener('click', (e) =>{
  e.preventDefault();
  popupCourse.openPopup();
})

popupPartnerButton.addEventListener('click', (e) =>{
  e.preventDefault();
  popupPartner.openPopup();
})
>>>>>>> ea9485f (feature: popup+js)
