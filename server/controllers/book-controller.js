const Book = require('../models/Book')

module.exports = {
    getAllBooks: (req,res) => {
        res.json([
        {
            'name': 'Pod Igoto',
            'author': 'Ivan Vazov',
            'genre': 'drama',
            'creationDate': '1893',
            'lastUpdate': '1893'         
        },
        {
            'name': 'X-men',
            'author': 'Steven King',
            'genre': 'fantasy',
            'creationDate': '1984',
            'lastUpdate': '2018'
        }
    ])
    },
    getBookById: (req,res) => {
        const id = req.params.id 

        if(id === '1'){
            res.json({
                'name': 'Pod Igoto',
                'author': 'Ivan Vazov',
                'genre': 'drama',
                'creationDate': '1893',
                'lastUpdate': '1893'
            })
        }else{
            res.json({
                'name': 'X-men',
                'author': 'Steven King',
                'genre': 'fantasy',
                'creationDate': '1984',
                'lastUpdate': '2018'
            })
        }

        
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

