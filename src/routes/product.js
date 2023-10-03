const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/productCart', productController.cart);
router.get('/productDetail', productController.detail);


module.exports = router;