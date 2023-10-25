const fs = require('fs');
const path = require('path');

const productFilePath = path.join(__dirname, '../data/products.json');
function getProducts() {
	const products = JSON.parse(fs.readFileSync(productFilePath, 'utf-8'));
	return products;
}

const controller = {
    index(req, res) {
        const products = getProducts();
        const ofertas = products.filter(product => product.category === 'oferta');
        const sugerencias = products.filter(product => product.category === 'sugerencia');
        res.render('index', { ofertas, sugerencias })
    }
};

module.exports = controller;