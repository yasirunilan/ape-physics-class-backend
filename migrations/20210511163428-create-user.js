'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      nic: {
        type: Sequelize.STRING
      },
      phoneMain: {
        type: Sequelize.STRING
      },
      phoneExtra: {
        type: Sequelize.STRING
      },
      homePhone: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      examYear: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      userRoleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User has a UserRole
          model: 'userRoles',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      profilePicture: {
        type: Sequelize.BLOB('Medium')
      },
      profilePictureImageType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
