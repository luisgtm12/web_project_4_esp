import { CreatedCards, DefaultCards } from "./Card.js";
import Popup from "./Popup.js";
import {valuesForm, places, modalAvatar, inputName, inputAbout} from "./constants.js"
import { modalPlace, modalProfile,profileAvatar,
  profileName, profileWorkstation,api} from "./constants.js";
  import { UserInfo } from "./UserInfo.js";

export default class PopupWithForm extends Popup {

  constructor( popupSelector){
    super(popupSelector);
    this._popupSelector = popupSelector;
    this._form = this._popupSelector.querySelector('.form');
    this._buttonClose = this._popupSelector.querySelector(".modal__close-icon");
    this._inputList = this._form.querySelectorAll(".form__user-box");
    this._buttonForm = this._form.querySelector(".form__button-submit");
  }
  
  
  
  _getInputValue(){
    this._inputList.forEach((input)=>{
      valuesForm[input.name] =input.value;
    })
    return valuesForm;
    /*  for(let i= 0; i<2; i++){
      valuesForm[i]=this._inputList[i].value;
    } */
    
  }
  _formAssignment(){
    if(this._popupSelector === modalProfile){
      this._addProfile();
      
    } else if(this._popupSelector ===modalPlace){
      this._addPlace();
      
    } else if(this._popupSelector === modalAvatar){
      this._addAvatar();
    }
  }

  _addAvatar(){
    const userAvatar = {};
    userAvatar.link = valuesForm.link;
    profileAvatar.src = userAvatar.link;
    this._buttonForm.innerText = "Guardando...";
    this._buttonForm.disabled = true;
    api.updateAvatar({
      avatar:userAvatar.link
    })
    .finally(()=>{this._finally("Guardar")})
  }

  _addProfile(){
    const userInform = {};
    userInform.userName = valuesForm.name;
    userInform.userAbout = valuesForm.about;
    const addUserInfo = new UserInfo(userInform);
    addUserInfo.setUserInfo(profileName, profileWorkstation);
    this._buttonForm.innerText = "Guardando...";
    this._buttonForm.disabled = true;
    api.updateProfile({name:userInform.userName,about:userInform.userAbout})
    .finally(()=>{this._finally("Guardar")});
  }

  _finally(loaders){
    this._buttonForm.innerText=`${loaders}`;
      this._buttonForm.disabled= false;
  }

  _addPlace(){
    const newCardData = {};
    newCardData.name = valuesForm.name;
    newCardData.link = valuesForm.link;
    this._buttonForm.innerText = "Creando...";
    this._buttonForm.disabled = true;
    api.addCards(newCardData).then((newCardData) => {
      const newCard = new DefaultCards(newCardData,".card",true);
      const cardElement= newCard.generateCard();
      places.append(cardElement);
    })
    .finally(()=>{this._finally("Crear")})
  }

  close(){
    super.close();
    this._inputList.forEach((input)=>{
      input.value = "";
    })
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