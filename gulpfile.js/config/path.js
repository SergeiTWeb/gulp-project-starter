const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,  // Base directory for BrowserSync server (public/)

    // Plain HTML files processing
    html: {
        src: pathSrc + "/html/**/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    // Plain CSS files processing
    css: {
        src: pathSrc + "/css/**/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },

    // Pug template files processing
    pug: {
        src: pathSrc + "/pug/*.pug",             // Match Pug files in src/pug/ (root level only)
        watch: pathSrc + "/pug/**/*.pug",        // Watch all Pug files recursively
        dest: pathDest                           // Output to public/
    },

    // SCSS/Sass files processing
    scss: {
        src: pathSrc + "/sass/main.scss",       
        watch: pathSrc + "/sass/**/*.scss",     
        dest: pathDest + "/css"                 
    },

    // JavaScript files processing
    js: {
        src: pathSrc + "/js/*.js",              
        watch: pathSrc + "/js/**/*.js",         
        dest: pathDest + "/js"                  
    },

    // Image files processing
    img: {
        src: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,webp}", 
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg,webp}",
        dest: pathDest + "/img"                 
    },

    // Font files processing
    font: {
        src: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}", 
        watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/font"                
    }
};