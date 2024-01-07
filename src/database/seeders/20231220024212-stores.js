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
    await queryInterface.bulkInsert('stores', [
      {
        name: "Bodega Catena Zapata"
      },
      {
        name: "Bodega Norton"
      },
      {
        name: "Bodega Trapiche"
      },
      {
        name: "Bodega Luigi Bosca"
      },
      {
        name: "Bodega Zuccardi"
      },
      {
        name: "Bodega Salentein"
      },
      {
        name: "Bodega Terrazas de los Andes"
      },
      {
        name: "Bodega Achával-Ferrer"
      },
      {
        name: "Bodega Rutini"
      },
      {
        name: "Bodega Altos Las Hormigas"
      },
      {
        name: "Johnnie Walker"
      },
      {
        name: "Macallan"
      },
      {
        name: "Glenfiddich"
      },
      {
        name: "Jack Daniel's"
      },
      {
        name: "Chivas Regal"
      },
      {
        name: "Jameson"
      },
      {
        name: "Balvenie"
      },
      {
        name: "Ardbeg"
      },
      {
        name: "Laphroaig"
      },
      {
        name: "Highland Park"
      },
      {
        name: "Quilmes"
      },
      {
        name: "Patagonia"
      },
      {
        name: "Andes"
      },
      {
        name: "Antares"
      },
      {
        name: "Stella Artois"
      },
      {
        name: "Palermo"
      },
      {
        name: "Isenbeck"
      },
      {
        name: "Imperial"
      },
      {
        name: "Brahma"
      },
      {
        name: "Schneider"
      },
      {
        name: "Bacardi"
      },
      {
        name: "Havana Club"
      },
      {
        name: "Absolut"
      },
      {
        name: "Patrón"
      },
      {
        name: "Baileys"
      },
      {
        name: "Hennessy"
      },
      {
        name: "Campari"
      },
      {
        name: "Gancia"
      },
      {
        name: "Cusenier"
      },
      {
        name: "Branca"
      },
      {
        name: "Bodega Trivento"
      },
      {
        name: "Finca Las Moras"
      },
      {
        name: "Aleanna"
      },
      {
        name: "The Singleton"
      },
      {
        name: "Talisker"
      },
      {
        name: "Clynelish"
      },
      {
        name: "Peters"
      },
      {
        name: "Smirnoff"
      },
      {
        name: "Bodega Banegas"
      },
      {
        name: "Piattelli"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('stores', null, {});
  }
};
