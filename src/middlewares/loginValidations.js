const { body } = require('express-validator');
const db = require('../database/models');

const loginValidation = [
    body('email')
        .notEmpty().withMessage('Debes ingresar un correo electrónico')
        .isEmail().withMessage('Ingresa un formato de correo válido')
        .custom(async (value) => {
            const user = await db.User.findOne({ where: { email: value } });
            if (!user) {
                return Promise.reject('El correo electrónico no está registrado');
            }
        }),
    body('password')
        .notEmpty().withMessage('Debes ingresar una contraseña')
        .isLength({ min: 6 }).withMessage('La contraseña debe tener un mínimo de 6 caracteres')
];

module.exports = { loginValidation };
