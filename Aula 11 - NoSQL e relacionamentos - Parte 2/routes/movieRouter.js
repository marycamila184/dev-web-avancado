const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.listar);
router.post('/', movieController.salvar);
router.get('/:id', movieController.buscarPorId);
router.put('/:id', movieController.atualizar);
router.delete('/:id', movieController.excluir);

module.exports = router;
