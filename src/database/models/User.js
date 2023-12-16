'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.UserCategory, {
        foreingKey: 'users_categories_id',
        as:'user_categories'
      })
      User.hasMany(models.Cart, {
        foreingKey: 'users_id',
        as:'carts'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "user-default.png"
    },
    users_categories_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashSync(user.password, 10);
      }
    }
  });
  return User;
};