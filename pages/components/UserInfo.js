import { profileName, profileWorkstation } from "../index.js";
class UserInfo {
  constructor({nameSelector, aboutSelector}){
    this._userName = document.querySelector(nameSelector);
    this._userAbout = document.querySelector(aboutSelector);
  }

  getUserInfo(){
    this._userName.value = userName.textContent;
    this._userAboutMe.value = userAbout.textContent;
  }

  setUserInfo(){
    profileName.textContent = this._userName.value;
    profileWorkstation.textContent = this._userAbout.value;
  }
}