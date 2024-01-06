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
        foreignKey: 'styles_id',
        as: 'styles'
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
  },
    {
      sequelize,
      modelName: 'Style',
      tableName: 'styles',
      timestamps: false
    });
  return Style;
};