const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  codigo: Number,
  nome: {
    type: String,
    require: true
  },
  cpf: String,
  plano: { type: mongoose.Schema.Types.ObjectId, ref: 'plans' }
});

module.exports = mongoose.model('users', userSchema);
