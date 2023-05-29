const movieModel = require('../models/movieModel');

class MovieController {
    async salvar(req, res) {
        let movie = req.body;
        const max = await movieModel.findOne({}).sort({ codigo: -1 });
        movie.id = max == null ? 1 : max.id + 1;
        const resultado = await movieModel.create(movie);
        res.status(201).json(resultado);


        //     const cliente = req.body;
        // const max = await clienteModel.findOne({}).sort({codigo: -1});
        // cliente.codigo = max == null ? 1 : max.codigo + 1;

        // const usuario = await usuarioModel.findOne({codigo: cliente.usuario.codigo});
        // cliente.usuario = usuario._id;

        // const loja = await lojaModel.findOne({codigo: cliente.loja.codigo});
        // cliente.loja = loja._id;

        // const resultado = await clienteModel.create(cliente);
        // res.status(201).send();

    }

    async listar(req, res) {
        const resultado = await movieModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const codigo = req.params.codigo;
        const resultado = await movieModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await movieModel.findOne({ 'codigo': codigo }))._id);
        await movieModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await movieModel.findOne({ 'codigo': codigo }))._id);
        await movieModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new MovieController();
