import Controller from "./Controller";
import Main from "./Main";

const container = document.querySelector(".container");
const main = new Main(container);

const controller = new Controller(main);
controller.init();
