import trashIcon from "/src/images/trash-icon.png"
import blackHeart from "/src/images/corazon-negro.png"
import likeIcon from "/src/images/corazon.png"
import {  modalImg ,modalConfirmation, btnConfirmation,api, userId } from "./constants.js";
import { popupWithImg } from "./PopupWithImage.js";
import Popup from "./Popup.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
class Card {
  constructor(data,cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    this._likes = [];
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
    let isLike = false;
    this._likes.forEach((like)=>{
      if (like._id === userId) {
        isLike = true;
      }
    });

    if(isLike) {
      this._element.querySelector(".places-card__contain_like").src= blackHeart;
      this._element.querySelector(".places-card__contain_like").classList.add("black-heart")
    } else {
      this._element.querySelector(".places-card__contain_like").src = likeIcon;
      this._element.querySelector(".places-card__contain_like").classList.remove("black-heart")
    }
    this._element.querySelector(".places-card__image").src = this._link;
    this._element.querySelector(".places-card__image").alt = `imagen de ${this._name}`;
    this._element.querySelector(".places-card__contain_title").textContent = this._name;
    this._element.id = this._id;
    
    this._element.querySelector(".places-card__contain_like-count").textContent = this._likes.length >0 ? this._likes.length : "";
    if (this._showDelete){
      this._element.querySelector(".places-card__trash").src = trashIcon;
    }else{
      this._element.querySelector(".places-card__trash").style.display = "none";
    }

    this._deletedPlace();
    this._handleLike();
    
    this._closeIcon();

    return this._element;
  }

  _handleLike() {
    this._element.querySelector(".places-card__contain_like").addEventListener("click",()=>{
      
      
      if(this._element.querySelector(".places-card__contain_like").classList.contains("black-heart")){
        api.deleteLike(this._element.id).then((res=>{
          const initArrayLikes = res.likes;
          this._element.querySelector(".places-card__contain_like-count").textContent = initArrayLikes.length;
          this._element.querySelector(".places-card__contain_like").src= likeIcon;
        }))
      } else {
        api.addLike(this._element.id).then((res=> {
          const initArrayLikes = res.likes;
          
          this._element.querySelector(".places-card__contain_like-count").textContent = initArrayLikes.length;
          this._element.querySelector(".places-card__contain_like").src= blackHeart;
        }))
        
      }
      this._element.querySelector(".places-card__contain_like").classList.toggle("black-heart");
      /*this._element.querySelector(".places-card__contain_like").classList.toggle("black-heart");*/
    });

  }

  _deletedPlace() {
    this._element.querySelector(".places-card__trash").addEventListener("click", ()=>{
    const popUpConfirmationCard = new PopupWithConfirmation(modalConfirmation);
    popUpConfirmationCard.setEventListeners();
    popUpConfirmationCard.open();
    btnConfirmation.addEventListener("click",()=>{
      if(!!this._id){
        api.deleteCard(this._id).then(()=>{
          this._element.remove();
          popUpConfirmationCard.close();
        })
      }else{
        this._element.remove();
        popUpConfirmationCard.close();
      }
      
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
  constructor(data, cardSelector, showDelete){
    super(cardSelector);
    this._link = data.link;
    this._name = data.name;
    this._id = data._id;
    if (data.likes){
      this._likes = data.likes;
    }
    this._showDelete = showDelete;
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