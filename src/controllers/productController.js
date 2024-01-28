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
	wines: (req, res) => {
		db.Product.findAll({
			include: [
				{ association: 'Stores' },
				{ association: 'TypeOfBarrel' },
				{ association: 'ProductType' },
				{ association: 'Styles' }
			]
		})
		.then(function(products) {
			res.render('./products/wine', { products: products });
		})
	},
	beers: (req, res) => {
		db.Product.findAll({
			include: [
				{ association: 'Stores' },
				{ association: 'TypeOfBarrel' },
				{ association: 'ProductType' },
				{ association: 'Styles' }
			]
		})
		.then(function(products) {
			res.render('./products/beer', { products: products });
		})
	},
	whiskies: (req, res) => {
		db.Product.findAll({
			include: [
				{ association: 'Stores' },
				{ association: 'TypeOfBarrel' },
				{ association: 'ProductType' },
				{ association: 'Styles' }
			]
		})
		.then(function(products) {
			res.render('./products/whisky', { products: products });
		})
	},
	spirits: (req, res) => {
		db.Product.findAll({
			include: [
				{ association: 'Stores' },
				{ association: 'TypeOfBarrel' },
				{ association: 'ProductType' },
				{ association: 'Styles' }
			]
		})
		.then(function(products) {
			res.render('./products/spirits', { products: products });
		})
	},
    
	cart(req, res) {
        res.render('./products/productCart')
    },
    detail: (req, res) => {
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

	async store (req, res) {
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

	async edit(req, res) {
		try {
			const products = await db.Product.findByPk(req.params.id, {
					include: [
						{ association: 'Stores' },
						{ association: 'TypeOfBarrel' },
						{ association: 'ProductType' },
						{ association: 'Styles' },
						{ association: 'ProductSegmentation'}]
			});
			const stores = await db.Store.findAll();
			const typeOfBarrel = await db.TypeOfBarrel.findAll();
			const productType = await db.ProductType.findAll();
			const styles = await db.Style.findAll();
			const productSegmentation = await db.ProductSegmentation.findAll();
			return res.render('./products/product-edit-form', { Product: products, stores, typeOfBarrel, productType, styles, productSegmentation});
		} catch (error) {
			return res.status(500).send(error);
		}
	},

	async update (req, res) {
		try {
            await db.Product.update({ ...req.body }, { where: { id: req.params.id } });
            return res.redirect('/productDetail/' + req.params.id);
        } catch (error) {
            return res.status(500).send(error);
        }	
	},

	async destroy(req, res) {
		try {		  
				const product = await db.Product.findByPk(req.params.id);
			
				if (!product) {
				return res.status(404).send('Producto no encontrado');
				}
			
				const style = product.styles_id;
				const typeOfBarrel = product.barrels_types_id;
				const store = product.stores_id;
			
				await Promise.all([
				db.Product.destroy({
					where: { id: req.params.id },
				}),
				db.Style.destroy({
					where: { id: style },
				}),
				db.TypeOfBarrel.destroy({
					where: { id: typeOfBarrel },
				}),
				db.Store.destroy({
					where: { id: store },
				}),
				]);
			
				res.redirect('/allProducts');
			} catch (error) {
				console.error(error);
				res.status(500).send('Error interno del servidor');
			}
			}
};

module.exports = controller;