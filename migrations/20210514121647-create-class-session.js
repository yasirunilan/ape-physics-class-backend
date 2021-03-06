'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classSessions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
        description: {
            type: Sequelize.STRING
        },
      date: {
        type: Sequelize.DATE
      },
      link: {
        type: Sequelize.STRING
      },
      documents: {
        type: Sequelize.TEXT
      },
      classCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // Class Session has a Class Category
          model: 'classCategories',
          key: 'id'
        }
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
    await queryInterface.dropTable('classSessions');
  }
};
