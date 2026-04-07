// Подключаем предустановленный пакет Gulp
const { watch, series, parallel } = require('gulp');
const browserSync = require("browser-sync").create();

// Конфигурация
const path = require("./config/path.js");

// Tasks
const clear = require("./task/clear.js");
const pug = require("./task/pug.js");

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
}

// Задачи (экспорт наружу)
// exports.html = html; // == ОБЕ ЗАДАЧИ html vs PUG формируют файлы HTML и НЕ должны запускать в одной сборке (или/или)
exports.pug = pug;
exports.watch = watcher;
exports.clear = clear;

// Сборка
exports.dev = series(
    clear,
    pug,
    parallel(watcher, server)
);