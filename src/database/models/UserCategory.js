'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCategory.hasMany(models.User, {
        foreingKey: 'users_categories_id',
        as: 'users_categories'
      })
    }
  }
  UserCategory.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserCategory',
    tableName: 'user_categories',
    timestamps: false
  });
  return UserCategory;
};