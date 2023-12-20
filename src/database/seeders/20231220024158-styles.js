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
    await queryInterface.bulkInsert('styles', [{
      name: "Cabernet Sauvignon",
    },
    {
      name: "Merlot",
    },
    {
      name: "Chardonnay",
    },
    {
      name: "Pinot Noir",
    },
    {
      name: "Sauvignon Blanc",
    },
    {
      name: "Syrah",
    },
    {
      name: "Bonarda",
    },
    {
      name: "Malbec",
    },
    {
      name: "Tempranillo",
    },
    {
      name: "Tannat",
    },
    {
      name: "IPA"
    },
    {
      name: "Rubia"
    },
    {
      name: "Roja"
    },
    {
      name: "Stout"
    },
    {
      name: "Pilsner"
    },
    {
      name: "Amber Ale"
    },
    {
      name: "Saison"
    },
    {
      name: "Porter"
    },
    {
      name: "Pale Ale"
    },
    {
      name: "Doble IPA"
    },
    {
      name: "Aperitivo"
    },
    {
      name: "Ron"
    },
    {
      name: "Ginebra"
    },
    {
      name: "Vodka"
    },
    {
      name: "Tequila"
    },
    {
      name: "Brandy"
    },
    {
      name: "Cognac"
    },
    {
      name: "Licor de Café"
    },
    {
      name: "Absenta"
    },
    {
      name: "Anís"
    },
    {
      name: "Fernet"
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
    await queryInterface.bulkDelete('styles', null, {});
  }
};
