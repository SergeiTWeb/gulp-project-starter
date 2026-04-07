const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");

// CSS - обработка
const css = () => {
    return src (path.css.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "CSS",
            message: error.message
        }))
    }))
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(dest(path.css.dest));
}

module.exports = css; //Экспорт модуля наружу