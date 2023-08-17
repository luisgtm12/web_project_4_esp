import {  modalImg  } from "./constants.js";
import { popupWithImg } from "./PopupWithImage.js";
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
    this._element.remove();
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
  this._link = data[1];
  this._name = data[0];
}

}
export { Card , DefaultCards, CreatedCards};