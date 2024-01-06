'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Product, {
        foreingKey: 'product_id',
        as: 'products'
      });
      Cart.belongsTo(models.User, {
        foreingKey: 'user_id',
        as: 'users'
      });
      Cart.hasMany(models.Order, {
        foreingKey: 'cart_id',
        as: 'orders'
      });
    }
  }
  Cart.init({
    product_id: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Cart',
    tableName:'carts'
  });
  return Cart;
};