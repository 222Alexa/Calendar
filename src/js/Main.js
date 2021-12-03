export default class Main {
  constructor(container) {
    this.container = container;
  }

  createMain() {
    this.bindToDOM();
  }

  static get markup() {
    return `
    <div id="picker-container">
    <h2 class="main__title">Увезу!</h2>
    <button class="start__btn">Поехали!</button>
   
	  </div>`;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML("afterbegin", this.constructor.markup);
  }
}
