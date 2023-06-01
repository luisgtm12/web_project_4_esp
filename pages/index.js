const editButton = document.querySelector('.profile__edit-button');
const modalProfile = document.querySelector('#modal-profile');
const closeIcon = document.querySelector('#close-icon-profile');
const modalForm = document.querySelector('#form-profile');
const modalPlace = document.querySelector('#modal-place');
const closePlace = document.querySelector('#close-icon-place');
const formPlace = document.querySelector('#form-place');
const places = document.getElementById('places');
const modalImg = document.querySelector('#modal-img');
const modalImgSrc = document.querySelector('#modal-img-src');
const modalImgTitle = document.querySelector('#modal-img-title');
const addButton = document.querySelector('.profile__add-button');
const initialCards = [
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

editButton.addEventListener('click', handleDisplayModal);
closeIcon.addEventListener('click', handleDisplayModal);
modalForm.addEventListener('submit', handleProfileForm);
console.log(handleProfileForm);

//Nuevo Form


console.log(places);

/* funcion de borrar */
function deletedPlaces (placesId) {
  document.getElementById(placesId).remove();
};

/* funcion de like */
function handleLike (likeId) {
  document.getElementById(likeId).classList.toggle("black-heart");
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

/* iteracion de tarjetas iniciales */

function createCardElements (cardId, cardLink, cardName, likeId){
  const divPlaces = document.createElement("div");
  divPlaces.classList.add("places-card");
  divPlaces.id = cardId;

  const deletedButton = document.createElement("img");
  deletedButton.src = "./images/trash-icon.png";
  deletedButton.classList.add("places-card__trash");
  deletedButton.addEventListener("click", () => deletedPlaces(cardId));
  divPlaces.appendChild(deletedButton);

  const cardImg = document.createElement("img");
  cardImg.src = cardLink;
  cardImg.alt = `Photo ${cardName}`;
  cardImg.classList.add("places-card__image");
  cardImg.addEventListener("click", () => handleModalImg(cardLink, cardName));
  divPlaces.append(cardImg);

  const divCardContain = document.createElement("div");
  divCardContain.classList.add("places-card__contain");

  const cardParagraph = document.createElement("p");
  cardParagraph.classList.add("places-card__contain_title");
  cardParagraph.textContent = cardName;
  
  const imgLike = document.createElement("img");
  imgLike.id = likeId;
  imgLike.src = "./images/corazon.png";
  imgLike.alt = "icono de corazon";
  imgLike.classList.add("places-card__contain_like");
  imgLike.addEventListener("click", () => handleLike(likeId));

  divCardContain.appendChild(cardParagraph);
  divCardContain.appendChild(imgLike);

  divPlaces.appendChild(divCardContain);

  return divPlaces;
};
initialCards.forEach((card,index)=>{
  const cardName = card.name;
  const cardLink = card.link;
  const cardId = "card-" + index;
  const likeId = "like-" + index;

  const divPlaces = createCardElements(cardId, cardLink, cardName, likeId);

  places.appendChild(divPlaces);
});


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

console.log(handleAddPlace);
formPlace.addEventListener('submit', handleAddPlace);
addButton.addEventListener('click', handleDisplayModalPlace);
closePlace.addEventListener('click',handleDisplayModalPlace);
modalImg.addEventListener('click',handleDisplayModalImg);