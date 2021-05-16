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
    await queryInterface.bulkInsert('Payments', [{
      id: 1,
      date: '2021-01-01',
      note: '',
      expireDate: '2021-01-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      date: '2021-02-01',
      note: '',
      expireDate: '2021-02-28',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      date: '2021-03-01',
      note: '',
      expireDate: '2021-03-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      date: '2021-04-01',
      note: '',
      expireDate: '2021-04-30',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      date: '2021-05-01',
      note: '',
      expireDate: '2021-05-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      date: '2021-01-01',
      note: '',
      expireDate: '2021-01-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 7,
      date: '2021-02-01',
      note: '',
      expireDate: '2021-02-28',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 8,
      date: '2021-03-01',
      note: '',
      expireDate: '2021-03-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 9,
      date: '2021-04-01',
      note: '',
      expireDate: '2021-04-30',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 10,
      date: '2021-05-01',
      note: '',
      expireDate: '2021-05-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Payments', null, {});
  }
};