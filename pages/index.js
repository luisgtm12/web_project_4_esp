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







//Nuevo Form







/* iteracion de tarjetas iniciales */

/*function createCardElements (cardId, cardLink, cardName, likeId){
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
});*/



