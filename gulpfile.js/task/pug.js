// PUG - processing pipeline
const pug = () => {
    return $.gulp.src($.path.pug.src)  // Create file stream for Pug templates
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "PUG",
                message: "Error: <%= error.message %>"
            }))
        }))  // Catch and notify about errors in the pipeline
        .pipe($.gp.pug($.app.pug))  // Compile Pug to HTML (config: pretty, doctype, etc.)
        .pipe($.gp.webpHtml())  // Convert <img src="*.jpg"> to <picture> with WebP fallback
        .pipe($.gulp.dest($.path.pug.dest));  // Save compiled HTML to public/
    // BrowserSync reload is handled by watcher in gulpfile.js (no need for .stream() here)
}

// Export module
module.exports = pug;