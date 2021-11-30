import calendar  from "./Calendar";
import Storage from "./Storage";
import Main from "./Main";
import {Datepicker} from "vanillajs-datepicker/Datepicker";




export default class Controller {
  constructor(main) {
    this.main = main;
    this.state = [];
  }

  init() {
    //this.container = document.querySelector("#form-container");
    this.main.createMain();
    
    const elem = document.querySelector('.input[name="foo"]');
    const calendar = new Datepicker(elem);
    //const elem = document.querySelector('.picker-container');
  //const calendar = new Datepicker(elem, {});
 // console.log(calendar)
console.log(calendar)
   // this.addSubscribe(this.container);

    this.storage = new Storage();
    //this.state = this.storage.getPinCards();
    //this.loadState(this.state);
  }

  /*addSubscribe(element) {
    element.addEventListener("click", this.onClickAddCard.bind(this));
    element.addEventListener("click", this.onClickDeleteCard.bind(this));
    element.addEventListener("keyup", this.keyUp.bind(this));
    element.addEventListener("click", this.completionField.bind(this));
    element.addEventListener("input", this.completionField.bind(this));
    element.addEventListener("mouseover", (e) => this.preview(e));
    element.addEventListener("mouseout", (e) => this.cancelPreview(e));

  }*/


}

//сделать запрет на создание одинаковых картинок с одинаковым названием
// https://im0-tub-ru.yandex.net/i?id=da14fffcba65dd34ce86e3ff6445634d-l&ref=rim&n=13&w=640&h=640
