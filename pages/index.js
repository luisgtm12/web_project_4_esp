const editButton = document.querySelector('.profile__edit-button');
const modal = document.querySelector('#modal1');
const closeIcon = document.querySelector('#close-icon1');
const modalForm = document.querySelector('#submit-button1');

function handleDisplayModal () {
  modal.classList.toggle("modal__opened");
}

function handleProfileForm (event) {
  event.preventDefault();

  const name = document.querySelector('#user-name').value;
  const about = document.querySelector('#user-about').value;

  const profileName = document.querySelector('.profile__content_name');
  const profileWorkstation = document.querySelector('.profile__content_workstation');

  profileName.innerHTML = name;
  profileWorkstation.innerHTML = about;

  handleDisplayModal();
}

editButton.addEventListener('click', handleDisplayModal);
closeIcon.addEventListener('click', handleDisplayModal);
modalForm.addEventListener('submit', handleProfileForm);
console.log(handleProfileForm);

//Nuevo Form
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


const modalPlace = document.querySelector('#modal2');
const closePlace = document.querySelector('#close-icon2');
const formPlace = document.querySelector('#submit-button2');
const places = document.getElementById('places');
const modalImg = document.querySelector('#modal-img');
const modalImgSrc = document.querySelector('#modal-img-src');
const modalImgTitle = document.querySelector('#modal-img-tittle')


const placesId = "card-" + places.children.length.toString();
const likeId = "like-" + places.children.length.toString();

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
  handleDisplayModalImg();
  modalImgSrc.src = imgSrc;
  modalImgTitle.innerHTML = title;

  handleDisplayModalImg ();
}

/* iteracion de tarjetas iniciales */
for (let i= 0; i < initialCards.length; i++){
  const cardName = initialCards[i].name;
  const cardLink = initialCards[i].link;
    
  const placesHTML =`<div class="places-card" id="${placesId}">
  <img src="./images/trash-icon.png"
    class="places-card__trash" 
    alt="Bote de basura" 
    onclick="deletedPlaces('${placesId}')">

  <img src="${cardLink}" alt="${cardName}" class="places-card__image"
  onclick="handleModalImg('${cardLink}','${cardName}')">
  <div class="places-card__contain">
    <h4 class="places-card__contain_title">${cardName}</h4>

    <img id="${likeId}"
    src="./images/corazon.png"
    alt="icono de corazon"
    class="places-card__contain_like"
    onclick="handleLike('${likeId}')">

  </div>
</div>`;
  places.innerHTML+=placesHTML
};


/* funcion de modal 2 */
function handleDisplayModalPlace () {
  modalPlace.classList.toggle("modal__opened")
};

const addButton = document.querySelector('.profile__add-button');

/* controlador de modal places */
function handleAddPlace (event) {
  event.preventDefault();

  const cardTitle = document.querySelector('#place-title').value;
  const cardLink = document.querySelector('#place-link').value;
    
  const placesHTML=`<div class="places-card" id="${placesId}">
  <img src="./images/trash-icon.png"
  class="places-card__trash"
  alt="Bote de basura"
  onclick="deletedPlaces('${placesId}')">
  <img src="${cardLink}" alt="${cardTitle}" class="places-card__image"
  onclick="handleModalImg('${cardLink}','${cardName}')">
  <div class="places-card__contain">
    <h4 class="places-card__contain_title">${cardTitle}</h4>

    <img id="${likeId}"
    src="./images/corazon.png"
    alt="icono de corazon"
    class="places-card__contain_like"
    onclick="handleLike('${likeId}')">

  </div>
  </div>`;
  
  places.innerHTML+= placesHTML;
  handleDisplayModalPlace ();
};


console.log(handleAddPlace);
formPlace.addEventListener('submit', handleAddPlace);
addButton.addEventListener('click', handleDisplayModalPlace);
closePlace.addEventListener('click',handleDisplayModalPlace);
modalImg.addEventListener('click',handleDisplayModalImg);