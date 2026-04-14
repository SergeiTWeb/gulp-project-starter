const { src, dest } = require("gulp");

// Configuration
const path = require("../config/path.js");
const app = require("../config/app.js");

// Plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const autoprefixer = require("gulp-autoprefixer").default;  // ESM version - keep .default
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size").default;                   // ESM version - keep .default
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));          // Dart Sass compiler
const sassGlob = require("gulp-sass-glob");                  // Auto-import SCSS files by glob pattern
const webpCss = require("gulp-webp-css");                    // Convert image URLs to WebP in CSS

// SCSS - processing pipeline
const scss = () => {
    return src(path.scss.src, { sourcemaps: app.isDev })  // Conditional sourcemaps for dev mode
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            }))
        }))  // Catch and notify about errors in the pipeline
        .pipe(sassGlob())  // Auto-import SCSS files matching glob patterns (e.g., @import "block/*")
        .pipe(sass({
            loadPaths: ["src/sass"],              // Base path for @import resolution
            silenceDeprecations: ["import"],      // Suppress @import deprecation warnings (optional)
            outputStyle: app.isProd ? "compressed" : "expanded"  // Minify output in production
        }).on("error", sass.logError))  // Log Sass compilation errors without crashing Gulp
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 3 versions"],  // Target browsers for vendor prefixes
            cascade: false,  // Disable visual cascade alignment for cleaner output
            grid: true       // Enable CSS Grid prefixing
        }))
        .pipe(webpCss())  // Convert image URLs in CSS to WebP format with fallback
        .pipe(shorthand())  // Optimize CSS shorthand properties (e.g., margin: 1px 2px 1px 2px → margin: 1px 2px)
        .pipe(groupCssMediaQueries())  // Group and sort media queries for better compression
        .pipe(size({ title: "main.css" }))  // Show file size in console before minification
        .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))  // Save main.css with sourcemaps (if dev)
        .pipe(rename({ suffix: ".min" }))  // Rename file to main.min.css
        .pipe(csso())  // Minify and optimize CSS structure
        .pipe(size({ title: "main.min.css" }))  // Show file size after minification
        .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }));  // Save main.min.css with sourcemaps (if dev)
}

// Export module
module.exports = scss;