const controllers = require('../controllers');
const restrictedPages = require('./auth');
const auth = require('./auth');

module.exports = app => {

    // Home
    app.get('/', controllers.home.index)

    // Authentication
    app.post('/register', controllers.user.registerPost);
    app.post('/login', controllers.user.loginPost);
    app.get('/logout', controllers.user.logout);
    
    // Book
    app.post('api/createBook', controllers.book.postBook)
    app.get('/api/books', controllers.book.getAllBooks)
    app.get('/api/book/:id', controllers.book.getBookById)
    app.post('/api/books/search', controllers.book.searchBookByName)
    
    // Genres
    app.get('/api/genres', controllers.genre.getAllGenres)
    app.get('/api/genre/:id', controllers.genre.getGenreById)
    app.post('/api/genres/search', controllers.genre.searchGenreByName)


    // Error
    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    });
};