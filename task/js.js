const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
//const uglify = require("gulp-uglify"); // Сжимает код JS
const webpack = require("webpack-stream");

// JavaScript - обработка
const js = () => {
    return src (path.js.src, { sourcemaps: true })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "JavaScript",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(webpack(app.webpack))
    //.pipe(uglify()) // Сжимает код JS
    .pipe(dest(path.js.dest, { sourcemaps: true }));
}

module.exports = js; //Экспорт модуля наружу