'use strict';
const bcrypt = require('bcryptjs');

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
    const salt = bcrypt.genSaltSync();
    let pass = bcrypt.hashSync('12345', salt);
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      username: 'buddhi',
      password: pass,
      firstName: 'Buddhi',
      lastName: "Vikasitha",
      email: "buddhi@gmail.com",
      nic: "111212121212V",
      phoneMain: "0702132356",
      phoneExtra: "0702132357",
      homePhone: "0412273465",
      city: 'Matara',
      examYear: '2022',
      address: '"Wimalasewana", Hingurupanagala,Kotapola',
      userRoleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 2,
      username: 'yasiru',
      password: pass,
      firstName: 'Yasiru',
      lastName: "nilan",
      email: "yasiru@gmail.com",
      nic: "222222222V",
      phoneMain: "0702132850",
      phoneExtra: "0702132851",
      homePhone: "0702132852",
      city: 'Matara',
      examYear: '',
      address: '"Wimalasewana", Hingurupanagala,Kotapola',
      userRoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 3,
      username: 'nevil',
      password: pass,
      firstName: 'Nevil',
      lastName: "Krishan",
      email: "nevil@gmail.com",
      nic: "222222323V",
      phoneMain: "0712132356",
      phoneExtra: "0712132357",
      homePhone: "0422273465",
      city: 'Matara',
      examYear: '',
      address: '"Wimalasewana", Hingurupanagala,Kotapola',
      userRoleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      username: 'ythilina',
      password: pass,
      firstName: 'Thilina',
      lastName: "Kumarasinghe",
      email: "thilina@gmail.com",
      nic: "343423224V",
      phoneMain: "0722132356",
      phoneExtra: "0722132357",
      homePhone: "0432273465",
      city: 'Matara',
      examYear: '',
      address: '"Wimalasewana", Hingurupanagala,Kotapola',
      userRoleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        id: 5,
        username: 'eshan',
        password: pass,
        firstName: 'Eshan',
        lastName: "Pathirana",
        email: "eshan@gmail.com",
        nic: "35423432434V",
        phoneMain: "0732132356",
        phoneExtra: "0732132357",
        homePhone: "0442273465",
        city: 'Matara',
        examYear: '2022',
        address: '"Wimalasewana", Hingurupanagala,Kotapola',
        userRoleId: 3,
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
