const Book = require('mongoose').model('Book');

module.exports = {
    getAllBooks: (req,res) => {
        Book.find()
            .then((books) =>{
                res.json(books)
            })
    },
    getBookById: (req,res) => {
        const id = req.params.id 
        console.log(id)
        Book.findById(id)
            .then((book) => {
                res.json(book)
            })
    },
    postBook: (req, res) => {
        let book = req.body;
        console.log(book)
        res.json({
            'success': 'true'
        })
    }
}

