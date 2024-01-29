const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController');

router.get('/count', userAPIController.count)
router.get('/detail/:id', userAPIController.detail)
router.get('/lastCreated', userAPIController.lastCreated)
router.get('/:page?', userAPIController.list)

module.exports = router