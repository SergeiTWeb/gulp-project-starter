// GLOBALS
global.$ = {
    gulp: require('gulp'),
    gp: require("gulp-load-plugins")(),
    browserSync: require("browser-sync").create(),
    path: require("./config/path.js"),
    app: require("./config/app.js")
}

// Tasks
const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

// Server - определение функции
const server = () => {
    $.browserSync.init({
        server: {
            baseDir: $.path.root
        },
        notify: false,
        port: 3000
    });
}

// Watcher
const watcher = () => {
    $.gulp.watch($.path.pug.watch, task.pug);
    $.gulp.watch($.path.scss.watch, task.scss);
    $.gulp.watch($.path.js.watch, task.js);
    $.gulp.watch($.path.img.watch, task.img);
    $.gulp.watch($.path.font.watch, task.font);
}

// Build & Dev
const build = $.gulp.series(
    task.clear,
    $.gulp.parallel(task.pug, task.scss, task.js, task.img, task.font)
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, server)  // ✅ Теперь server определён
);

// Экспорт
exports.pug = task.pug;
exports.scss = task.scss;
exports.watch = watcher;
exports.clear = task.clear;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;
exports.server = server;

// Дефолтная задача
exports.default = $.app.isProd ? build : dev;