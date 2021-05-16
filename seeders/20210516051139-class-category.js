'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('ClassCategories', [{
      id: 1,
      name: '2021 Theory/Revision',
      description: '2021 Theory/Revision Class',
      fee: '2500',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: '2021 Theory',
      description: '2021 Theory Class',
      fee: '1500',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: '2021 Revision',
      description: '2021 Revision Class',
      fee: '1000',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 4,
        name: '2022 Theory',
        description: '2022 Theory Class',
        fee: '1500',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        name: '2023 Theory',
        description: '2023 Theory Class',
        fee: '1500',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ClassCategories', null, {});
  }
};
