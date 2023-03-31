const editButton = document.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal__close-icon');
const modalForm = document.querySelector('.form');

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