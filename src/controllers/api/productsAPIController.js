const db = require('../../database/models');
const sequelize = db.sequelize;

const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll({
			include: ['Stores', 'TypeOfBarrel', 'ProductType', 'Styles', 'ProductSegmentation']
		})
            .then(product => {
                res.json(
                    {
                    count: product.length,
                    countByCategory: {
                        wine: product.filter(objeto => objeto.products_types_id === 1).length,
                        whisky: product.filter(objeto => objeto.products_types_id === 2).length,
                        beer: product.filter(objeto => objeto.products_types_id === 3).length,
                        spirit: product.filter(objeto => objeto.products_types_id === 4).length
                    },
                    products: product.map(product => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        types: product.ProductType.name,
                        image: 'http://localhost:'+process.env.PORT+'/images/products/' + product.image,
                        detail: '/products/detail/'+product.id
                    }))
                    }
                )
                });
        },
        'detail': (req, res) => {
            db.Product.findByPk(req.params.id, {
                include: ['Stores', 'TypeOfBarrel', 'ProductType', 'Styles', 'ProductSegmentation']
            })
            .then(product => {
                res.json(product)
            })
        },
        'lastCreated': (req, res) => {
            const lastCreatedProduct = db.Product.findOne({
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then(product => {
                res.json (product)
            })

            return lastCreatedProduct;
        }
    }

module.exports = productsAPIController;