import { CreatedCards } from "./Card.js";
import Popup from "./Popup.js";
import {valuesForm, places} from "./constants.js"
import { modalPlace, modalProfile,
  profileName, profileWorkstation } from "./constants.js";
  import { UserInfo } from "./UserInfo.js";

export default class PopupWithForm extends Popup {

  constructor( popupSelector){
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector('.form');
    this._buttonClose = this._popupSelector.querySelector(".modal__close-icon")
  }

  
  _getInputValue(){
    this._inputList = this._form.querySelectorAll(".form__user-box");
    for(let i= 0; i<2; i++){
      valuesForm[i]=this._inputList[i].value;
    }
    
  }
  _formAssignment(){
    if(this._popupSelector === modalProfile){
      this._addProfile();
      
    } else if(this._popupSelector ===modalPlace){
      this._addPlace();
      
    }
  }
  _addProfile(){
    const userInform = {};
    userInform.userName = valuesForm[0];
    userInform.userAbout = valuesForm[1];
    const addUserInfo = new UserInfo(userInform);
    addUserInfo.setUserInfo(profileName, profileWorkstation);
    console.log(userInform)
  }

  _addPlace(){
    const data = {};
    data.name = valuesForm[0];
    data.link = valuesForm[1];
    const newCard = new CreatedCards(data,".card");
    const cardElement= newCard.generateCard();
    places.append(cardElement);
    
  }

  close(){
    super.close();
    this._form.reset();
  }
  
  setSubmitListeners(){
    this._getInputValue();
    this._formAssignment();
    this.close();
  }

  setEventListeners(){
    super.setEventListeners();
    super._handleEscClose();
    // this._form.addEventListener('submit', (evt) => {
    //   evt.preventDefault();
      
    // })
  }
}

export {PopupWithForm};