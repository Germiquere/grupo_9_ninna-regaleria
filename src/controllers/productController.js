const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

function getProducts() {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}


const controller = {
	index: (req, res) => {
		res.render('./products/allProducts', {products: getProducts()});
	},

    cart(req, res) {
        res.render('./products/productCart')
    },
    detail: (req, res) => {
        const products = getProducts();
        const product = products.find(product => product.id == req.params.id);
        if (!product) {
			return res.render('error', {
				message: 'El producto no existe',
				error: {
					status: 404
				},
				path: req.url
			});
		}
        res.render('./products/productDetail', { product })
    },
	 create: (req, res) => {
		res.render('./products/product-create-form');
	 },

	  store: (req, res) => {
		const products = getProducts();
		const productsToCreate = {
			id: products[products.length - 1].id + 1,
			image: 'default.png',
			...req.body
		}
		products.push(productsToCreate);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/allProducts');
	},

	edit: (req, res) => {
		const products = getProducts();
		const product = products.find(product => product.id == req.params.id);
		res.render('./products/product-edit-form', { productToEdit: product} );
	},

	update: (req, res) => {
		const products = getProducts();
		const indexProduct = products.findIndex(product => product.id == req.params.id);
		products[indexProduct] = {
			...products[indexProduct],
			...req.body
		}
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/allProducts');
	},

	destroy: (req, res) => {
		const products = getProducts();
		const indexProduct = products.findIndex(product => product.id == req.params.id);
		products.splice(indexProduct, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/allProducts');
	}
};

module.exports = controller;