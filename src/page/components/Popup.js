export default class Popup {
  constructor(popupSelector){
    this._popupSelector = popupSelector;
    this._handleEscClose();
  }
  open(){
    this._popupSelector.classList.add("modal__opened");
  }

  close(){
    this._popupSelector.classList.remove("modal__opened")
  }

  _handleEscClose(){
    const self = this;
    document.onkeydown = function (evt){
    if (evt.key === "Escape"){
      self.close()
    }
  }
  }

  setEventListeners(){
    const closeButton = this._popupSelector.querySelector('.modal__close-icon');
    closeButton.addEventListener('click', ()=>{
      this.close();
    })
  }
}

