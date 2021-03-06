# Calendar

Правила сдачи задания:
1. **Важно**: в рамках этого ДЗ вы можете использовать любой пакетный менеджер
2. Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через Appveyor.
3. В README.md должен быть размещён бейджик сборки и ссылка на Github Pages
4. В качестве результата присылайте проверяющему ссылки на ваши GitHub-проекты.

---


### Trip Calendar (задача  со звёздочкой)

Важно: данная задача не является обязательной

#### Легенда

Вы делаете сервис для путешествий и вам необходимо реализовать виджет выбора дат: туда и (если установлена галочка туда-обратно) обратно.

Аналог вы можете посмотреть на сайте РЖД и любых авиакомпаний:

![](https://github.com/222Alexa/ahj-homeworks/raw/master/forms/pic/trip.png)

![](https://github.com/222Alexa/ahj-homeworks/raw/master/forms/pic/trip-2.png)

#### Описание

Вам нужно реализовать только переключатель туда-обратно и виджеты ввода дат/выбора их из календаря, в соответствии со следующими условиями:

1. Дата "туда" должна быть не раньше, чем сегодняшняя дата (по времени браузера)
1. Сегодняшняя дата должна быть выделена
1. Даты до сегодняшней должны быть не активны
1. Должно быть реализовано переключение месяца (без анимации, просто пересчёт дат)
1. Дата "обратно" не может быть ранее даты "туда"

Для расчёта дат воспользуйтесь библиотекой `moment js` (обязательное условие). Установите и подключите её через npm/yarn.

Не забудьте написать авто-тесты, разделив логику и взаимодействие с DOM. Для тестирования взаимодействия с DOM пользуйтесь JSDOM или Puppeteer.

---

[![Build status](https://ci.appveyor.com/api/projects/status/7p26t5ibi6uqmwd1/branch/main?svg=true)](https://ci.appveyor.com/project/222Alexa44925/calendar/branch/main)