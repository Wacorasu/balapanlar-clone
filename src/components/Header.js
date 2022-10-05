export class Header {
  constructor(headerSelector) {
    this._header = document.querySelector(headerSelector);
    this._headerContainer = this._header.querySelector('.header__container');
  }

  enableFirstVariation() {
    this._header.classList.remove("header_second-logo");
    this._headerContainer.classList.remove("header__container_onscroll");
  }

  enableSecondVariation() {
    this._header.classList.add("header_second-logo");
    this._headerContainer.classList.add("header__container_onscroll");
  }

  checkPageYOffset() {
    return window.pageYOffset >= 41.6;
  }
}