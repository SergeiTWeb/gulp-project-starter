# GULP Starter Kit
Modern build (2026) for website development using **Gulp** with **Pug**, **SCSS**, and **JavaScript** support. Created for fast and convenient static website development.

## Features
- **Automatic browser reload** (BrowserSync)
- **Pug to HTML compilation** with data injection
- **CSS/SCSS processing** with autoprefixing & minification
- **Clean `public` directory** before build
- **Watch mode** — real-time change tracking
- **Flexible modular structure** for convenient development
- **WebP image conversion** with fallback support
- **Font conversion** (WOFF2/WOFF) with @font-face generation
- **HTML/CSS/JS minification** for production
- **JavaScript bundling** with Babel & Webpack

## Installation
**Clone the repository:**
```bash
git clone https://github.com/SergeiTWeb/gulp-project.git
cd gulp-starter
```

**Install dependencies:**
```bash
npm install
```

**Start development server:**
```bash
npm run dev
# or
gulp dev
```

## Main Commands
gulp dev = Start dev server with auto-reload
gulp pug = Compile Pug files to HTML
gulp scss = Process SCSS → CSS with autoprefix & minify
gulp css = Process plain CSS files
gulp js = Bundle & transpile JavaScript (Babel/Webpack)
gulp img = Convert images to WebP + optimize
gulp fonts = Convert fonts to WOFF2/WOFF + generate @font-face
gulp html = Process HTML files with minification
gulp clear = Clear public folder

## Technologies & Plugins
**Core**
Gulp = Task runner & build orchestration
BrowserSync = Live-reload server with sync across devices
gulp-watch = File watching with real-time task triggering

**Templates & HTML**
Pug = Clean, indentation-based template engine
gulp-file-include = Simple HTML partials with @@include
gulp-htmlmin = Minify HTML for production (remove whitespace, comments)

**Styles**
SCSS/Sass = CSS preprocessor with variables, mixins, nesting
gulp-sass = Compile SCSS → CSS
gulp-autoprefixer = Auto-add vendor prefixes (-webkit-, -moz-)
gulp-csso = Minify & optimize CSS
gulp-group-css-media-queries = Group & sort media queries
gulp-shorthand = Optimize CSS shorthand properties

**JavaScript**
Webpack = Module bundler for complex JS projects
Babel = Transpile modern ES6+ → browser-compatible JS
gulp-babel = Gulp wrapper for Babel
gulp-uglify = Minify JavaScript files

**Images & Fonts**
gulp-webp = Convert PNG/JPG → WebP (smaller size, modern format)
gulp-imagemin = Optimize images (lossless compression)
gulp-newer = Process only changed files (faster builds)
gulp-ttf2woff2 = Convert TTF → WOFF2/WOFF fonts
gulp-fonter = Generate @font-face CSS from font files

**Utilities**
gulp-plumber = Prevent Gulp crashes on errors
gulp-notify = Desktop notifications for build status
gulp-size = Show file size before/after processing
gulp-rename = Rename files (e.g., main.css → main.min.css)
del = Clean directories before build

## Project Structure
```bash
gulp-starter/
├── config/                     # Configuration files
│   ├── app.js                  # Plugin settings (imagemin, etc.)
│   └── path.js                 # File paths for all tasks
│
├── data/                       # JSON data for Pug templates
│   └── news.json               # Example: inject dynamic content
│
├── node_modules/               # npm dependencies (auto-generated)
│
├── public/                     # Production build (auto-generated)
│   ├── css/                    # Compiled & minified styles
│   ├── js/                     # Bundled & transpiled scripts
│   ├── img/                    # Optimized images + WebP versions
│   ├── fonts/                  # Converted WOFF2/WOFF fonts
│   └── index.html              # Compiled HTML
│
├── src/                        # Source files (work here!)
│   ├── css/                    # Plain CSS files
│   ├── scss/                   # SCSS source files
│   │   ├── main.scss           # Main entry point
│   │   ├── _variables.scss     # Global variables
│   │   ├── _mixins.scss        # Reusable mixins
│   │   └── block/              # Component styles
│   │
│   ├── js/                     # JavaScript source
│   │   ├── main.js             # Entry point
│   │   └── components/         # Modular JS files
│   │
│   ├── img/                    # Original images (PNG, JPG, SVG)
│   ├── fonts/                  # Source fonts (TTF, OTF)
│   │
│   ├── html/                   # Plain HTML files (optional)
│   │   └── chunk/              # Reusable HTML parts
│   │
│   └── pug/                    # Pug templates (main workflow)
│       ├── layout/             # Layout wrappers (app.pug)
│       ├── chunk/              # Reusable components
│       └── pages/              # Individual pages
│
├── task/                       # Modular Gulp tasks
│   ├── clear.js                # Clean public folder
│   ├── pug.js                  # Pug → HTML compilation
│   ├── scss.js                 # SCSS processing pipeline
│   ├── css.js                  # Plain CSS processing
│   ├── js.js                   # JavaScript bundling (Webpack/Babel)
│   ├── img.js                  # Image optimization + WebP
│   ├── fonts.js                # Font conversion + @font-face
│   └── html.js                 # HTML processing + minification
│
├── gulpfile.js                 # Main Gulp configuration
├── package.json                # Dependencies & scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # This documentation
```

## Getting Started
* Edit templates: Open src/pug/index.pug or src/html/index.html
* Add styles: Work in src/scss/main.scss or src/css/base.css
* Add scripts: Create files in src/js/
* Add images/fonts: Put originals in src/img/ or src/fonts/
* Save & watch: Changes auto-compile and reload at http://localhost:3000

## 📝 Notes
✅ Supports both Pug and HTML workflows (use one at a time)
✅ public/ is auto-generated — never edit manually
✅ All paths are configurable in config/path.js
✅ Plugin settings are in config/app.js
🎯 For production: run gulp dev then manually optimize or add a build task
🔧 To add new features: create a task in task/ and import in gulpfile.js

## 👨‍💻 Author
Sergei Tumanov | Junior Frontend Developer

## 🔗 Portfolio | GitHub


## 📄 License
MIT License — feel free to use for your projects!

**Happy Coding! 💻✨**