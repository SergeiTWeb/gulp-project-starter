// Подключаем предустановленный пакет Gulp
const { watch, series, parallel } = require('gulp');
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");

// Tasks
const clear = require("./task/clear.js");
const pug = require("./task/pug.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");

// Server 
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// Watcher
const watcher = () => {
    // watch("src/html/**/*.html", html); // наблюдение HTML
    watch(path.pug.watch, pug).on("all", browserSync.reload); // Наблюдение + browser sync (with PUG)
    watch(path.scss.watch, scss).on("all", browserSync.reload);
    watch(path.js.watch, js).on("all", browserSync.reload);
    watch(path.img.watch, img).on("all", browserSync.reload);
}

// Задачи (экспорт наружу)
// exports.html = html; // == ОБЕ ЗАДАЧИ html vs PUG формируют файлы HTML и НЕ должны запускать в одной сборке (или/или)
exports.pug = pug;
exports.scss = scss;
exports.watch = watcher;
exports.clear = clear;
exports.js = js;
exports.img = img;

// Сборка
exports.dev = series(
    clear,
    parallel(pug, scss, js, img),
    parallel(watcher, server)
);