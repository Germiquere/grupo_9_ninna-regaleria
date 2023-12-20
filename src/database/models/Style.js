'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Style extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Style.hasMany(models.Product, {
        foreignKey: 'style_id',
        as:'products'
      })
      Style.belongsTo(models.ProductType, {
        foreignKey: 'product_type_id',
        as:'product_type'
      })
    }
  }
  Style.init({
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
  product_type_id: {
    type: DataTypes.INTEGER
  }
  }, 
  {
    sequelize,
    modelName: 'Style',
    tableName: 'styles',
    timestamps: false
  });
  return Style;
};