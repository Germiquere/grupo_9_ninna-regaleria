'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        ProductType.hasMany(models.Product, {
            foreignKey: 'products_type_id',
            as: 'products'
        })
        ProductType.belongsTo(models.Style, {
          foreignKey: 'product_type_id',
          as:'product_type'
        })
      // define association here
    }
  }
  ProductType.init({
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  }
  }, 
  {
    sequelize,
    modelName: 'ProductType',
    tableName: 'products_type',
    timestamps: false
  });
  return ProductType;
};