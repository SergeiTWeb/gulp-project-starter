const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2"); // v3.0.0 for CommonJS compatibility

// Fonts - processing pipeline
const font = () => {
    return src(path.font.src, { encoding: false, allowEmpty: true }) // encoding: false for binary font files
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Fonts",
                message: "Error: <%= error.message %>"
            }))
        }))
        .pipe(newer(path.font.dest))              // Process only newer files
        .pipe(fonter(app.fonter))                 // Convert TTF/OTF → WOFF + generate CSS @font-face
        .pipe(dest(path.font.dest))               // Save WOFF files and fonts.css
        // Re-read source files for WOFF2 conversion (ttf2woff2 only accepts TTF)
        .pipe(src(path.font.src, { encoding: false, allowEmpty: true }))
        .pipe(newer(path.font.dest))              // Process only newer files
        .pipe(ttf2woff2())                        // Convert TTF → WOFF2 (modern format)
        .pipe(dest(path.font.dest));              // Save WOFF2 files
}

// Export module
module.exports = font;