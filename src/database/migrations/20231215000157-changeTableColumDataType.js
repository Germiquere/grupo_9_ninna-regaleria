'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn('Products', 'name', {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn('Products', 'store', {
      type: Sequelize.STRING,
    });
    await queryInterface.changeColumn('Products', 'price', {
      type: Sequelize.DECIMAL(10,2),
      allowNull: false
    });
    await queryInterface.changeColumn('Products', 'discount', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    await queryInterface.changeColumn('Products', 'year', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('Products', 'stock', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('Users', 'age', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.changeColumn('Users', 'dni', {
      type: Sequelize.INTEGER,
      unique: true
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
