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
    await queryInterface.bulkInsert('products', [
      {
        name: "Quilmes",
        price: 120,
        discount: 0.1,
        description: "Cerveza rubia argentina",
        stock: 100,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 1
      },
      {
        name: "Patagonia",
        price: 150,
        discount: 0.05,
        description: "Cerveza de la Patagonia Argentina",
        stock: 80,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 2
      },
      {
        name: "Andes",
        price: 130,
        discount: 0.15,
        description: "Cerveza tradicional argentina",
        stock: 120,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 3
      },
      {
        name: "Antares",
        price: 180,
        discount: 0.2,
        description: "Cerveza artesanal argentina",
        stock: 50,
        products_segmentations_id: 1,
        styles_id: 2,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 1
      },
      {
        name: "Stella Artois",
        price: 160,
        discount: 0.1,
        description: "Cerveza belga",
        stock: 90,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 2
      },
      {
        name: "Palermo",
        price: 140,
        discount: 0.05,
        description: "Cerveza de barrio",
        stock: 110,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 3
      },
      {
        name: "Isenbeck",
        price: 110,
        discount: 0.1,
        description: "Cerveza alemana en Argentina",
        stock: 70,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 1
      },
      {
        name: "Imperial",
        price: 190,
        discount: 0.15,
        description: "Cerveza de origen costa ricense",
        stock: 60,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 2
      },
      {
        name: "Brahma",
        price: 170,
        discount: 0.2,
        description: "Cerveza brasileña",
        stock: 100,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 3
      },
      {
        name: "Schneider",
        price: 200,
        discount: 0.1,
        description: "Cerveza de origen alemán",
        stock: 80,
        products_segmentations_id: 1,
        styles_id: 1,
        barrels_types_id: null,
        products_types_id: 1,
        stores_id: 1
      },
      {
        name: "Cabernet Sauvignon",
        price: 250,
        discount: 0.1,
        description: "Vino tinto argentino",
        stock: 30,
        products_segmentations_id: 2,
        styles_id: null,
        barrels_types_id: null,
        products_types_id: 2,
        stores_id: 1
      },
      {
        name: "Bodega Catena Zapata",
        price: 29.99,
        discount: 0.25,
        description: "Vinos de alta calidad",
        stock: 50,
        products_segmentations_id: 2,
        styles_id: null,
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 4
      },
      {
        name: "Johnnie Walker",
        price: 39.99,
        discount: 0.3,
        description: "Whisky escocés de renombre",
        stock: 60,
        products_segmentations_id: 3,
        styles_id: null,
        barrels_types_id: 2,
        products_types_id: 2,
        stores_id: 5
      },
      {
        name: "Bacardi",
        price: 24.99,
        discount: 0.18,
        description: "Ron ligero y versátil",
        stock: 70,
        products_segmentations_id: 3,
        styles_id: null,
        barrels_types_id: null,
        products_types_id: 3,
        stores_id: 6
      },
      {
        name: "Ginebra",
        price: 34.99,
        discount: 0.15,
        description: "Ginebra clásica",
        stock: 90,
        products_segmentations_id: 3,
        styles_id: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 7
      },
      {
        name: "Malbec",
        price: 19.99,
        discount: 0.2,
        description: "Vino tinto argentino",
        stock: 40,
        products_segmentations_id: 2,
        styles_id: null,
        barrels_types_id: 1,
        products_types_id: 1,
        stores_id: 8
      },
      {
        name: "Macallan",
        price: 49.99,
        discount: 0.25,
        description: "Whisky de malta escocés",
        stock: 55,
        products_segmentations_id: 3,
        styles_id: null,
        barrels_types_id: 2,
        products_types_id: 2,
        stores_id: 9
      },
      {
        name: "Absolut",
        price: 29.99,
        discount: 0.15,
        description: "Vodka sueco premium",
        stock: 75,
        products_segmentations_id: 3,
        styles_id: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 10
      },
      {
        name: "Tequila",
        price: 39.99,
        discount: 0.2,
        description: "Tequila 100% de agave",
        stock: 65,
        products_segmentations_id: 3,
        styles_id: null,
        barrels_types_id: null,
        products_types_id: 4,
        stores_id: 11
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
    await queryInterface.bulkDelete('products', null, {});
  }
};
