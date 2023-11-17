// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");

// ************ Controller Require ************
const productController = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/products'))
    },
    filename: (req, file, cb) => {
        let fileName = `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
        cb(null, fileName);
    }
});

const uploadFile = multer({storage});

/*** GET ALL PRODUCTS ***/ 
router.get('/allProducts', productController.index);

/*** GET PRODUCT CART ***/ 
router.get('/productCart', productController.cart);

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', productController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productController.create);
router.post('/create', uploadFile.single('products'), productController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/productDetail/:id/edit', productController.edit);
router.put('/productDetail/:id/edit', productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/productDetail/:id', productController.destroy);


module.exports = router;