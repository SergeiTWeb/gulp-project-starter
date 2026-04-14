const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const webp = require("gulp-webp").default;
const gulpIf = require("gulp-if");

// Images - processing pipeline
const img = () => {
    return src(path.img.src, { encoding: false, allowEmpty: true })  // ← allowEmpty предотвращает ошибку, если картинок нет
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Images",
                message: error.message
            }))
        }))
        .pipe(newer(path.img.dest))  // Process only newer/changed files (faster builds)
        .pipe(webp())                // Convert PNG/JPG to WebP format (modern, smaller size)
        .pipe(dest(path.img.dest))   // Сохраняем WebP
        .pipe(src(path.img.src, { encoding: false, allowEmpty: true })) // Re-read source files for original format optimization
        .pipe(newer(path.img.dest))
        .pipe(gulpIf(app.isProd, imagemin(app.imagemin))) // Compress originals (JPG/PNG) only in production mode
        .pipe(dest(path.img.dest));   // Save optimized originals to public/img
}

module.exports = img;