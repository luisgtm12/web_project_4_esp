/*import {places, modalProfile, 
  closeIcon,formProfile, closePlace, formPlace, 
profileName,profileWorkstation} from "./index.js";
import { modalImg, addButton, modalPlace } from "./components/constants.js";
function handleDisplayModal () {
  modalProfile.classList.toggle("modal__opened");
};

function handleProfileForm (event) {
  event.preventDefault();

  const userName = document.querySelector('#user-name').value;
  const userAbout = document.querySelector('#user-about').value;


  profileName.textContent = userName;
  profileWorkstation.textContent = userAbout;

  handleDisplayModal();
};

/* funcion de modal 2 */
/*function handleDisplayModalPlace () {
  modalPlace.classList.toggle("modal__opened")
};




closeIcon.addEventListener('click', handleDisplayModal);
formProfile.addEventListener('submit',handleProfileForm);
addButton.addEventListener('click', handleDisplayModalPlace);
closePlace.addEventListener('click',handleDisplayModalPlace);
formPlace.addEventListener('submit', handleAddPlace);*/