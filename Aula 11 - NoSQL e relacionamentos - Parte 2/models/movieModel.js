const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    codigo: Number,
    titulo: String,
    ano: Number,
    poster: String,
    nota: Number,
    assistido: Boolean,
    comentarios: []
});

module.exports = mongoose.model('movies', movieSchema);
