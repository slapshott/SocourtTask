const Book = require('../models/Book')

module.exports = {
    getAllBooks: (req,res) => {
        res.json([{
        'name': 'Pod Igoto',
        'author': 'Ivan Vazov',
        'genre': 'drama',
        'creationDate': '1893',
        'lastUpdate': '1893'         
        }])
    },
    getBookById: (req,res) => {
        const id = req.params.id 

        // Book.findById(id)
        //     .then((book) => {
        //         console.log(book)
        //     })

        res.json({id})
    },
    searchBookByName: (req, res) => {
        const searchedBook = req.params.book
        Book.findByName({searchedBook})

    },
    postBook: (req, res) => {
        let book = req.body;
        console.log(book)
        res.json({
            'success': 'true'
        })
        res.send('Succes')
        res.end()
    }
}

