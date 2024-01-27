## Приложение GitHub-Surfer
Предназначено для получения информации по пользователях GitHub

После запуска приложения вы увидите форму для поиска пользователей GitHub. Для поиска введите логин пользователя и нажмите кнопку "Поиск". Результаты будут отображены ниже формы поиска.

После этого появится возможность сортировать пользователей по убыванию или возрастанию количества репозиториев на GitHub.

Для получения более подробной информации о пользователе следует кликнуть по соответствующей карточке.
Зайдя на профиль пользователя, можно увидеть количество репозиториев пользователя и кнопку со ссылкой на его аккаунт в GitHub.

Приложение в качестве настройки имеет возможность смены темы оформления.


## Структура файлов (папка src):
# api (папка с файлами):
-- apiGetUsers -модуль для выполнения запроса к API GitHub для получения пользователей$
-- apiGetSortedUsers.js - модуль для выполнения запроса к API GitHub для получения отсортированных пользователей$
-- apiGetUserRepos.js - модуль для выполнения запроса к API GitHub для получения информации о количестве репозиториев у пользователя.


# components (rомпоненты):
- App - корневой компонент;
- BtnMode - компонент кнопки для переключения темы оформления приложения;
- navbar - компонент верхушки сайта;
# global - файлы: с общими стилями CSS, изображение с бэкграундом;
# pages - папки с файлами страниц приложения:
- home - папка главной страницы;
- not-found - папка страницы 404;
- contacts - папка страницы с контактами автора приложения;
- UserSearch - папка компонента для поиска пользователей GitHub;
- UserDetails - папка компонента для поиска информации по конкретному пользователю GitHub;
- loader.gif - изображение загрузчика.

## Зависимости
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) - версия 5.17.0
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) - версия 13.4.0
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) - версия 13.5.0
- [react](https://reactjs.org/) - версия 18.2.0
- [react-dom](https://reactjs.org/docs/react-dom.html) - версия 18.2.0
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) - версия 6.21.3
- [react-scripts](https://www.npmjs.com/package/react-scripts) - версия 5.0.1
- [reat](https://www.npmjs.com/package/reat) - версия 0.0.1-security
- [styled-components](https://styled-components.com/) - версия 6.1.8
- [web-vitals](https://www.npmjs.com/package/web-vitals) - версия 2.1.4
