Портфолио с фильтрами
===

Разработан компонент класса Portfolio, хранящий список фильтров, активный фильтр, а также список проектов.

![Внешний вид компонента](./src/img/portfolio-all.png)

Сами фильтры отображаются в компоненте без состояния Toolbar, которому от Portfolio передаются три свойства:

- filters — список фильтров, название которых совпадает с категориями проектов;
- selected — активный фильтр;
- onSelectFilter — обработчик события, который реагирует на выбор пользователем одного из фильтров.

![Внешний вид компонента (с использованием фильтра)](./src/img/portfolio-cards.png)

## Установка и запуск приложения на локальной машине:
1. `git clone https://github.com/IrinaSakhno/events-and-status.git` - клонировать репозиторий на свое устройство
2. `cd portfolio` - перейти в папку portfolio
3. `npm i` - установить зависимости
4. `npm run start` - запустить приложение в режиме разработчика

После этого приложение можно будет открыть по ссылке  [http://localhost:3000](http://localhost:3000) в Вашем браузере.