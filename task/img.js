const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");

// Images - обработка
const img = () => {
    return src (path.img.src, { encoding: false })
    .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "Images",
            message: error.message
        }))
    }))
    .pipe(imagemin(app.imagemin))
    .pipe(dest(path.img.dest));
}

module.exports = img; //Экспорт модуля наружу