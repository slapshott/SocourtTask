const Book = require('../models/Book')

module.exports = {
    getAllBooks: (req,res) => {
        res.json({
            'name': 'Pod igoto',
            'author': 'Ivan Vazoz'
        })
    },
    getBookById: (req,res) => {
        const id = req.params.id 
        console.log(id)
        res.send(id)
    },
    searchBookByName: (req, res) => {
        const searchedBook = req.params.book
        Book.findByName({searchedBook})

    }
}

