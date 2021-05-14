'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClassCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClassCategory.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fee: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ClassCategory',
  });
  return ClassCategory;
};