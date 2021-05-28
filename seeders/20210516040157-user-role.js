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
    await queryInterface.bulkInsert('userRoles', [{
      id: 1,
      name: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: 'Editor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: 'Student',
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
    await queryInterface.bulkDelete('userRoles', null, {});
  }
};
