module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },

    pug: {
        pretty: true,
        data: {
            news: require('../data/news.json')
        }
    },

    webpack: {
        mode: "development" // режим разработки 
        //mode: "production" // режим продакшн дает минифийированный вариант JS
    },

    imagemin: {
        verbose: true,
        progressive: true,
        interlaced: true,
        optimizationLevel: 3
    },

    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}