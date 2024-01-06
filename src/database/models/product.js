'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.ProductSegmentation, {
        foreignKey: 'products_segmentations_id',
        as: 'ProductSegmentation'
      });
      Product.belongsTo(models.ProductType, {
        foreignKey: 'products_types_id',
        as: 'ProductType'
      });
      Product.belongsTo(models.TypeOfBarrel, {
        foreignKey: 'barrels_types_id',
        as: 'TypeOfBarrel'
      });
      Product.belongsTo(models.Style, {
        foreignKey: 'styles_id',
        as: 'Styles'
      });
      Product.hasMany(models.Cart, {
        foreignKey: 'carts_id',
        as: 'Carts'
      });
      Product.belongsTo(models.Store, {
        foreignKey: 'stores_id',
        as: 'Stores'
      });
    }
  }
  Product.init({
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
  },
  discount: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  description: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  image: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "default.png"
  },
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  time_of_barrel: {
      type: DataTypes.STRING,
      allowNull: true
  },
  year: {
      type: DataTypes.INTEGER,
      allowNull: true
  },
  products_segmentations_id: {
    type: DataTypes.INTEGER
  },
  styles_id: {
    type: DataTypes.INTEGER
  },
  barrels_types_id: {
    type: DataTypes.INTEGER
  },
  products_types_id: {
    type: DataTypes.INTEGER
  },
  stores_id: {
    type: DataTypes.INTEGER
  }
  }, 
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};