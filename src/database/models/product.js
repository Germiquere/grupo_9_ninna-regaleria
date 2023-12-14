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
      Product.belongsTo(models.ProductCategory, {
        foreingKey: 'product_category_id',
        as: 'products_categories'
      });
      Product.belongsTo(models.ProductType, {
        foreingKey: 'products_type_id',
        as: 'products_type'
      });
      Product.belongsTo(models.TypeOfBarrel, {
        foreingKey: 'types_of_barrel_id',
        as: 'types_of_barrels'
      });
      Product.belongsTo(models.Style, {
        foreingKey: 'style_id',
        as: 'styles'
      });
      Product.hasMany(models.Cart, {
        foreingKey: 'product_id',
        as: 'carts'
      });

    }
  }
  Product.init({
  id: {
      type: DataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  store: {
      type: DataTypes.STRING,
      allowNull: false
  },
  price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
  },
  discount: {
      type: DataTypes.INT,
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
      type: DataTypes.INT,
      allowNull: false
  },
  time_of_barrel: {
      type: DataTypes.STRING,
      allowNull: true
  },
  year: {
      type: DataTypes.INT,
      allowNull: true
  },
  products_category_id: {
    type: DataTypes.INT.UNSIGNED
  },
  products_type_id: {
    type: DataTypes.INT.UNSIGNED
  },
  styles_id: {
    type: DataTypes.INT.UNSIGNED
  },
  types_of_barrel: {
    type: DataTypes.INT.UNSIGNED
  }
  }, 
  {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};