'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserClassCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserClassCategory.init({
    userId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserClassCategory',
  });
  return UserClassCategory;
};
