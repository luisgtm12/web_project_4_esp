import "./index.css"
import logoWebTT from "../images/logo/tripleTen.jpg"
import logoAround from "../images/logo/logo-around.png"
import userAvatar from "../images/avatar.png"
import iconX from "../images/close-icon.png"
import editIcon from "../images/edit-icon.png"
import addIcon from "../images/icono-add.png"
import {Section} from "../components/Section.js"
import { DefaultCards} from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js"
import { addButton, modalPlace,
  places,editButton, modalProfile,initialCards,modalAvatar,
  closeIcon,closePlace,closeImagePopUp,closeConfirmPopUp,
  profileName,profileWorkstation,
  closeEditPhotoPoup,overlay, profileAvatar,api,logoTT,userId
  } from "../components/constants.js";

  const logoAroundTheWord = document.querySelector(".header-logo");
  const addImage = document.getElementById("add-icon");
  const trashImage = document.querySelector("places-card__trash");
  logoTT.href = logoWebTT;
  logoAroundTheWord.src = logoAround;
  profileAvatar.src = userAvatar;
  closeIcon.src = iconX;
  closePlace.src =iconX;
  closeImagePopUp.src =iconX;
  editButton.src = editIcon;
  addImage.src = addIcon;
  closeConfirmPopUp.src = iconX;
  closeEditPhotoPoup.src = iconX;

  const defaultProfile = await api.defaultProfile();
  profileName.textContent = defaultProfile.name;
  profileWorkstation.textContent = defaultProfile.about;
  profileAvatar.src = defaultProfile.avatar;
  


  const usersCardsData = await api.getCards();


//Instanciando cada Formulario
const formProfileValidator = new FormValidator("form-profile");
const formPlaceValidator = new FormValidator("form-place");

/*Generar Tarjetas */ 
const generateCard = (data)=>{
  const owner = data.owner;
  let showDelete = true;
  if(!!owner && owner._id !== userId){
    showDelete = false;
  }
  const card = new DefaultCards({...data, likes:data.likes},".card",showDelete);
  const cardElement = card.generateCard();
  places.append(cardElement);
}


const sectionUsers = new Section({
  items:usersCardsData.concat(initialCards),
  renderer: generateCard
},".places");
sectionUsers.renderer();
//

const popUpWithProfile = new PopupWithForm(modalProfile)
editButton.addEventListener("click",()=>{
  const userName = popUpWithProfile._form.querySelector("#user-name");
  const userAbout = popUpWithProfile._form.querySelector("#user-about");
  
  userName.value = defaultProfile.name;
  userAbout.value = defaultProfile.about;
  popUpWithProfile.open();
  popUpWithProfile.setEventListeners();
})

popUpWithProfile._form.addEventListener("submit", (event)=>{
  event.preventDefault();
  popUpWithProfile.setSubmitListeners();
})

const popUpWithAvatar = new PopupWithForm(modalAvatar);
overlay.addEventListener("click",()=>{
  popUpWithAvatar.open();
  popUpWithAvatar._handleEscClose();
  popUpWithAvatar.setEventListeners();
});

popUpWithAvatar._form.addEventListener("submit",(event)=>{
  event.preventDefault();
  popUpWithAvatar.setSubmitListeners();
})

const popUpWithPlace = new PopupWithForm(modalPlace);


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