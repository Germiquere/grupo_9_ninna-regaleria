'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategory.hasMany(models.Product, {
        foreignKey: 'product_category_id',
        as: 'products'
      })
    }
  }
  ProductCategory.init({
  id: {
      type: DataTypes.BIGINT(10).UNSIGNED,
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
    modelName: 'ProductCategory',
    tableName: 'products_categories',
    timestamps: false
  });
  return ProductCategory;
};