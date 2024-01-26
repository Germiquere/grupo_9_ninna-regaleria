const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/', productsAPIController.list)
router.get('/detail/:id', productsAPIController.detail)
router.get('/lastCreated', productsAPIController.lastCreated)

module.exports = router