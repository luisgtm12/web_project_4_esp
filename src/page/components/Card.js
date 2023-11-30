import trashIcon from "/src/images/trash-icon.png"
import likeIcon from "/src/images/corazon.png"
import {  modalImg ,modalConfirmation, btnConfirmation } from "./constants.js";
import { popupWithImg } from "./PopupWithImage.js";
import Popup from "./Popup.js";
class Card {
  constructor(data,cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".places-card")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".places-card__trash").src = trashIcon;
    this._element.querySelector(".places-card__contain_like").src = likeIcon;
    this._setEventListeners();
    
    this._element.querySelector(".places-card__image").src = this._link;
    this._element.querySelector(".places-card__image").alt = `imagen de ${this._name}`;
    this._element.querySelector(".places-card__contain_title").textContent = this._name;
    this._deletedPlace();
    this._handleLike();
    
    this._closeIcon();

    return this._element;
  }

  _handleLike() {
    this._element.querySelector(".places-card__contain_like").addEventListener("click",()=>{
      this._element.querySelector(".places-card__contain_like").classList.toggle("black-heart");
    });
  }

  _deletedPlace() {
    this._element.querySelector(".places-card__trash").addEventListener("click", ()=>{
    const popUpConfirmationCard = new Popup(modalConfirmation);
    popUpConfirmationCard.setEventListeners();
    popUpConfirmationCard.open();
    btnConfirmation.addEventListener("click",()=>{
      this._element.remove();
      popUpConfirmationCard.close()
    })
    });
  }

  /*_modalImg(){
    modalImgSrc.src = this._link;
    modalImgSrc.alt = this._name;
    modalImgTitle.textContent = this._name;
    
    this._handleModalImgOpen();
  }*/

  _setEventListeners() {
    
    this._element.querySelector(".places-card__image").addEventListener("click", ()=>{
      popupWithImg.open(this._link, this._name);
    })
  }
  
  _closeIcon() {
    modalImg.querySelector(".modal__close-icon").addEventListener("click", ()=>{
      modalImg.classList.remove("modal__opened");
    })
  }

}

class DefaultCards extends Card {
  constructor(data, cardSelector){
    super(cardSelector);
    this._link = data.link;
    this._name = data.name;
    this._cardSelector=cardSelector;
  }

}

class CreatedCards extends Card{
  constructor(data, cardSelector){
  super(cardSelector);
  this._link = data.link;
    this._name = data.name;
    this._cardSelector=cardSelector;
}

}
export { Card , DefaultCards, CreatedCards};