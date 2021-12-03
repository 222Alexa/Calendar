// import { Datepicker } from "vanillajs-datepicker";
import moment from "moment";
import TerminsList from "./TerminsList";
import Termin from "./Termin";
import Storage from "./Storage";
import Main from "./Main";
import Modal from "./Modal";

moment().format();

export default class Controller {
  constructor(main) {
    this.main = main;
    this.state = [];
  }

  init() {
    this.container = document.querySelector(".container");
    this.main.createMain();
    this.terminList = new TerminsList(this.container);
    this.terminList.bindToDOM();
    // const elem = document.querySelector('input[name="datapicker"]');
    this.addSubscribe(this.container);
    this.storage = new Storage();
    this.state = this.storage.getTermins();
    this.loadState(this.state);
  }

  addSubscribe(element) {
    element.addEventListener("click", this.onClickStart.bind(this));
    element.addEventListener("click", this.onClickSearchTermin.bind(this));
    element.addEventListener("click", this.onClickCheckedRound.bind(this));
    element.addEventListener("click", this.completionField.bind(this));
    element.addEventListener("input", this.completionField.bind(this));
    element.addEventListener("click", this.onClickRemoveTermin.bind(this));
    // element.addEventListener("keyup", this.keyUp.bind(this));
  }

  onClickStart(e) {
    if (!e.target.classList.contains("start__btn")) {
      return;
    }

    e.preventDefault();
    this.modal = new Modal(this.container);

    this.modal.redrawModalForm();

    // const elem = document.querySelector('input[name="datapicker"]');

    // const calendar = new Datepicker(elem, {});
    // this.date = document.querySelector('.datepicker-grid');
    // console.log(calendar.picker);
  }

  loadState(arr) {
    if (arr) {
      arr.forEach((elem) => {
        const termin = new Termin();
        const result = termin.constructor.template(
          elem.nameDeparture,
          elem.nameArrival,
          elem.date
        );

        document.querySelector("tbody").insertAdjacentHTML("beforeend", result);
      });
      const tableBox = document.querySelector(".list-wrapper");
      const tableItems = document.querySelectorAll(".article-box");

      tableItems.length > 0
        ? tableBox.classList.remove("hidden")
        : tableBox.classList.add("hidden");
    }
  }

  saveCard(value) {
    this.state.push(value);
    this.storage.save(this.state);
  }

  removeItem(arr, value) {
    // по-хорошему надо сделать сравнение значений elem
    // со всеми значениями в блоке parent
    // или добавить в класс Termin id и удалять по нему
    const item = arr.findIndex((elem) => elem.nameDeparture === value);

    this.state.splice(item, 1);
    this.storage.save(this.state);
  }

  renderingTermin(departure, arrival, date) {
    // добавление разметки карточки
    const termin = new Termin();
    termin.init();

    return termin;
  }

  renderingReverceTermin() {
    // добавление разметки карточки
    const termin = new Termin();
    termin.renderingBackTermin();

    return termin;
  }

  onClickSearchTermin(e) {
    // добавление билетов в список
    if (!e.target.classList.contains("search__termin")) {
      return;
    }

    e.preventDefault();
    this.departure = document.querySelector(".input__from");
    this.arrival = document.querySelector(".input__to");
    this.dateThere = document.querySelector(".input__there-trip");
    this.dateBack = document.querySelector(".input__back-to-date");

    this.validityFields(this.departure);
    this.validityFields(this.arrival);
    this.validityFields(this.dateThere);

    if (document.querySelector(".input__round-trip").checked) {
      this.validityFields(this.dateBack);
    }
    if (!document.querySelector(".tooltip-active")) {
      document.querySelector(".list-wrapper").classList.remove("hidden");

      const saveTermin = this.renderingTermin();
      const saveBackTermin = this.renderingReverceTermin();
      this.modal.closeModalForm();
      this.saveCard(saveTermin);
      if (this.dateBack.value !== "") this.saveCard(saveBackTermin);
    }
  }

  onClickRemoveTermin(e) {
    if (!e.target.classList.contains("article__del")) {
      return;
    }
    const parent = e.target.closest(".article-box");
    const value = parent.firstElementChild.textContent;

    parent.remove();
    this.removeItem(this.state, value);
    if (!document.querySelector(".article-box")) {
      document.querySelector(".list-wrapper").classList.add("hidden");
      // document.querySelector(".list__title").classList.add("hidden");
    }
  }

  onClickCheckedRound(e) {
    // здесь обработчик вообще нужен?
    if (!e.target.classList.contains("input__round-trip")) {
      return;
    }
    const round = document.querySelector(".input__round-trip");
    const tripBack = document.querySelector(".input-date-back");
    round.checked === true
      ? tripBack.classList.remove("hidden")
      : tripBack.classList.add("hidden");
  }

  validityFields(field) {
    // проверка соответствия шаблону, добавление подсказки

    const templateTooltip = document.createElement("span");
    templateTooltip.textContent = "*Вы пропустили обязательное поле";
    templateTooltip.classList.add("tooltip-active");

    if (
      field.parentElement.nextElementSibling.classList.contains(
        "tooltip-active"
      )
    ) {
      return;
    }

    if (field.value === "") {
      field.parentElement.insertAdjacentElement("afterend", templateTooltip);
      templateTooltip.textContent = "Заполните поле";
      return false;
    }

    if (field.classList.contains("input__back-to-date")) {
      const diff = moment(this.dateThere.value).isBefore(this.dateBack.value);

      if (diff === false) {
        field.parentElement.insertAdjacentElement("afterend", templateTooltip);
        templateTooltip.textContent =
          "Вы не можете вернуться раньше, чем уедете";
      }

      return false;
    }
    return true;
  }

  completionField(e) {
    // заполнеие полей и удаление подсказок пр этом
    if (!e.target.classList.contains("input")) {
      return;
    }

    if (
      e.target.parentElement.nextElementSibling.classList.contains(
        "tooltip-active"
      )
    ) {
      e.target.parentElement.nextElementSibling.remove();
    }
    if (e.target.classList.contains("date__trip")) {
      e.target.setAttribute("min", moment().format("YYYY-MM-DD"));
      const start = e.target.value;
    }
  }

  /* keyUp(e){
    if (e.target.classList.contains("input")) {
      //надо пофиксить
    
    console.log(e.target)
    this.validityFields(e.target);
    }
  } */
}
