import Popup from "./Popup.js";
export default class PopupWithConfirmation extends Popup {
  constructor(modalConfirmation){
    super(modalConfirmation)

  }
  setEventListeners(){
    super.setEventListeners();
  }
  open(){
    super.open();
  }
  close(){
    super.close();
  }

}