module.exports = {
    getAllGenres: (req,res) => {
        res.json([
            {
            'name': 'drama',
            'creationDate': '1893',
            'lastUpdate': '1893'
            },
            {
            'name': 'fantasy',
            'creationDate': '1984',
            'lastUpdate': '2018'
            }
    ])
    },
    getGenreById: (req,res) => {
        const id = req.params.id
        res.json({id})
    },
    searchGenreByName: (req, res) => {
        
    }

    
}