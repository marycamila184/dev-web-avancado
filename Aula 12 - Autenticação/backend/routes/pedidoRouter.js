const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');
const auth = require('../auth/auth');

router.use(auth.autorizar);

router.post('/', pedidoController.salvar);
router.get('/:clienteId', pedidoController.listar);
router.get('/:clienteId/:codigo', pedidoController.buscarPorCodigo);

module.exports = router;
