import {Api} from "./API.JS"
export const api = new Api({
  baseUrl:"https://around.nomoreparties.co/v1/web_es_07",
  headers:{
    authorization:"3a9ccaa6-61a7-4561-8aff-5b939bc6d3d4",
    "Content-Type": "application/json"
  }
})
export const modalImg = document.querySelector('#modal-img');
export const modalPlace = document.querySelector('#modal-place');
export const modalProfile = document.querySelector('#modal-profile');
export const modalConfirmation = document.querySelector('#modal-confirm');
export const modalAvatar = document.querySelector('#modal-edit-photo');
export const addButton = document.querySelector('.profile__add-button');
export const profileName = document.querySelector('.profile__content-name');
export const profileWorkstation = document.querySelector('.profile__content-workstation');
export const valuesForm = [];
export const places = document.getElementById('places');
export const editButton = document.querySelector('.profile__edit-button');
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
  }
];
export const closeIcon = document.querySelector('#close-icon-profile');
export const formProfile = document.querySelector('#form-profile');
export const closePlace = document.querySelector('#close-icon-place');
export const formPlace = document.querySelector('#form-place');
export const buttonSubmit = document.querySelector('.form__button-submit');
export const closeImagePopUp = document.getElementById('close-icon-image');
export const closeConfirmPopUp = document.getElementById('close-icon-confirm');
export const closeEditPhotoPoup = document.getElementById('close-icon-edit-photo');
export const btnConfirmation = document.getElementById('btn-confirmation');
export const overlay = document.querySelector('.profile-avatar_overlay');
export const profileAvatar = document.querySelector('.profile-avatar');