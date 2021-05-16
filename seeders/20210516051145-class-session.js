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
    await queryInterface.bulkInsert('ClassSessions', [{
      id: 1,
      name: '2021-01-07',
      description: '2021-01-07 Class',
      date: '2021-01-07',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: '2021-01-14',
      description: '2021-01-14 Class',
      date: '2021-01-14',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: '2021-01-21',
      description: '2021-01-21 Class',
      date: '2021-01-21',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 4,
        name: '2021-01-28',
        description: '2021-01-28 Class',
        date: '2021-01-28',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        name: '2021-02-04',
        description: '2021-02-04 Class',
        date: '2021-02-04',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
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
    await queryInterface.bulkDelete('ClassSessions', null, {});
  }
};
