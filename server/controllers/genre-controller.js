module.exports = {
    getAllGenres: (req,res) => {
        res.json({
            'name': 'Fantasy',
            'creationDate': Date.now(),
            'lastUpdate': '11-03-2018'
        })
    },
    getGenreById: (req,res) => {
        const id = req.params.id
        res.send(id)
    },
    searchGenreByName: (req, res) => {
        
    }

    
}