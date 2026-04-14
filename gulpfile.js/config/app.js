// Detect production mode from command line arguments (--production flag)
const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd,  // True when running with --production flag
    isDev,   // True in development mode (default)

    // HTML minification settings (gulp-htmlmin)
    htmlmin: {
        collapseWhitespace: isProd  // Remove whitespace only in production
    },

    // Pug template engine settings (gulp-pug)
    pug: {
        pretty: isDev,  // Pretty-print HTML in dev, minified in prod
        data: {
            // Load JSON data for injection into Pug templates
            news: require('../data/news.json')  // Relative path from config/ to data/
        }
    },

    // Webpack bundler settings (webpack-stream)
    webpack: {
        mode: isProd ? "production" : "development"  // Build modes for webpack
    },

    // Image optimization settings (gulp-imagemin)
    imagemin: {
        verbose: true,           // Show detailed output in console
        progressive: true,       // Enable progressive JPEG encoding
        interlaced: true,        // Enable interlaced PNG encoding
        optimizationLevel: 3     // PNG optimization level (0-7, higher = slower but smaller)
    },

    // Font conversion settings (gulp-fonter)
    fonter: {
        // Output formats for font conversion (input must be .ttf or .otf)
        formats: ["ttf", "woff", "eot", "svg"]  // Generate these formats from source fonts
    }
};