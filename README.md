# Vue example boilerplate

Это простенький шаблон для начала работы, чтобы не искать по разным проектам типовые вещи. Для чего-то маленького и простого он вполне подойдет. Для чего-то более серьезного, я советую подключить [quasar](https://quasar.dev/) или [tailwindcss](https://v2.tailwindcss.com/docs/guides/vue-3-vite), или что-то подобное. Даже используя данные framework-и я всё равно беру настройки для route, и типовые хуки.

Для начала работы нужно установить все зависимости, для этого наберите в консоли:

```sh
npm install
```

Для запуска проекта в режиме разработки нужно набрать в консоли:

```sh
npm run dev
```

Как правило, backend не поспевает за frontend-ом, поэтому скорее всего придется запустить еще и сервер на node.js, для этого нужно набрать в консоли:

```sh
npm run server
```

Локальный сервер (backend) поднимается на "http://localhost:8000/", локальнуя сборку можно посмотреть по адресу "http://localhost:8080/".

Для того, чтобы посмотреть что происходит при загрузке проекта, я для каждого запроса делаю задержку в 2 секунды. Как правило этого хватает, чтобы посмотреть что и как. Естественно API для запросов нужно уточнить у программиста, и самому его написать. Чтобы зайти в проект, нужно набрать в форме ригистрации login "max" и пароль "11aaAA#". Можно перейти на форму зарегистрироваться и пройти процесс регистрации.

В данном шаблоне:

- я обрабатываю 401 ошибку (разлогинюсь и кидаю на форму авторизации);
- прокручиваю вверх страницы, при переходе между страницами;
- меняю заголовок документа, при переходе между страницами.

Здесь реализованы типовые компоненты: чекбоксы, радиокнопки, текстовые инпуты. Показан пример простенькой валидации.

В качестве сборщика я использую vite. Раньше я пользовался webpack, но сейчас на мой взгляд это не актуально, vite быстрее и делает по сути тоже самое. Для production сборки нужно набрать в консоли:

```sh
npm run build
```

Локальные переменные для проекта хранятся в файлах ".env.local-dev" (локальная сборка), ".env.prod" (production сборка).