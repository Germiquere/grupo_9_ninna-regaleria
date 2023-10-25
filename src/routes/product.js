// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productController = require('../controllers/productController');

/*** GET ALL PRODUCTS ***/ 
router.get('/allProducts', productController.index);

/*** GET PRODUCT CART ***/ 
router.get('/productCart', productController.cart);

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create);
router.post('/create', productController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/productDetail/:id/edit', productController.edit);
router.put('/productDetail/:id/edit', productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/productDetail/:id', productController.destroy);


module.exports = router;