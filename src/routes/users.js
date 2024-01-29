const express = require('express');
const path = require('path');
const multer = require('multer');

const usersController = require('../controllers/usersController');
const { loginValidation } = require('../middlewares/loginMiddleware');
const { createUserValidations } = require('../middlewares/registerValidations');
const isLoggedMiddleware = require('../middlewares/isLogedMiddleware');
const rememberMiddleware = require('../middlewares/rememberMiddleware');

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

const uploadFile = multer({ storage });

/*** LOGIN ***/
router.get('/login', rememberMiddleware, usersController.login);
router.post('/login', loginValidation, usersController.loginIn)
router.get('/profile', isLoggedMiddleware, rememberMiddleware, usersController.profile)
router.get('/logout', usersController.logout);

/*** REGISTER ***/
router.get('/register', usersController.register);
router.post('/register', uploadFile.single('img'), createUserValidations, usersController.create);

module.exports = router;