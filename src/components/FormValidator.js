import { buttonSubmit } from "./constants";
class FormValidator {
  constructor(id){
    this.element = document.getElementById(id);
  }

  //Metodos privados
  _checkInputValidity(inputElement){
    const errorElement = this.element.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      buttonSubmit.classList.remove("form__button-submit_invalid");
      inputElement.classList.remove("form__input-error");
      errorElement.classList.remove("form__input-error_active");
      errorElement.textContent = "";
    } else {
      buttonSubmit.classList.add("form__button-submit_invalid");
      inputElement.classList.add("form__input-error");
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add("form__input-error_active");
  
    }
    
    //Validando los inputs
    const inputList = Array.from(this.element.querySelectorAll('.form__user-box'));
    let formIsValid = true;
    for (let i = 0; i < inputList.length; i++) {
      const input = inputList[i];
      if (!input.validity.valid) {
        formIsValid = false;
        break;
      }
    }
    const buttonForm = this.element.querySelector(".form__button-submit");
    buttonForm.disabled = !formIsValid;
  
  };

  _setEventListeners(){
    const self = this;
    const inputList = Array.from(this.element.querySelectorAll(".form__user-box"));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        self._checkInputValidity(inputElement);
      });
    });
  };

  // Metodo publico
  enableValidation(){
    const formButton = this.element.querySelector(".form__button-submit");
    if(formButton){
      formButton.disabled = true;
    }
    this.element.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
  
      this._setEventListeners();
    };
  };


export {FormValidator};