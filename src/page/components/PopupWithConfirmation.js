import Popup from "./Popup.js";
import { modalConfirmation, btnConfirmation } from "./constants.js";
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