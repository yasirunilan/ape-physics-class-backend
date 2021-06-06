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
    await queryInterface.bulkInsert('classCategories', [{
      id: 1,
      name: '2021 Theory/Revision',
      description: '2021 Theory/Revision Class',
      fee: '2500',
      active: 1,
      isOnlyPaymentCategory: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: '2021 Theory',
      description: '2021 Theory Class',
      fee: '1500',
      active: 1,
      isOnlyPaymentCategory: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: '2021 Revision',
      description: '2021 Revision Class',
      fee: '1000',
      active: 1,
      isOnlyPaymentCategory: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 4,
        name: '2022 Theory',
        description: '2022 Theory Class',
        fee: '1500',
        active: 1,
        isOnlyPaymentCategory: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        name: '2023 Theory',
        description: '2023 Theory Class',
        fee: '1500',
        active: 1,
        isOnlyPaymentCategory: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 6,
        name: '2020 Theory',
        description: '2020 Theory Class',
        fee: '1500',
        active: 0,
        isOnlyPaymentCategory: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 7,
        name: 'Practical Videos',
        description: 'Practical Videos',
        fee: '',
        active: 1,
        isOnlyPaymentCategory: 1,
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
    await queryInterface.bulkDelete('classCategories', null, {});
  }
};
