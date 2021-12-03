import Termin from "../Termin";

test("создание termin", () => {
  const termin = new Termin("Москва", "Петушки", "2021-12-03");
  const result = {
    nameDeparture: "Москва",
    nameArrival: "Петушки",
    date: "2021-12-03",
  };
  expect(termin).toEqual(result);
});
