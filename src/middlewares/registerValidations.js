const {body} = require('express-validator');
const db = require('../database/models')
const createUserValidations = [
    body('fullname')
        .notEmpty().withMessage('Debe ingresar un nombre')
        .isLength({ min: 6 }).withMessage('Ingresa tu nombre y apellido'),
    body('username')
        .notEmpty().withMessage('Debe ingresar un nombre de usuario')
        .isLength({ max: 9 }).withMessage('Nombre de usuario maximo con 9 caracteres').custom(async (value) => {
            const user = await db.User.findOne({ where: { username: value } });
            if (user) {
                return Promise.reject('El Nombre de usuario ya está registrado');
            }
        }),
    body('age')
        .notEmpty().withMessage('Debes ingresar tu edad')
        .isNumeric().withMessage('Debes ingresar un número válido'),
    body('dni')
        .notEmpty().withMessage('Debes ingresar tu número de DNI')
        .isNumeric().withMessage('Ingresa el número sin puntos')
        .custom(async (value) => {
            const user = await db.User.findOne({ where: { dni: value } });
            if (user) {
                return Promise.reject('El DNI ya está registrado');
            }
        }),
    body('email')
        .notEmpty().withMessage('Debes ingresar un correo electrónico')
        .isEmail().withMessage('Ingresa un formato de correo válido')
        .custom(async (value) => {
            const user = await db.User.findOne({ where: { email: value } });
            if (user) {
                return Promise.reject('El correo electrónico ya está registrado');
            }
        }),
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