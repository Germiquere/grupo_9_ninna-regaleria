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
      TypeOfBarrel.hasMany(models.Product, {
        foreignKey: 'barrels_types_id',
        as:'TypeOfBarrel'
      })
    }
  }
  TypeOfBarrel.init({
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
    modelName: 'TypeOfBarrel',
    tableName: 'barrels_types',
    timestamps: false
  });
  return TypeOfBarrel;
};