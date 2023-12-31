Выпадающий список 
===

Разработан функциональный компонент выпадающего списка Dropdown:
![Внешний вид компонента](./src/img/dropdown.png)

Структура компонентов:

- Dropdown — содержит кнопку и DropdownList, внутри себя хранит состояние, показывать или нет выпадающий список;
- DropdownList — содержит список DropdownItem и хранит информацию о текущем выбранном элементе.

Описание:
- при клике на кнопку показывается и скрывается выпадающее меню;
- отрисовывается список на базе массива, хранящегося в памяти, через map;
- выбранный элемент в списке подсвечивается;

## Установка и запуск приложения на локальной машине:
1. `git clone https://github.com/IrinaSakhno/events-and-status.git` - клонировать репозиторий на свое устройство
2. `cd drop-down` - перейти в папку drop-down
3. `npm i` - установить зависимости
4. `npm run start` - запустить приложение в режиме разработчика

После этого приложение можно будет открыть по ссылке  [http://localhost:3000](http://localhost:3000) в Вашем браузере.