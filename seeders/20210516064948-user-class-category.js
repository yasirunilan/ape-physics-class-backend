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
    await queryInterface.bulkInsert('userClassCategories', [{
      id: 1,
      userId: 1,
      classId: 1,
      paymentId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 2,
        userId: 1,
        classId: 1,
        paymentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        userId: 1,
        classId: 1,
        paymentId: 3,
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
    await queryInterface.bulkDelete('userClassCategories', null, {});
  }
};
