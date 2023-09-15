import { CreatedCards } from "./Card.js";
import Popup from "./Popup.js";
import {valuesForm, places} from "./constants.js"
import { modalPlace, modalProfile,
  profileName, profileWorkstation } from "./constants.js";

export default class PopupWithForm extends Popup {

  constructor( popupSelector){
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector('.form');
    this._buttonClose = this._popupSelector.querySelector(".modal__close-icon")
  }

  _resetInputsValues(){
    valuesForm.splice(0,2);
  }

  _getInputValue(){
    this._inputList = this._form.querySelectorAll(".form__user-box");
    for(let i= 0; i<2; i++){
      valuesForm.push(this._inputList[i].value);
    }
    
  }
  _formAssignment(){
    if(this._popupSelector === modalProfile){
      this._addProfile();
      this.close();
    } else if(this._popupSelector ===modalPlace){
      this._addPlace();
      this.close();
    }
  }
  _addProfile(){
    profileName.textContent = valuesForm[0];
    profileWorkstation.textContent = valuesForm[1];
    this._resetInputsValues();
  }

  _addPlace(){
    const data = {};
    data.name = valuesForm[0];
    data.link = valuesForm[1];
    const newCard = new CreatedCards(data,".card");
    const cardElement= newCard.generateCard();
    places.append(cardElement);
    this._resetInputsValues();
  }

  close(){
    super.close();
    this._form.reset();
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._getInputValue();
      this._formAssignment();
    })
    super._handleEscClose();
    this._buttonClose.addEventListener("click",()=>{
      this.close();
    })
  }
}

export {PopupWithForm};