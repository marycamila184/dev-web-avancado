const planModel = require('../models/planModel');

class PlanController {
    async salvar(req, res) {
        const plan = req.body;
        const max = await planModel.findOne({}).sort({ codigo: -1 });
        plan.codigo = max == null ? 1 : max.plan + 1;

        const resultado = await planModel.create(plan);
        res.status(201).send();
    }

    async listar(req, res) {
        const resultado = await planModel.find({});
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const _id = String((await planModel.findOne({ 'codigo': codigo }))._id);
        await planModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }
}

module.exports = new PlanController();
