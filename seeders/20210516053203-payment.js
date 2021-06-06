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
    await queryInterface.bulkInsert('payments', [{
      id: 1,
      userId: 1,
      classCategoryId: 1,
      date: '2021-01-01',
      note: '',
      expireDate: '2021-01-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      userId: 1,
      classCategoryId: 1,
      date: '2021-02-01',
      note: '',
      expireDate: '2021-02-28',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      userId: 1,
      classCategoryId: 1,
      date: '2021-03-01',
      note: '',
      expireDate: '2021-03-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      userId: 1,
      classCategoryId: 1,
      date: '2021-04-01',
      note: '',
      expireDate: '2021-04-30',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 5,
      userId: 1,
      classCategoryId: 1,
      date: '2021-05-01',
      note: '',
      expireDate: '2021-05-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 6,
      userId: 1,
      classCategoryId: 1,
      date: '2021-01-01',
      note: '',
      expireDate: '2021-01-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 7,
      userId: 1,
      classCategoryId: 1,
      date: '2021-02-01',
      note: '',
      expireDate: '2021-02-28',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 8,
      userId: 1,
      classCategoryId: 1,
      date: '2021-03-01',
      note: '',
      expireDate: '2021-03-31',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 9,
      userId: 1,
      classCategoryId: 1,
      date: '2021-04-01',
      note: '',
      expireDate: '2021-04-30',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 10,
      userId: 1,
      classCategoryId: 1,
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
    await queryInterface.bulkDelete('payments', null, {});
  }
};
