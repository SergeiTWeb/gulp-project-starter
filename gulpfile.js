// Подключаем предустановленный пакет Gulp
const { src, dest, watch, series, parallel  } = require('gulp');
const browserSync = require("browser-sync").create();

//Plugins
const del = require("del").default;
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size").default;
const pugs = require("gulp-pug");

// HTML - обработка
const html = () => {
    return src ("src/html/*.html") // Создаем файловый поток чтения для дальнейшей передачи * - выбирает все файлы в папке
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            message: error.message
        })) // Выводит сообщения об ошибках (additional plugin gulp-notify)

    })) // Этот плагин перехватывает все ошибки цепочки
    .pipe(fileInclude()) // Вызываем подключнный плагин перед записью в директорию public
    .pipe(size({title: "before"}))
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(size({title: "after"}))
    .pipe(dest("public"))
    .pipe(browserSync.stream());
}

// ====================================================================
// PUG - обработка
const pug = () => {
    return src ("src/pug/*.pug")
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "PUG",
            message: error.message
        }))
    }))
    .pipe(pugs({
        pretty: true,
        data: {
             news: require('./data/news.json')
        }
    }))
    .pipe(dest("public"))
    .pipe(browserSync.stream());
}

//Удаление лиректории public для чистки ненужны файлов в процессе сборки
// Вместо обычного require используем асинхронный импорт:
const clear = async () => {
    const { deleteAsync } = await import("del");
    return deleteAsync("public");
}

//Server 
const server = () => {
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });
}

// Watcher
const watcher = () => {
    // watch("src/html/**/*.html", html); // наблюдение HTML
    watch("src/pug/**/*.pug", pug); // Наблюдение PUG
}

//Задачи (экспорт наружу)
//exports.html = html; // == ОБЕ ЗАДАЧИ html vs PUG формируют файлы HTML и НЕ должны запускать в одной сборке (или/или)
exports.pug = pug;
exports.watch = watcher;
exports.clear = clear;

//Сборка
exports.dev = series(
    clear,
    html,
    parallel(watcher, server)
);