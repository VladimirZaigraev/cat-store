<h1 align="center">Ответы на вопросы к тестовму заданию</h1>

<h3>Q1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения</h3>

- пользователя;

Хорошая верстка для пользователя – это при взаимодействии с сайтом не отмечать для себя проблем. Комфортное использование на всех разрешениях, кликабельность кнопок и ссылок, логичное поведение элементов при взаимодействии с ними и тд.

- менеджера проекта;

  Что бы верстка соответствовала ТЗ, имела определенный уровень качества, и была выполнена в поставленный срок.

- дизайнера;

  Соответствие макету(размеры шрифтов, отступы, межстрочные интервалы, сетку, цвета, тени и тд) и логике поведения.

- верстальщика;

  Верстка должна соответствовать стандартам валидности, семантически верной, адаптивной и кроссбраузерной. Так же необходимо учитывать возможность изменения объема контента, как небольших блоков так и в целом страницы.

- клиентского программиста;

  Чистота кода, и удобство использования. Как пример использование определенной методологии при названии классов – БЭМ. Корректная структура проекта, с распределением по соответствующим папкам.

- серверного программиста.

  Минимальное использование внешних ресурсов (например используемые библиотеки/плагины и шрифты загружены в проект а не подключаются ссылками). Используемые изображения оптимизированы.

<h3>Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.</h3>

- Необходимо разделить всю страницу на компоненты. И описывать стили исходя из логики БЭМ. Это позволяет не только легко изменять стили, но и в дальнейшем переиспользовать компоненты.

- Нельзя привязывать стили к тегам и каскаду, так как внесение изменений потребует гораздо большее время, чем простое изменение классов.

<h3>Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.</h3>

- БЭМ, Sass, Webpack(преднастроенный для React). Основываясь на методологии БЭМ, и принципах React, можно эффективно разделить сайт на компоненты, и переиспользовать их не плодя лишний код. А использование препроцессора позволяет ускорить написание стилей .

<h3>Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.</h3>

- Использование медиа-запросов под разные дисплеи с подгрузкой соответствующих изображений, в зависимости от плотностей пикселей. И не менее важно проверять адекватность работы интерактивных элементов, и их расположение и размер на мобильных версиях. Неоднократно встречал слишком маленькие кнопки слайдеров и закрытия попапов.

В моих последних работах не стояла задача по поддержке особенного вида устройств(кроме адаптива)

<h3>Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.</h3>

- VSCode, в котором есть большое количество плагинов, упрощающих разработку.
- Eslint/Prettier для оперативного устранения ошибок и вычищения кода.
- https://validator.w3.org/ для проверки валидности html. (У меня есть плагин но все же больше нравится использовать именно сам ресурс)
- SASS – позволяет структурировать код, ускорить написание благодаря миксинам и переменным.
- DevTools – огромное количество возможностей для отладки, от работы со стилями для верстки по PixelPerfect, до работы с local Storage и проверки api запросов.

<h3>Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?</h3>

- Открою DevTools, и буду разбираться, в чем проблема. Вероятнее всего выявится в отсутствии поддержки тех или CSS свойств. А уровень использования всегда можно проверить на caniuse.com .

<h3>Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?</h3>

- Свяжусь с дизайнером, и обсужу данный вопрос. Если по каким-то, не зависящим от меня, обстоятельствам, это не возможно – реализую сам.

<h3>Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее).</h3>

- Habr - очень много полезны статей от ведущих специалистов в индустрии
- Дока, Learn JS, MDN, HTML5book - мои шпаргалки)
- stackoverflow – ну как же без него)
  И большое количество tg каналов по frontend и web дизайну.
<h3>Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или что-то ещё?</h3>
- Не могу сказать, что мне, что то нравится больше или меньше). Наиболее подходящим для меня является процесс, где я сам верстаю, а после чего и выстраиваю js логику.
<h3>Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?</h3>
- Прежде всего UI/UX. Хочется глубже понимать не только как, создавать сложные и красивые интерфейсы, но и как дизайн влияет на эффективность представления контента.

<h3>Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.</h3>

Меня зовут Владимир Заиграев, я начинающий front-end разработчик.
Я закончил курс Web-разработки в Яндекс.Практикуме, где изучал верстку, JS, React, Node.js (Express)
Разработка заинтересовала меня, когда я принимал участие в проектировке и внедрении внутренней srm. Позже я начал изучать разные направления разработки. Но ничего меня так не зацепило как разработка интерфейсов.

##### Мой личный проект:

Поиск авиабилетов
Сервис для подбора авиабилетов. Реализован поиск, фильтрация и сортировка авиабилетов. Данные по авиабилетам формируются из JSON файла.
Дизайн и функционал разработан мной с самостоятельно.

Стек: HTML5 , SASS ,JS, React

Ссылка на git:[https://github.com/VladimirZaigraev/FlightSearch](https://github.com/VladimirZaigraev/FlightSearch)

##### Дипломный проект:

Многостраничное приложение для поиска фильмов, с возможностью добавления в избранное и фильтрацией. Реализован функционал регистрации, авторизации, редактирования профиля.

Стек: HTML5 , SASS ,JS, React, Node.js(Express.js.),MongoDB

Ссылка на git:[https://github.com/VladimirZaigraev/movies-explorer-full](https://github.com/VladimirZaigraev/movies-explorer-full)

Ссылка на сайт:[https://zaigraev.movie.nomoredomains.work](https://zaigraev.movie.nomoredomains.work)

#### Тестовое задание

Ссылка на gh-pages :[https://vladimirzaigraev.github.io/cat-store/](https://vladimirzaigraev.github.io/cat-store/)
