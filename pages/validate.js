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
    modalForm.removeEventListener('submit', handleProfileForm);
    formPlace.removeEventListener('submit', handleAddPlace);
  } else {
    hideInputError(formElement, inputElement);
    modalForm.addEventListener('submit', handleProfileForm);
    formPlace.addEventListener('submit', handleAddPlace);
  }
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