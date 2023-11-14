const express = require('express');
const path = require('path');
const multer = require('multer');

const usersController = require('../controllers/usersController');
const {createUserValidations} = require('../middlewares/registerValidations');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/users/avatars'))
    },
    filename: (req, file, cb) => {
        let fileName = `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`
        cb(null, fileName);
    }
});

const uploadFile = multer({storage});

/*** LOGIN ***/ 
router.get('/login', usersController.login);

/*** REGISTER ***/ 
router.get('/register', usersController.register);
router.post('/register', uploadFile.single('avatar'), createUserValidations, usersController.create);

module.exports = router;