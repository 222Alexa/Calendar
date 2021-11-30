export default class Main {
  constructor(container) {
    this.container = container;
   
  }

  createMain() {
    this.main = document.createElement("div");
    this.main.classList.add("main-wrapper");
    this.bindToDOM();
  }

  static get markup() {
    return `
    <div id="picker-container">
    <h2 class="main__title">Увезу!</h2>
   
	  </div>`;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML("afterbegin", this.constructor.markup);
  }
}
