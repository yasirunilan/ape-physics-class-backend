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
    await queryInterface.bulkInsert('mcqClasses', [{
      id: 1,
      name: 'Reminder 1',
      description: 'MCQ Class 1 Description',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      documents: JSON.stringify({"Tute 1":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA', "Tute 2":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA'}),
      active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: 'Reminder 2',
      description: 'MCQ Class 2 Description',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      documents: JSON.stringify({"Tute 1":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA', "Tute 2":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA'}),
      active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: 'Reminder 3',
      description: 'MCQ Class 3 Description',
      link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
      documents: JSON.stringify({"Tute 1":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA', "Tute 2":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA'}),
      active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 4,
        name: 'Reminder 4',
        description: 'MCQ Class 4 Description',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        documents: JSON.stringify({"Tute 1":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA', "Tute 2":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA'}),
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        name: 'Reminder 5',
        description: 'MCQ Class 5 Description',
        link: 'https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1',
        documents: JSON.stringify({"Tute 1":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA', "Tute 2":'https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA'}),
        active: 1,
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
    await queryInterface.bulkDelete('mcqClasses', null, {});
  }
};
