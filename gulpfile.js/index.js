// ============================================================================
// GLOBAL NAMESPACE - Centralized access to Gulp, plugins, and configuration
// Using global.$ to avoid repetitive require() in every task file
// ============================================================================

global.$ = {
    gulp: require('gulp'),
    gp: require("gulp-load-plugins")(),           // Auto-load gulp plugins by name
    browserSync: require("browser-sync").create(), // Live-reload server instance
    path: require("./config/path.js"),            // File paths configuration
    app: require("./config/app.js")               // Plugin settings & mode flags
};

// ============================================================================
// TASKS - Load all task files from ./task/ directory (modular architecture)
// ============================================================================

const requireDir = require("require-dir");
const task = requireDir("./task", { recurse: true });

// ============================================================================
// SERVER - Initialize BrowserSync development server
// ============================================================================

const server = () => {
    $.browserSync.init({
        server: {
            baseDir: $.path.root  // Serve files from public/ directory
        },
        port: 3000,               // Fixed port: http://localhost:3000
        notify: false,            // Disable BrowserSync popup notifications
        open: true                // Auto-open browser on start
    });
};

// ============================================================================
// WATCHER - Watch source files and trigger tasks + browser reload on change
// Supports both Pug/SCSS and plain HTML/CSS workflows
// ============================================================================

const watcher = () => {
    // Pug/SCSS workflow (primary)
    //$.gulp.watch($.path.pug.watch, task.pug).on('change', $.browserSync.reload);
    //$.gulp.watch($.path.scss.watch, task.scss).on('change', $.browserSync.reload);
    
    // Plain HTML/CSS workflow (alternative)
    $.gulp.watch($.path.html.watch, task.html).on('change', $.browserSync.reload);
    $.gulp.watch($.path.css.watch, task.css).on('change', $.browserSync.reload);
    
    // Assets (shared by both workflows)
    $.gulp.watch($.path.js.watch, task.js).on('change', $.browserSync.reload);
    $.gulp.watch($.path.img.watch, task.img).on('change', $.browserSync.reload);
    $.gulp.watch($.path.font.watch, task.font).on('change', $.browserSync.reload);
};

// ============================================================================
// BUILD & DEV - Task orchestration
// ============================================================================

// Production build: clear + parallel processing of ALL assets
// Supports both Pug/SCSS and HTML/CSS workflows

const build = $.gulp.series(
    task.clear,
    $.gulp.parallel(
        //task.pug,      // Compile Pug → HTML
        task.html,     // Process plain HTML files / alternative
        //task.scss,     // Compile SCSS → CSS
        task.css,      // Process plain CSS files / alternative
        task.js,       // Bundle & transpile JavaScript
        task.img,      // Optimize images + WebP conversion
        task.font      // Convert fonts + generate @font-face
    )
);

// Development mode: build + watch + server
const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, server)
);

// ============================================================================
// EXPORTS - Make tasks available via CLI (e.g., gulp pug, gulp html)
// ============================================================================

exports.pug = task.pug;
exports.html = task.html;
exports.scss = task.scss;
exports.css = task.css;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;
exports.clear = task.clear;
exports.watch = watcher;
exports.server = server;

// ============================================================================
// DEFAULT TASK - Run dev mode by default, build if --production flag is set
// ============================================================================

exports.default = $.app.isProd ? build : dev;