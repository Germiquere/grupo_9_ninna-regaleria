'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('barrels_types', [{
      name: 'Roble frances'
    },
    {
      name: 'Roble americano'
    },
    {
      name: 'Roble español'
    },
    {
      name: 'Acacia'
    },
    {
      name: 'Cerezo'
    },
    {
      name: 'Roble bourbon'
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('barrels_types', null, {});
  }
};
