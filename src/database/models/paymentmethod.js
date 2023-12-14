'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentMethod.hasMany(models.Order, {
        foreignKey: 'payment_method_id',
        as:'payment_method'
      })
    }
  }
  PaymentMethod.init({
    name: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'PaymentMethod',
    tableName: 'payment_method',
    timestamps: false
  });
  return PaymentMethod;
};