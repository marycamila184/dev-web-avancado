const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    codigo: Number,
    nome: String,
    mensalidade: Number
});

module.exports = mongoose.model('plans', planSchema);