
export default class UserInfo {
  constructor(userData){
    this._userData = userData;
    this._userName = userData.userName;
    this._userAbout = userData.userAbout;
  }

  getUserInfo(){
    return (this._userData);
  }

  setUserInfo(name, about){
    name.textContent = this._userName;
    about.textContent = this._userAbout;
  }
}

export {UserInfo};