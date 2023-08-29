import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {

  constructor({formSubmitHandler}, popupSelector){
    super(popupSelector);
    this._form = popupSelector.querySelector('.form');
    this._formSubmit = formSubmitHandler;
  }

  _getInputValue(){
    this._inputList = this._form.querySelectorAll("form__user-box");
    const valuesForm = {};
    this._inputList.forEach((input) => {
      valuesForm[input.name] = input.value;
    });
  }

  close(){
    super.close();
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValue());
    });
  }
}