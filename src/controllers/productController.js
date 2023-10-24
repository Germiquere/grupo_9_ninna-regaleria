const controller = {
    cart: (req, res) => {
        res.render('./products/productCart')
    },
    detail: (req, res) => {
        res.render('./products/productDetail');
    },

    /* PRODUCT CREATE */
    create: (req, res) => {
        res.render('./products/product-create-form');
    },
    store: (req, res) => {
        res.render('./index');
    },
    edit: (req, res) => {
        res.render('./products/product-edit-form');
    },
    update: (req, res) => {
        res.render('./index');
    }
};


module.exports = controller;