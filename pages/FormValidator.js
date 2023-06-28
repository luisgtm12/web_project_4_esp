const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  const errorButton = formElement.querySelector(".form__button-submit");
  errorButton.classList.add("form__button-submit_invalid");
  inputElement.classList.add("form__input-error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  const errorButton = formElement.querySelector(".form__button-submit");
  errorButton.classList.remove("form__button-submit_invalid");
  inputElement.classList.remove("form__input-error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }

  const inputList = Array.from(formElement.querySelectorAll('.form__user-box'));
  let formIsValid = true;
  for (let i = 0; i < inputList.length; i++) {
    const input = inputList[i];
    if (!input.validity.valid) {
      formIsValid = false;
      break;
    }
  }
  const buttonForm = formElement.querySelector(".form__button-submit");
  buttonForm.disabled = !formIsValid;

};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__user-box"));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};

enableValidation();

document.onkeydown = function (evt) {

  if (evt.key === "Escape") {
    modalProfile.classList.remove('modal__opened');
    modalPlace.classList.remove('modal__opened');
  }
};