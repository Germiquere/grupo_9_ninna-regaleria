const { body } = require('express-validator');

const productsValidations = [

  body('name')
    .notEmpty().withMessage('Debes ingresar un nombre de producto')
    .isLength({min: 5}).withMessage('Debe tener como mínimo 5 caracteres'),
  body('description')
    .isLength({min: 20}).withMessage('Debe tener como mínimo 20 caracteres'),
  
  ];

module.exports = { productsValidations };