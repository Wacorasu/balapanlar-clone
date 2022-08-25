export class Popup {
    constructor({popupSelector}) {
        this.body = document.querySelector('.body');
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-button');
        this.boundClosePopup = this.closePopup.bind(this);
        this.boundClosePopupToKey = this._closePopupToKey.bind(this);
        this.boundClosePopupToOverlay = this._closePopupToOverlay.bind(this);
    }

    _removeEventListeners(evt) {
        this._popup.removeEventListener('click', this.boundClosePopupToOverlay);
        this._buttonClose.removeEventListener('click', this.boundClosePopup);
        document.removeEventListener('keydown', this.boundClosePopupToKey);
    }

    _closePopupToKey(evt) {
        if (evt.key === 'Escape') {
          this.closePopup(evt);
        }
    }

    _closePopupToOverlay(evt) {
        if (!(evt.target.closest('.popup__container'))) {
            this.closePopup(evt);
        }
    }

    closePopup(evt) {
        this._popup.classList.remove('popup_opened');
        // this.body.classList.remove('popup__body-scroll');
        this._removeEventListeners(evt);
        // this.scrollY = document.body.style.top;
        // document.body.style.top = '';
        // document.body.style.position = '';
        // window.scrollTo(0, parseInt(this.scrollY || '0') * -1);
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
        // this.body.classList.add('popup__body-scroll');
        this.setEventListener();
        // console.log(window.scrollY);
        // document.body.style.top = `-${window.scrollY}px`;
        // document.body.style.position = 'fixed'; 
    }

    setEventListener() {
        this._buttonClose.addEventListener('click', this.boundClosePopup);
        document.addEventListener('keydown', this.boundClosePopupToKey);
        this._popup.addEventListener('click', this.boundClosePopupToOverlay);
    }
}