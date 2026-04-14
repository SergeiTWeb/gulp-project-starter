const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size").default;
const webpHtml = require("gulp-webp-html");

// HTML - обработка
const html = () => {
    return src (path.html.src) // Создаем файловый поток чтения для дальнейшей передачи * - выбирает все файлы в папке
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        })) // Выводит сообщения об ошибках (additional plugin gulp-notify)

    })) // Этот плагин перехватывает все ошибки цепочки
    .pipe(fileInclude()) // Вызываем подключнный плагин перед записью в директорию public
    .pipe(size({title: "before"}))
    .pipe(webpHtml())
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({title: "after"}))
    .pipe(dest(path.html.dest))
}

module.exports = html;