import { profileName, profileWorkstation } from "../index.js";
class UserInfo {
  constructor(userData){
    this._userData = userData;
    this._userName = this._userData.userName;
    this._userAbout = this._userData.userAbout;
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

export {UserInfo};