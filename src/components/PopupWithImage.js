import Popup from "./Popup.js";
import { modalImg } from "./constants.js";

export class PopupWithImage extends Popup {
  constructor(modalImg){
    super(modalImg)
  }

  open(link, title){
    super.open();
    const modalImg = document.querySelector(".modal__img");
    const modalImgTitle = document.querySelector(".modal__title");

    modalImg.src = link;
    modalImg.alt = `Imagen de ${title}`;
    modalImgTitle.textContent = title;
    super._handleEscClose();
  }

}
export const popupWithImg = new PopupWithImage( modalImg);
popupWithImg.setEventListeners();

// Cerrar cuando das click fuera del contenido
modalImg.addEventListener("click", (event)=>{
  if (event.target.id !== "modal-img") {
    popupWithImg.close();
  }
});