'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      classCategory.hasMany(models.classSession, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      classCategory.hasMany(models.payment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  classCategory.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    fee: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    isOnlyPaymentCategory: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'classCategory',
  });
  return classCategory;
};
