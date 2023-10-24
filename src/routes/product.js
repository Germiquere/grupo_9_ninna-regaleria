const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/productCart', productController.cart);
router.get('/productDetail', productController.detail);

/* PRODUCT CREATE */
router.get('/create', productController.create);
router.post('/create', productController.store);

/* PRODUCT EDIT */
router.get('/edit', productController.edit)
router.put('/', productController.update); 


module.exports = router;