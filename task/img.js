const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp").default;

// Images - обработка
const img = () => {
    return src(path.img.src, { encoding: false, allowEmpty: true })  // ← allowEmpty предотвращает ошибку, если картинок нет
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Images",
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))  // Пропускаем только новые/изменённые
        .pipe(webp())                // Конвертируем в WebP
        .pipe(dest(path.img.dest))   // Сохраняем WebP
        .pipe(src(path.img.src, { encoding: false, allowEmpty: true })) // ← Читаем ОРИГИНАЛЫ снова для сжатия
        .pipe(newer(path.img.dest))
        .pipe(imagemin(app.imagemin)) // Сжимаем оригиналы (jpg, png и т.д.)
        .pipe(dest(path.img.dest));   // Сохраняем сжатые оригиналы
}

module.exports = img;