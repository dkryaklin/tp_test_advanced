# travelpayouts_test_advanced

Demo: <https://dkryaklin.github.io/tp_test_advanced/demo.html>

Advanced версия тестового задания! Были использованы следующие технологии: React, Web Components, Shadow DOM. Так же были протестированы styled components для React, но в последствии были выпилены т.к. были непригодны для данной задачи.

Для запуска проекта необходимо выполнить в командной строке:

```sh
$ npm install
$ npm start
```

Задание было протестировано в следующих браузерах:

* Chrome

В других браузерах в ближайшее время не заработает.

# Код для вставки

1. Добавить скрипт в head

```html
    <script type="text/javascript" src="https://dkryaklin.github.io/tp_test_advanced/static/js/main.js"></script>
```

2. Добавить div с уникальным id в нужное вам место и скрипт инициализации. Туда же сразу передает необходимые параметры:

```html
    <div id="widget_0"></div>
    <script>
        window.travelPayoutsWidgetInit({
            id: 'widget_0',
            backColor: '#ff00ff',
            textColor: '#00ff00',
            buttonColor: '#ff0000'
        });
    </script>
```