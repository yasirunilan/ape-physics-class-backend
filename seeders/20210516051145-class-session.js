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
    await queryInterface.bulkInsert('classSessions', [{
      id: 1,
      name: '2021-01-07',
      description: '2021-01-07 Class',
      date: '2021-01-07',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      documents: "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",
      classCategoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: '2021-01-14',
      description: '2021-01-14 Class',
      date: '2021-01-14',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      classCategoryId: 1,
      documents: "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: '2021-01-21',
      description: '2021-01-21 Class',
      date: '2021-01-21',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      classCategoryId: 1,
      documents: "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 4,
        name: '2021-01-28',
        description: '2021-01-28 Class',
        date: '2021-01-28',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        name: '2021-02-04',
        description: '2021-02-04 Class',
        date: '2021-02-04',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: '2021-04-01',
        description: '2021-04-01 Class',
        date: '2021-04-01',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: '2021-04-08',
        description: '2021-04-08 Class',
        date: '2021-04-08',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: '2021-04-15',
        description: '2021-04-15 Class',
        date: '2021-04-15',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        documents: "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: '2021-04-22',
        description: '2021-04-22 Class',
        date: '2021-04-22',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: '2021-04-29',
        description: '2021-04-29 Class',
        date: '2021-04-29',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: '2021-05-06',
        description: '2021-05-06 Class',
        date: '2021-05-06',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: '2021-05-13',
        description: '2021-05-13 Class',
        date: '2021-05-13',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: '2021-05-20',
        description: '2021-05-20 Class',
        date: '2021-05-20',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: '2021-05-27',
        description: '2021-05-27 Class',
        date: '2021-05-27',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: '2021-04-15',
        description: '2021-04-15 Class',
        date: '2021-04-15',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 2,
        documents: "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        name: '2021-04-22',
        description: '2021-04-22 Class',
        date: '2021-04-22',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        name: '2021-04-29',
        description: '2021-04-29 Class',
        date: '2021-04-29',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        name: '2021-05-06',
        description: '2021-05-06 Class',
        date: '2021-05-06',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        name: '2021-05-13',
        description: '2021-05-13 Class',
        date: '2021-05-13',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        name: '2021-05-20',
        description: '2021-05-20 Class',
        date: '2021-05-20',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        name: '2021-05-27',
        description: '2021-05-27 Class',
        date: '2021-05-27',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        name: '2021-04-15',
        description: '2021-04-15 Class',
        date: '2021-04-15',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 3,
        documents: "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        name: '2021-04-22',
        description: '2021-04-22 Class',
        date: '2021-04-22',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        name: '2021-04-29',
        description: '2021-04-29 Class',
        date: '2021-04-29',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        name: '2021-05-06',
        description: '2021-05-06 Class',
        date: '2021-05-06',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        name: '2021-05-13',
        description: '2021-05-13 Class',
        date: '2021-05-13',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        name: '2021-05-20',
        description: '2021-05-20 Class',
        date: '2021-05-20',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        name: '2021-05-27',
        description: '2021-05-27 Class',
        date: '2021-05-27',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        classCategoryId: 3,
        documents: "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",
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
    await queryInterface.bulkDelete('classSessions', null, {});
  }
};
