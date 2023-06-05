const userModel = require('../models/userModel');
const planModel = require('../models/planModel');

class UsersController {
    async salvar(req, res) {
        const user = req.body;
        const max = await userModel.findOne({}).sort({ codigo: -1 });
        user.codigo = max == null ? 1 : max.user + 1;

        //Precisamos inserir um plano primeiro
        const plan = await planModel.findOne({ codigo: plan.codigo });
        user.plan = plan._id;

        const resultado = await userModel.create(user);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await userModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const codigo = req.params.codigo;
        const resultado = await userModel.findOne({ 'codigo': codigo });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await userModel.findOne({ 'codigo': codigo }))._id);
        await userModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.codigo;
        const _id = String((await userModel.findOne({ 'codigo': codigo }))._id);
        await userModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new UsersController();
