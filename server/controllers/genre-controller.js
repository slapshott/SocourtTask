const Genre = require('../models/Genre')

module.exports = {
    getAllGenres: (req,res) => {
        Genre.find({})
            .then((genres) => {
                console.log(genres)
                res.json(genres)
            })
    },
    getGenreById: (req,res) => {
        const id = req.params.id
        res.json({id})
    },
    searchBookByGenre: (req, res) => {
        
    }
    
}