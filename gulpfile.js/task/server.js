// BrowserSync server initialization - live-reload development server
const server = () => {
    $.browserSync.init({
        server: {
            baseDir: $.path.root  // Serve files from public/ directory
        },
        port: 3000,              // Fixed port for easy access (http://localhost:3000)
        notify: false,           // Disable BrowserSync popup notifications in browser
        open: true,              // Auto-open default browser on server start
        ui: false,               // Disable BrowserSync UI panel (optional, save resources)
        ghostMode: $.app.isDev ? { clicks: true, scroll: true, forms: true } : false  // Sync interactions only in dev mode
    });
}

// Export module
module.exports = server;