import './index.css';
import '../components/header/header.js'
import { Popup } from '../components/Popup/Popup.js';
import { popupSelectorCourse, popupSelectorPartner } from '../utils/constants';

const popupCourseButton = document.querySelector('.card__button-detail');
const popupCourse = new Popup({popupSelector: popupSelectorCourse});

const popupPartnerButtons = document.querySelectorAll('.partners__border');
const popupPartner = new Popup({popupSelector: popupSelectorPartner});

console.log('asdasf');


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