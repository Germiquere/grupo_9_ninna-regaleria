const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const productFilePath = path.join(__dirname, '../data/products.json');
function getProducts() {
	const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
	return products;
}

const controller = {
    index(req, res) {
        db.Product.findAll({ 
            include: [
                {association: 'Stores'},
                {association: 'TypeOfBarrel'},
                {association: 'ProductSegmentation'}
            ]
        })
        .then(function (products) {
            res.render('./index', { products });
        })
    }

};

module.exports = controller;