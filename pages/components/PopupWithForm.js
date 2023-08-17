import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor({formSubmitHandler}, popupSelector){
    super(popupSelector);
    this._form = popupSelector.querySelector('.form');
    this._formSubmit = formSubmitHandler
  }

  _getInputValue(){

  }

  close(){
    super.close();
  }

  setEventListeners(){
    super.setEventListeners();
  }
}