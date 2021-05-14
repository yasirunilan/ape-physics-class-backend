'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class McqPaper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  McqPaper.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'McqPaper',
  });
  return McqPaper;
};