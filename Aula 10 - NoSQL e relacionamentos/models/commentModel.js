const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    codigo: Number,
    comentario: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
});

module.exports = mongoose.model('comments', commentSchema);
