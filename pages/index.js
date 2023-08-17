import { DefaultCards} from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";

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
export const editButton = document.querySelector('.profile__edit-button');
export const modalProfile = document.querySelector('#modal-profile');
export const closeIcon = document.querySelector('#close-icon-profile');
export const formProfile = document.querySelector('#form-profile');
export const modalPlace = document.querySelector('#modal-place');
export const closePlace = document.querySelector('#close-icon-place');
export const formPlace = document.querySelector('#form-place');
export const places = document.getElementById('places');

export const addButton = document.querySelector('.profile__add-button');
export const buttonSubmit = document.querySelector('.form__button-submit');
export const profileName = document.querySelector('.profile__content-name');
export const profileWorkstation = document.querySelector('.profile__content-workstation');
export const closeImagePopUp = document.querySelector('.modal__close-icon')

//Instanciando cada Formulario
const formProfileValidator = new FormValidator("form-profile");
const formPlaceValidator = new FormValidator("form-place");

initialCards.forEach((item) => {
  const card = new DefaultCards(item,".card");
  const cardElement = card.generateCard();

  places.append(cardElement);
})


// Ejecutando el metodo `enableValidation` en ambas clases
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();