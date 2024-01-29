// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");

// ************ Controller Require ************
const productController = require('../controllers/productController');
const isLoggedMiddleware = require('../middlewares/isLogedMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

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

/*** GET PRODUCTS ***/ 
router.get('/allProducts', productController.index);
router.get('/wines', productController.wines);
router.get('/beers', productController.beers);
router.get('/whiskies', productController.whiskies);
router.get('/spirits', productController.spirits);

/*** GET PRODUCT CART ***/ 
router.get('/productCart', isLoggedMiddleware, productController.cart);

/*** GET ONE PRODUCT ***/ 
router.get('/productDetail/:id', isLoggedMiddleware, productController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', adminMiddleware,productController.create);
router.post('/create', uploadFile.single('image'), productController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/productDetail/:id/edit', adminMiddleware, productController.edit);
router.put('/productDetail/:id/edit', uploadFile.single('image'), productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/productDetail/:id', productController.destroy);


module.exports = router;