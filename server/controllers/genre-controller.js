module.exports = {
    getAllGenres: (req,res) => {
        res.json([{
            'name': 'Fantasy',
            'creationDate': new Date(Date.now()),
            'lastUpdate': '11-03-2018'
        }])
    },
    getGenreById: (req,res) => {
        const id = req.params.id
        res.json({id})
    },
    searchGenreByName: (req, res) => {
        
    }

    
}