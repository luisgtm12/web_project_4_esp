import {places, modalProfile, modalPlace, editButton,
  closeIcon,formProfile, addButton, closePlace, formPlace} from "./index.js";
import { CreatedCards } from "./Card.js";
function handleDisplayModal () {
  modalProfile.classList.toggle("modal__opened");
};

function handleProfileForm (event) {
  event.preventDefault();

  const userName = document.querySelector('#user-name').value;
  const userAbout = document.querySelector('#user-about').value;

  const profileName = document.querySelector('.profile__content-name');
  const profileWorkstation = document.querySelector('.profile__content-workstation');

  profileName.textContent = userName;
  profileWorkstation.textContent = userAbout;

  handleDisplayModal();
};

/* funcion de modal 2 */
function handleDisplayModalPlace () {
  modalPlace.classList.toggle("modal__opened")
};
const handleAddPlace=( (event) => {
  event.preventDefault();
  const name = document.querySelector('#place-title').value;
  const link = document.querySelector('#place-link').value;
  const card = new CreatedCards([name, link],".card");
  const divPlaces = card.generateCard();
  places.append(divPlaces);
  handleDisplayModalPlace ();
});
document.onkeydown = function (evt) {

  if (evt.key === "Escape") {
    modalProfile.classList.remove('modal__opened');
    modalPlace.classList.remove('modal__opened');
  }
};

editButton.addEventListener('click', handleDisplayModal);
closeIcon.addEventListener('click', handleDisplayModal);
formProfile.addEventListener('submit',handleProfileForm);
addButton.addEventListener('click', handleDisplayModalPlace);
closePlace.addEventListener('click',handleDisplayModalPlace);
formPlace.addEventListener('submit', handleAddPlace);