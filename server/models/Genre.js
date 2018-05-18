const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true, unique: true },
    creationDate: { type: mongoose.Schema.Types.Date },
    lastUpdate: { type: mongoose.Schema.Types.Date },
    
});

const Genre = mongoose.model('Genre', genreSchema)