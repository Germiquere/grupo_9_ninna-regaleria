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
    },

});

const uploadFile = multer({storage},
    {
        dest: '/uploads',
        fileFilter(req, file, next) {
            const image = file.mimetype.startWith('image/');
            if (image) {
                next(null, true);
            } else {
                alert("El tipo de archivo no es valido")
                next({message: "El tipo de archivo no es valido"}, false);
            }
        }
    });

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
router.get('/create', productController.create);
router.post('/create', uploadFile.single('image'), productController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/productDetail/:id/edit', isLoggedMiddleware, adminMiddleware, productController.edit);
router.put('/productDetail/:id/edit', uploadFile.single('image'), productController.update);

/*** DELETE ONE PRODUCT***/ 
router.delete('/productDetail/:id', isLoggedMiddleware, adminMiddleware, productController.destroy);


module.exports = router;