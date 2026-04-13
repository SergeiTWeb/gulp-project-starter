const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const pugs = require("gulp-pug");
const webpHtml = require("gulp-webp-html");

// PUG - обработка
const pug = () => {
    return src (path.pug.src)
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "PUG",
            message: error.message
        }))
    }))
    .pipe(pugs(app.pug))
    .pipe(webpHtml())
    .pipe(dest(path.pug.dest))
}

module.exports = pug; //Экспорт модуля наружу