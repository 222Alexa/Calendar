import TerminsList from "../TerminsList";

const parentEl = document.createElement("div");
const terminList = new TerminsList(parentEl);
terminList.bindToDOM();

test("bindToDOM() подключает разметку в DOM", () => {
  expect(parentEl.innerHTML).toEqual(terminList.constructor.markup);
});
