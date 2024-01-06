const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const productsFilePath = path.join(__dirname, '../data/products.json');

function getProducts() {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}


const controller = {
	index: (req, res) => {
		db.Product.findAll({
			include: [
				{ association: 'Stores' },
				{ association: 'TypeOfBarrel' }
			]
		})
		.then(function(products) {
			res.render('./products/allProducts', { products: products });
		})
		
	},

    cart(req, res) {
        res.render('./products/productCart')
    },
    detail: (req, res) => {
        // const products = getProducts();
        // const product = products.find(product => product.id == req.params.id);
        // if (!product) {
		// 	return res.render('error', {
		// 		message: 'El producto no existe',
		// 		error: {
		// 			status: 404
		// 		},
		// 		path: req.url
		// 	});
		// }
        // res.render('./products/productDetail', { product })

		db.Product.findByPk(req.params.id, {
			include: [
				{ association: 'Stores' },
				{ association: 'TypeOfBarrel' },
				{ association: 'ProductType' },
				{ association: 'Styles' }
			]
		})
		.then(function(products){
			res.render('./products/productDetail', { products });
		})
    },
	create: (req, res) => {
		return Promise.all([
			db.ProductSegmentation.findAll(),
			db.ProductType.findAll()
		])
			.then(([productSegmentation, productType]) => {
				return res.render('./products/product-create-form', {productSegmentation, productType});
			});
	},

	  store: async (req, res) => {
		// const products = getProducts();
		// const productsToCreate = {
		// 	id: products[products.length - 1].id + 1,
		// 	image: req.file ? req.file.filename : "default.png",
		// 	...req.body
		// }
		// products.push(productsToCreate);
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		const [style, barrelType, store] = await Promise.all([
			db.Style.create({ name: req.body.grape }),
			db.TypeOfBarrel.create({ name: req.body.typeOfBarrel }),
			db.Store.create({ name: req.body.store }),
		]);

		db.Product.create({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			image: req.file ? req.file.filename : "default.png",
			stock: req.body.stock,
			time_of_barrel: req.body.timeInBarrel,
			year: req.body.year,
			products_segmentations_id: req.body.category,
			products_types_id: req.body.type,
			styles_id: style.id,
			barrels_types_id: barrelType.id,
			stores_id: store.id,
		});
		res.redirect('/allProducts');
	},

	edit: (req, res) => {
		// const products = getProducts();
		// const product = products.find(product => product.id == req.params.id);
		// res.render('./products/product-edit-form', { productToEdit: product} );

		let products = db.Product.findByPk(req.params.id);
		let productSegmentation = db.ProductSegmentation.findAll();
		let productType = db.ProductType.findAll();
		let store = db.Store.findByPk(req.params.id);
		let style = db.Style.findByPk(req.params.id);
		let typeOfBarrel = db.TypeOfBarrel.findByPk(req.params.id);

		Promise.all([products, productSegmentation, productType, store, style, typeOfBarrel])
			.then(function([products, productSegmentation, productType, store, style, typeOfBarrel]){
				res.render('./products/product-edit-form', { products, productSegmentation, productType, store, style, typeOfBarrel } );
			})

	},

	update: async (req, res) => {
		// const products = getProducts();
		// const indexProduct = products.findIndex(product => product.id == req.params.id);
		// products[indexProduct] = {
		// 	...products[indexProduct],
		// 	...req.body
		// }
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		// res.redirect('/allProducts');

		const [style, barrelType, store] = await Promise.all([
			db.Style.update({ name: req.body.grape }, { where: { id: req.params.id } }),
			db.TypeOfBarrel.update({ name: req.body.typeOfBarrel }, { where: { id: req.params.id } }),
			db.Store.update({ name: req.body.store }, { where: { id: req.params.id } }),
		]);

		db.Product.update({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			description: req.body.description,
			stock: req.body.stock,
			time_of_barrel: req.body.timeInBarrel,
			year: req.body.year,
			products_segmentations_id: req.body.category,
			products_types_id: req.body.type,
			styles_id: style.id,
			barrels_types_id: barrelType.id,
			stores_id: store.id,
		},{
			where:{
				id: req.params.id
			}
		});
		res.redirect('/productDetail/' + req.params.id);
	},

	destroy: async (req, res) => {
		// const products = getProducts();
		// const indexProduct = products.findIndex(product => product.id == req.params.id);
		// products.splice(indexProduct, 1);
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		// res.redirect('/allProducts');

		await Promise.all([
			db.Product.destroy({
			  where: { id: req.params.id },
			}),
			db.Style.destroy({
			  where: { id: req.params.id },
			}),
			db.TypeOfBarrel.destroy({
			  where: { id: req.params.id },
			}),
			db.Store.destroy({
			  where: { id: req.params.id },
			}),
		  ]);
	  
		  res.redirect('/allProducts');
	}
};

module.exports = controller;