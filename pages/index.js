import { DefaultCards} from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import { addButton, modalPlace,
  places,editButton, modalProfile } from "./components/constants.js";

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

export const closeImagePopUp = document.querySelector('.modal__close-icon')

//Instanciando cada Formulario
const formProfileValidator = new FormValidator("form-profile");
const formPlaceValidator = new FormValidator("form-place");

initialCards.forEach((item) => {
  const card = new DefaultCards(item,".card");
  const cardElement = card.generateCard();

  places.append(cardElement);
})

const popUpWithProfile = new PopupWithForm(modalProfile)
editButton.addEventListener("click",()=>{
  popUpWithProfile.open();
})
popUpWithProfile.setEventListeners();

const popUpWithPlace = new PopupWithForm(modalPlace)


addButton.addEventListener("click",()=>{
  popUpWithPlace.open();
});
popUpWithPlace.setEventListeners();

// Ejecutando el metodo `enableValidation` en ambas clases
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();