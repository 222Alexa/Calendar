export default class Modal {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
	  <div class="modal modal-active">
      	<form id="form-container">
      		<button class="modal-close__btn">X</button>
			<h3 class="form__title">Поиск билетов</h3>
			<div class="trip__form-box">
				<div class="input-wrapper from">
					<label for="input__from">Откуда</label>
					<input class="input input__from departure" type="text" placeholder="Откуда">
		
				</div>
				<button class="button__reverse to"></button>
				<div class="input-wrapper to-wrapper">
					<label for="input__to">Куда</label>
					<input class="input input__to arrival" type="text" placeholder="Куда">
			
				</div>
				<div class="detail-wrapper">
					<h4 class="detail__title">Взрослые:</h4>
					<div class="detail-box">
						<button class="count__button">-</button>
						<span class="count__value">1</span>
						<button class="count__button">+</button>
					</div>
				</div>
				<div class="detail-wrapper">
					<h4 class="detail__title">Дети до 10 лет:</h4>
					<div class="detail-box">
						<button class="count__button">-</button>
						<span class="count__value">1</span>
						<button class="count__button">+</button>
					</div>
				</div>
				<div class="detail-wrapper child-count">
					<h4 class="detail__title">Дети до 5 лет:</h4>
					<div class="detail-box">
						<button class="count__button">-</button>
						<span class="count__value">0</span>
						<button class="count__button">+</button>
					</div>
				</div>
				<div class="input-wrapper round-trip">
					<label for="input__round-trip">Туда и обратно</label>
					<input class="input input__round-trip" type="checkbox">
				</div>
				<div class="input-calendar input-wrapper">
					<label for="input__there-trip">Дата</label>
					<input class="input input__there-trip date__trip" name="datapicker" type="date">
				</div>

				<div class="input-wrapper input-calendar input-date-back hidden">
					<label for="input__back-to-date">Обратно</label>
					<input class="input input__back-to-date date__trip" name="datapicker" type="date">
				</div>
				<button class="search__termin">Найти билеты</button>
			</div>
		</form>
	</div>
  `;
  }

  get modalWrapperEl() {
    return this.parentEl.querySelector(".modal");
  }

  get modalButtonEl() {
    return this.parentEl.querySelector(".modal-close__btn");
  }

  redrawModalForm() {
    this.parentEl.insertAdjacentHTML("afterbegin", this.constructor.markup);
    this.modalWrapperEl.classList.add("modal-active");
    this.modalButtonEl.addEventListener("click", () => this.closeModalForm());
  }

  closeModalForm() {
    this.modalWrapperEl.classList.remove("modal-active");
    this.parentEl.querySelector(".modal").remove();
  }
}
