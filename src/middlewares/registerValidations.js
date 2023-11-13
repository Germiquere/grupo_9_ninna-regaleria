const {body} = require('express-validator');

const createUserValidations = [
    body('fullname')
        .notEmpty().withMessage('Debe ingresar un nombre')
        .isLength({min: 6}).withMessage('Ingresa tu nombre y apellido'),
    body('age')
        .notEmpty().withMessage('Debes ingresar tu edad')
        .isNumeric().withMessage('Debes ingresar un número válido'),
    body('dni')
        .notEmpty().withMessage('Debes ingresar tu número de DNI')
        .isNumeric().withMessage('Ingresa el número sin puntos'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un correo electrónico')
        .isEmail().withMessage('Ingresa un formato de correo válido'),
    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña')
        .isLength({min: 6}).withMessage('La contraseña debe tener un mínimo de 6 caracteres'),
    // body('avatar').custom((value, {req}) => {
    //     const file = req.file;
    //     if(!file) {
    //         throw new Error('Debes subir una imagen');
    //     }
    //     return true;
    // })
]

module.exports = {createUserValidations};