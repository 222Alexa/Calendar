export default class Storage {
  getTermins() {
    return JSON.parse(localStorage.getItem("termins")) || [];
  }

  save(data) {
    localStorage.setItem("termins", JSON.stringify(data));
  }
}
