const { Op } = require('sequelize');
const db = require('../../database/models');
const sequelize = db.sequelize;

const productsAPIController = {
        'count': (req, res) => {
        db.Product.findAll({include: ['Stores', 'TypeOfBarrel', 'ProductType', 'Styles', 'ProductSegmentation']})
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
                    }
                )
                });
        },
 
        'list': (req, res) =>{

        const {page = 1} = req.query;
        
        db.Product.findAll({
            include: ['Stores', 'TypeOfBarrel', 'ProductType', 'Styles', 'ProductSegmentation'],
            limit: 5,
            offset: (Number(page)-1)*5
        })
        .then(product => {
            res.json(
                {
                    products: product.map(product => ({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    types: product.ProductType.name,
                    image: 'http://localhost:'+process.env.PORT+'/images/products/' + product.image,
                    detail: '/products/detail/'+product.id
                    }))
                })
        })
        },

        'detail': (req, res) => {
            db.Product.findByPk(req.params.id, {
                include: ['Stores', 'TypeOfBarrel', 'ProductType', 'Styles', 'ProductSegmentation']
            })
            .then(product => {
                res.send(product)
            })
        },

        'lastCreated': (req, res) => {
            db.Product.findOne({
                include: ['Stores', 'TypeOfBarrel', 'ProductType', 'Styles', 'ProductSegmentation'],
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            .then(lastCreatedProduct => {
                res.json(lastCreatedProduct);
            })
        },

        create: async (req, res) =>{
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
            })
        },
    }

module.exports = productsAPIController;