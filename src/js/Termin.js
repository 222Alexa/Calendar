export default class Termin {
  constructor(nameDeparture, nameArrival, date) {
    this.nameDeparture = nameDeparture;
    this.nameArrival = nameArrival;
    this.date = date;
  }

  init() {
    this.bindToDOM();
  }

  static template(nameDeparture, nameArrival, date) {
    return `
      <tr class="article-box">
      <td class="article__title">${nameDeparture}</td>
        <td class="article__title">${nameArrival}</td>
        <td class="article__date">${date}</td>
        <td class="button__block">
        <button class="article__del"></button>
        </td>
      </tr>
  `;
  }

  bindToDOM() {
    const listBox = document.querySelector("tbody");

    const termin = this.addTermin(
      this.nameDeparture,
      this.nameArrival,
      this.date
    );

    listBox.insertAdjacentHTML("beforeend", termin);
  }

  addTermin() {
    const departure = document.querySelector(".input__from");
    const arrival = document.querySelector(".input__to");
    const dateTrip = document.querySelector(".input__there-trip");

    this.nameDeparture = departure.value.trim();
    this.nameArrival = arrival.value.trim();
    this.date = dateTrip.value.trim();

    if (this.nameDeparture && this.nameArrival && this.date) {
      const result = this.constructor.template(
        this.nameDeparture,
        this.nameArrival,
        this.date
      );
      return result;
    }

    return false;
  }

  addBackTermin() {
    this.nameDeparture = document.querySelector(".input__to").value.trim();
    this.nameArrival = document.querySelector(".input__from").value.trim();
    this.date = document.querySelector(".input__back-to-date").value.trim();

    if (
      this.nameDeparture !== "" &&
      this.nameArrival !== "" &&
      this.date !== ""
    ) {
      const result = this.constructor.template(
        this.nameDeparture,
        this.nameArrival,
        this.date
      );

      return result;
    }
    return false;
  }

  renderingBackTermin() {
    const listBox = document.querySelector("tbody");

    const termin = this.addBackTermin(
      this.nameDeparture,
      this.nameArrival,
      this.date
    );

    if (!termin) {
      return;
    }

    listBox.insertAdjacentHTML("beforeend", termin);
  }
}
