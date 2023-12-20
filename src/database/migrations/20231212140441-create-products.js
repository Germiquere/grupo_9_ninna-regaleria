'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },
      discount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      time_of_barrel:{
        type: Sequelize.STRING(255),
        allowNull: true
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      products_segmentations_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products_segmentations'
          },
          key: 'id'
        },
      },
      styles_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'styles'
          },
          key: 'id'
        },
      },
      barrels_types_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'barrels_types'
          },
          key: 'id'
        },
      },
      products_types_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products_types'
          },
          key: 'id'
        },
      },
      stores_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'stores'
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
    await queryInterface.dropTable('products');
  }
};