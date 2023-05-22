const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: Number,
    titulo: String,
    ano: Number,
    poster: String, 
    nota: Number,
    assistido: Boolean
});

module.exports = mongoose.model('movies', movieSchema);
