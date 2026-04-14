// Configuration
const del = require("del");
const path = require("../config/path.js");

// Clear public directory to remove unnecessary files during build
const clear = () => {
    return del(path.root);  // Returns Promise, Gulp handles it
}

module.exports = clear;