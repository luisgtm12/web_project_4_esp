class FormValidator {
  constructor(id){
    this.element = document.getElementById(id);
  }

  //Metodos privados
  _checkInputValidity(inputElement){
    console.log(inputElement.validationMessage)
    const errorElement = this.element.querySelector(`.${inputElement.id}-error`);
    if (inputElement.validity.valid) {
      errorButton.classList.remove("form__button-submit_invalid");
      inputElement.classList.remove("form__input-error");
      errorElement.classList.remove("form__input-error_active");
      errorElement.textContent = "";
    } else {
      errorButton.classList.add("form__button-submit_invalid");
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
    this.element.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
  
      this._setEventListeners();
    };
  };

document.onkeydown = function (evt) {

  if (evt.key === "Escape") {
    modalProfile.classList.remove('modal__opened');
    modalPlace.classList.remove('modal__opened');
  }
};

//Instanciando cada Formulario
const formProfileValidator = new FormValidator("form-profile");
const formPlaceValidator = new FormValidator("form-place");

// Ejecutando el metodo `enableValidation` en ambas clases
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();