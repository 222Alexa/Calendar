import Termin from "../Termin";
import Storage from "../Storage";

test("создание стейта, запись и возврат элемента", () => {
  const storage = new Storage();
  const termin = new Termin("Москва", "Петушки", "2021-12-03");

  storage.save(termin);
  const saveItem = storage.getTermins();

  expect(termin).toEqual(saveItem);
});
