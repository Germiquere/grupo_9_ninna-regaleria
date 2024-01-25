const express = require('express');
const router = express.Router();
const userAPIController = require('../../controllers/api/userAPIController');

router.get('/', userAPIController.list)
router.get('/detail/:id', userAPIController.detail)
router.get('/lastCreated', userAPIController.lastCreated)

module.exports = router