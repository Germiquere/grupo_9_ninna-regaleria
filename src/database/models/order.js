'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.PaymentMethod, {
        foreignKey: 'payment_method_id',
        as:'payment_method'
      }),
      Order.belongsTo(models.Cart, {
        foreignKey: 'cart_id',
        as:'carts'
      })
    }
  }
  Order.init({
    user_id: {
      type: DataTypes.INTEGER,
    },
    cart_id: {
      type: DataTypes.INTEGER,
    },
    paymentmethod_id: {
      type: DataTypes.INT,
    },
    total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Order;
};