'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeOfBarrel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TypeOfBarrel.hasMany(models.Products, {
        foreignKey: 'types_of_barrel_id',
        as:'products'
      })
    }
  }
  TypeOfBarrel.init({
  id: {
      type: DataTypes.INT.UNSIGNED,
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
    modelName: 'TypeOfBarrel',
    tableName: 'types_of_barrels',
    timestamps: false
  });
  return TypeOfBarrel;
};