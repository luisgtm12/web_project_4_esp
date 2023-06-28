  
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

  console.log("aki va")
  handleDisplayModal();
};

/* funcion de like */
function handleLike (likeId) {
  document.getElementById(likeId).classList.toggle("black-heart");
};

/* funcion de borrar */
function deletedPlaces (placesId) {
  document.getElementById(placesId).remove();
};

/* funcion de zoom img */
function handleDisplayModalImg (){
  modalImg.classList.toggle("modal__opened")
};
function handleModalImg ( imgSrc, title) {
  
  modalImgSrc.src = imgSrc;
  modalImgTitle.textContent = title;

  handleDisplayModalImg ();
};

/* funcion de modal 2 */
function handleDisplayModalPlace () {
  modalPlace.classList.toggle("modal__opened")
};


/* controlador de modal places */
function handleAddPlace (event) {
  event.preventDefault();
  const cardId = "card-" + places.children.length;
  const likeId = "like-" + places.children.length;
  const cardName = document.querySelector('#place-title').value;
  const cardLink = document.querySelector('#place-link').value;
  const divPlaces = createCardElements(cardId, cardLink, cardName, likeId);
  places.appendChild(divPlaces);
  handleDisplayModalPlace ();
};

editButton.addEventListener('click', handleDisplayModal);
closeIcon.addEventListener('click', handleDisplayModal);
modalForm.addEventListener('submit',handleProfileForm);
formPlace.addEventListener('submit', handleAddPlace);
addButton.addEventListener('click', handleDisplayModalPlace);
closePlace.addEventListener('click',handleDisplayModalPlace);
modalImg.addEventListener('click',handleDisplayModalImg);