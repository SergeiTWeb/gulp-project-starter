## GULP Starter Kit (2026)

Modern Gulp build with **dual workflow support**: Pug+SCSS or HTML+CSS.  
Created for fast static website development with live-reload and production optimization.

## Features:

- **Live-reload** (BrowserSync)
- **Dual workflow**: Pug/SCSS **OR** HTML/CSS (se one at a time)
- **WebP conversion** with fallback
- **Font conversion** (TTF → WOFF/WOFF2 + @font-face)
- **Production minification** (HTML/CSS/JS/Images)
- **Modern JS** (Babel + Webpack)
- **Detailed comments** in all task files

# Installation:

**Clone the repository:**
```bash
git clone https://github.com/SergeiTWeb/gulp-project.git
cd gulp-starter
```

**Install dependencies:**
```bash
npm install
```

# Start development server:

**Development (auto-reload at http://localhost:3000)**
```bash
npm start
```
**Production build (minified, optimized)**
```bash
npm run build
```

# Main Commands:

```bash
npm start # Dev server with auto-reload
npm run build # Production build (minified)
gulp clear # Clean public/ folder
gulp pug # Compile Pug → HTML
gulp scss # Compile SCSS → CSS
gulp html # Process HTML files
gulp css # Process CSS files
gulp js # Bundle JavaScript
gulp img # Optimize images + WebP
gulp fonts # Convert fonts
```

# Key Technologies:

- **Gulp 5** - Build system
- **BrowserSync** - Live-reload server
- **Pug** - Template engine
- **SCSS/Sass** - CSS preprocessor
- **Babel + Webpack** - JavaScript bundling
- **gulp-webp** - Modern image format
- **gulp-ttf2woff2** - Font conversion
- **👉 Full plugin list in package.json**

# Project Structure:

```bash
gulp-starter/
├── gulpfile.js/                # Main Gulp configuration folder
│   ├── config/                 # Configuration files
│   │   ├── app.js              # Plugin settings (modes, options)
│   │   └── path.js             # Source & destination paths
│   │
│   ├── data/                   # JSON data for templates
│   │   └── news.json           # Dynamic content for Pug/HTML
│   │
│   ├── task/                   # Gulp tasks (modular architecture)
│   │   ├── clear.js            # Clean public/ folder
│   │   ├── css.js              # Plain CSS processing
│   │   ├── font.js             # Font conversion (WOFF/WOFF2)
│   │   ├── html.js             # HTML processing
│   │   ├── img.js              # Image optimization + WebP
│   │   ├── js.js               # JavaScript bundling (Babel/Webpack)
│   │   ├── pug.js              # Pug → HTML compilation
│   │   ├── scss.js             # SCSS → CSS processing
│   │   └──server.js           # BrowserSync server
│   │
│   └── index.js                # Main entry point (global.$, watcher, build)
│
├── src/                        # Source files (EDIT THESE!)
│   ├── pug/                    # Pug templates (Workflow A)
│   ├── html/                   # HTML files (Workflow B - alternative)
│   ├── sass/                   # SCSS/Sass files (Workflow A)
│   ├── css/                    # Plain CSS files (Workflow B - alternative)
│   ├── js/                     # JavaScript source
│   ├── img/                    # Original images (PNG, JPG, SVG)
│   └── font/                   # Source fonts (TTF, OTF)
│
├── public/                     # Production build (AUTO-GENERATED)
│   ├── css/                    # Compiled & minified CSS
│   ├── js/                     # Bundled JavaScript
│   ├── img/                    # Optimized images + WebP
│   ├── font/                   # Converted fonts (WOFF/WOFF2)
│   └── index.html              # Compiled HTML
│
├── node_modules/               # npm dependencies (auto-generated)
├── package.json                # Dependencies & npm scripts
├── package-lock.json           # Locked dependency versions
└── README.md                   # Project documentation
```

# Tips:

✅ All task files contain detailed comments in English
✅ Configure paths in config/path.js
✅ Configure plugins in config/app.js
✅ public/ is auto-generated — never edit manually
✅ Add --production flag for minification

# License:
MIT License — free for personal and commercial use.

# Author:
**Sergei Tumanov**
**[my portfolio and projects](https://opentips.com.au)**
**[Buy me a coffee](https://www.paypal.com/paypalme/nctmmrn)**

**Happy Coding! 💻✨**