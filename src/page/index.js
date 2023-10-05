import "./index.css"
import logoAround from "../images/logo/logo-around.png"
import userAvatar from "../images/avatar.png"
import iconX from "../images/close-icon.png"
import editIcon from "../images/edit-icon.png"
import addIcon from "../images/icono-add.png"
import { DefaultCards} from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import PopupWithForm from "./components/PopupWithForm.js";
import { addButton, modalPlace,
  places,editButton, modalProfile,initialCards,
  closeIcon,closePlace,closeImagePopUp
  } from "./components/constants.js";

  const logoAroundTheWord = document.querySelector(".header-logo");
  const addImage = document.getElementById("add-icon");
  const avatar = document.getElementById("avatar");
  const trashImage = document.querySelector("places-card__trash")
  logoAroundTheWord.src = logoAround;
  avatar.src = userAvatar;
  closeIcon.src = iconX;
  closePlace.src =iconX;
  closeImagePopUp.src =iconX;
  editButton.src = editIcon;
  addImage.src = addIcon;


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
  popUpWithProfile.setEventListeners();
})

popUpWithProfile._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  popUpWithProfile.setSubmitListeners();
})


const popUpWithPlace = new PopupWithForm(modalPlace)


addButton.addEventListener("click",()=>{
  popUpWithPlace.open();
  popUpWithPlace._handleEscClose();
  popUpWithPlace.setEventListeners();
});

popUpWithPlace._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  popUpWithPlace.setSubmitListeners();
})

// Ejecutando el metodo `enableValidation` en ambas clases
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();