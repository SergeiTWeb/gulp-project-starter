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
    }
}