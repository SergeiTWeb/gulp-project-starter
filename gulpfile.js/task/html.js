const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size").default;  // ESM version - keep .default
const webpHtml = require("gulp-webp-html");

// HTML - processing pipeline
const html = () => {
    return src(path.html.src)  // Create file stream (path pattern uses * to match all files in folder)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML",
                message: "Error: <%= error.message %>"
            }))
        }))  // Catch and notify about errors in the pipeline (gulp-notify)
        .pipe(fileInclude())  // Process @@include statements before writing to public
        .pipe(webpHtml())     // Convert <img src="*.jpg"> to <picture> with WebP fallback
        .pipe(size({ title: "before" }))  // Show file size before minification
        .pipe(htmlmin(app.htmlmin))       // Minify HTML (remove whitespace, comments, etc.)
        .pipe(size({ title: "after" }))   // Show file size after minification
        .pipe(dest(path.html.dest));      // Save to public directory
}

// Export module
module.exports = html;