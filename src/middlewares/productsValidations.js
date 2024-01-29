const { body } = require('express-validator');

const productsValidations = [

  body('name')
    .notEmpty().withMessage('Debes ingresar un nombre de producto')
    .isLength({min: 5}).withMessage('Debe tener como mínimo 5 caracteres'),
  body('store')
    .notEmpty().withMessage('Debes ingresar una marca'), 
  body('grape')
    .notEmpty().withMessage('Debes ingresar una variedad'), 
  body('stock')
    .notEmpty().withMessage('Debes ingresar al menos 1 producto en stock'),
  body('price')
    .notEmpty().withMessage('Debes ingresar un precio'),
  body('description')
    .notEmpty().withMessage('Debes ingresar una descripción')
    .isLength({min: 20}).withMessage('Debe tener como mínimo 20 caracteres'),
  ];

module.exports = { productsValidations };