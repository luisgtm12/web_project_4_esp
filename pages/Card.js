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
class Card {
  constructor(data, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    
    this._element.querySelector(".places-card__image").src = this._link;
    this._element.querySelector(".places-card__image").alt = this._name;
    this._element.querySelector(".places-card__contain_title").textContent = this._name;
    this._element.querySelector(".places-card__image").addEventListener("click",() => handleModalImg(this._link,this._name));
    const cardId = `card-${this._name}`;
    this._element.querySelector(".card").id = cardId;
    const likeId = `like-${this._name}`;
    this._element.querySelector(".places-card__contain_like").id = likeId;
    this._element.querySelector(".places-card__trash").addEventListener("click",() => deletedPlaces(cardId));
    this._element.querySelector(".places-card__contain_like").addEventListener("click",()=> handleLike(likeId));


    return this._element;
  }

  
}
initialCards.forEach((item) => {
  const card = new Card(item,".cards");
  const cardElement = card.generateCard();

  document.querySelector(".places").append(cardElement);
})


