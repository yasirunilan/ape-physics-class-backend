'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      classCategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'classCategories',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE
      },
      slipFileType: {
        type: Sequelize.BLOB
      },
      slip: {
        type: Sequelize.BLOB('Medium')
      },
      amount: {
        type: Sequelize.INTEGER
      },
      note: {
        type: Sequelize.STRING
      },
      expireDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('payments');
  }
};
