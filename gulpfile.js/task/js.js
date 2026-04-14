const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const gulpIf = require("gulp-if");
const uglify = require("gulp-uglify");  // Minifies JS code (optional, production only)
const webpack = require("webpack-stream");

// JavaScript - processing pipeline
const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev })  // Conditional sourcemaps for dev mode
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript",
                message: "Error: <%= error.message %>"
            }))
        }))
        .pipe(babel())  // Transpile ES6+ to browser-compatible JS (config in .babelrc)
        .pipe(webpack(app.webpack))  // Bundle modules with webpack (config in app.js)
        .pipe(gulpIf(app.isProd, uglify()))  // Minify JS code only in production mode
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));  // Save to public/js
}

// Export module
module.exports = js;