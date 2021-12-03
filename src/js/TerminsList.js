export default class TerminsList {
  constructor(container) {
    this.container = container;
  }

  static get markup() {
    return `

        <div class="list-wrapper hidden">
            <h2 class="list__title">Ваши билеты</h2>

            <table class="table-termins">
                <caption></caption>
                <thead>
                    <tr>
                    <th class="theader">Откуда</th>
                    <th class="theader">Куда</th>
                    <th class="theader">Дата</th>
                    <th class="theader">Действия</th>
                    </tr>
                </thead>
                <tbody></tbody>
             </table>
        </div>
  `;
  }

  bindToDOM() {
    this.container.insertAdjacentHTML("beforeend", this.constructor.markup);
  }
}
