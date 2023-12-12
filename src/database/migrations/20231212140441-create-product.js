'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      store: {
        type: Sequelize.STRING,
        allowNull: true
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      discount: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      type_of_barrel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'type_of_barrels'
          },
          key: 'id'
        },
      },
      time_of_barrel:{
        type: Sequelize.BIGINT,
        allowNull: true
      },
      style_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'styles'
          },
          key: 'id'
        },
      },
      year: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      stock: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      product_category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'product_categories'
          },
          key: 'id'
        },
      },
      product_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'product_type'
          },
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};