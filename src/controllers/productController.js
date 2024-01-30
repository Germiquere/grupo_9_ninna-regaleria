const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const {validationResult} = require('express-validator');

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
			.then(function (products) {
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
			.then(function (products) {
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
			.then(function (products) {
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
			.then(function (products) {
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
			.then(function (products) {
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
			.then(function (products) {
				res.render('./products/productDetail', { products });
			})
	},
	create: (req, res) => {
		console.log(req.session.user)
		return Promise.all([
			db.ProductSegmentation.findAll(),
			db.ProductType.findAll()
		])
			.then(([productSegmentation, productType]) => {
				return res.render('./products/product-create-form', { productSegmentation, productType });
			});
	},

	async store(req, res) {
		try {
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.render('./products/product-create-form', {
					errors: errors.mapped(),
					oldData: req.body
				});
			}

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
		} catch (error) {
			console.error(error);
			res.status(500).send('Error interno del servidor');
		}
	},

	async edit(req, res) {
		try {
			const products = await db.Product.findByPk(req.params.id, {
				include: [
					{ association: 'Stores' },
					{ association: 'TypeOfBarrel' },
					{ association: 'ProductType' },
					{ association: 'Styles' },
					{ association: 'ProductSegmentation' }]
			});
			const stores = await db.Store.findAll();
			const typeOfBarrel = await db.TypeOfBarrel.findAll();
			const productType = await db.ProductType.findAll();
			const styles = await db.Style.findAll();
			const productSegmentation = await db.ProductSegmentation.findAll();
			return res.render('./products/product-edit-form', { Product: products, stores, typeOfBarrel, productType, styles, productSegmentation });
		} catch (error) {
			return res.status(500).send(error);
		}
	},

	async update(req, res) {
		console.log(req.body)
		try {

			const product = await db.Product.findByPk(req.params.id);

			if (!product) {
				return res.status(404).send('Producto no encontrado');
			}

			const style = product.styles_id;
			const typeOfBarrel = product.barrels_types_id;
			const store = product.stores_id;

			await Promise.all([
				db.Style.update({ name: req.body.grape }, { where: { id: style } }),
				db.TypeOfBarrel.update({ name: req.body.typeOfBarrel }, { where: { id: typeOfBarrel } }),
				db.Store.update({ name: req.body.store }, { where: { id: store } }),
			]);

			const idProducType = await db.ProductType.findOne({where: {name: req.body.type}})
			const idProducSegmentation = await db.ProductSegmentation.findOne({where: {name: req.body.category}})
			console.log(idProducType)

			await db.Product.update({
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				description: req.body.description,
				image: req.file ? req.file.filename : product.image,
				stock: req.body.stock,
				time_of_barrel: req.body.timeInBarrel,
				year: req.body.year,
				products_segmentations_id: idProducSegmentation.id,
				products_types_id: idProducType.id
			}, { where: { id: req.params.id } });
			
			return res.redirect('/productDetail/' + req.params.id);
		} catch (error) {
			return res.status(500).send(error);
		}
	},

	async destroy(req, res) {
		try {
			const productId = req.params.id;

			// Buscar el producto
			const product = await db.Product.findByPk(productId);
			if (!product) {
				return res.status(404).send('Producto no encontrado');
			}

			// Obtener las referencias a los datos en las tablas asociadas
			const styleReferences = await db.Product.count({ where: { styles_id: product.styles_id } });
			const typeOfBarrelReferences = await db.Product.count({ where: { barrels_types_id: product.barrels_types_id } });
			const storeReferences = await db.Product.count({ where: { stores_id: product.stores_id } });

			// Eliminar el producto principal
			await db.Product.destroy({
				where: { id: productId },
			});

			// Eliminar registros en las tablas asociadas solo si no están referenciados por otros productos
			if (styleReferences === 0) {
				await db.Style.destroy({
					where: { id: product.styles_id },
				});
			}

			if (typeOfBarrelReferences === 0) {
				await db.TypeOfBarrel.destroy({
					where: { id: product.barrels_types_id },
				});
			}

			if (storeReferences === 0) {
				await db.Store.destroy({
					where: { id: product.stores_id },
				});
			}

			res.redirect('/allProducts');
		} catch (error) {
			console.error(error);
			res.status(500).send('Error interno del servidor');
		}
	}
}

module.exports = controller;