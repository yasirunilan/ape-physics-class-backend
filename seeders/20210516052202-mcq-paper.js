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
    await queryInterface.bulkInsert('McqPapers', [{
      id: 1,
      name: 'MCQ Paper 1',
      description: 'MCQ Paper 1 Description',
      link: 'https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit',
      active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      name: 'MCQ Paper 2',
      description: 'MCQ Paper 2 Description',
      link: 'https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit',
      active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      name: 'MCQ Paper 3',
      description: 'MCQ Paper 3 Description',
      link: 'https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit',
      active: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 4,
        name: 'MCQ Paper 4',
        description: 'MCQ Paper 4 Description',
        link: 'https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit',
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: 5,
        name: 'MCQ Paper 5',
        description: 'MCQ Paper 5 Description',
        link: 'https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit',
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
    await queryInterface.bulkDelete('McqPapers', null, {});
  }
};
