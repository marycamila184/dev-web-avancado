const movieModel = require('../models/movieModel');

class MovieController {
    async salvar(req, res) {
        let movie = req.body;
        const max = await movieModel.findOne({}).sort({ codigo: -1 });
        movie.id = max == null ? 1 : max.id + 1;
        const resultado = await movieModel.create(movie);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await movieModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await movieModel.findOne({ 'id': id });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await movieModel.findOne({ 'id': id }))._id);
        await movieModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await movieModel.findOne({ 'id': id }))._id);
        await movieModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new MovieController();
