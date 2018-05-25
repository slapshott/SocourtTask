const Genre = require('../models/Genre');
const Book = require('../models/Book');
module.exports = {
    getAllGenres: (req,res) => {
        Genre.find({})
            .then((genres) => {
                res.json(genres)
            })
    },
    getBookByGenre: (req,res) => {
        let genre = req.params.id;
            
        Book.find()
            .where({genre: genre})
            .then((books) => {
                res.json(books)
            })
    }
    
}