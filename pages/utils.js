  
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


/* controlador de modal places */


editButton.addEventListener('click', handleDisplayModal);
closeIcon.addEventListener('click', handleDisplayModal);
formProfile.addEventListener('submit',handleProfileForm);
addButton.addEventListener('click', handleDisplayModalPlace);
closePlace.addEventListener('click',handleDisplayModalPlace);