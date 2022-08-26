export class BurgerMenu {
    constructor(burgerMenuSelector) {
      this._burgerMenu = document.querySelector(burgerMenuSelector);
      this._burgerMenuContainer = this._burgerMenu.querySelector('.burger-menu__container');
    }
  
    open() {
      this._burgerMenu.classList.add('burger-menu_opened');
      this._burgerMenuContainer.classList.add('burger-menu__container_dropdown');
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._burgerMenuContainer.classList.remove('burger-menu__container_dropdown');
      setTimeout(() => {this._burgerMenu.classList.remove('burger-menu_opened')}, 320);
      document.removeEventListener('keydown', this._handleEscClose);
    }
  
    _handleEscClose = (evt) => {
      if(evt.key === "Escape") {
        this.close();
      }
    }
  
    setListeners() {
      this._burgerMenu.addEventListener('mousedown', (evt) => {
        if(evt.target.classList.contains('burger-menu_opened')) {
          this.close();
        }
        if(evt.target.classList.contains('burger-menu__close-button')) {
          this.close();
        }
      });
    }
}