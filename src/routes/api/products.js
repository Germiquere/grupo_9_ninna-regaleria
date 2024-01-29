const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/count', productsAPIController.count)
router.get('/detail/:id', productsAPIController.detail)
router.get('/lastCreated', productsAPIController.lastCreated)
router.get('/:page?', productsAPIController.list)

router.post('/', productsAPIController.create)
// router.put('/:id', productsAPIController.update)
// router.delete('/:id', productsAPIController.destroy)

module.exports = router