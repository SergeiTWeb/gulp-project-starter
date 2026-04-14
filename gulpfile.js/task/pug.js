// PUG - обработка
const pug = () => {
    return $.gulp.src ($.path.pug.src)
    .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(error => ({
            title: "PUG",
            message: error.message
        }))
    }))
    .pipe($.gp.pug($.app.pug))
    .pipe($.gp.webpHtml())
    .pipe($.gulp.dest($.path.pug.dest))
    .pipe($.browserSync.stream());
}

module.exports = pug; //Экспорт модуля наружу