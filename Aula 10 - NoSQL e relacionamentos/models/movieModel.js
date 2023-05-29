const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    codigo: Number,
    titulo: String,
    ano: Number,
    poster: String, 
    nota: Number,
    assistido: Boolean,
    comment: { type: mongoose.Schema.Types.ObjectId, ref: 'comments' }
});

module.exports = mongoose.model('movies', movieSchema);
