'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userClassCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userClassCategory.init({
    userId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'userClassCategory',
  });
  return userClassCategory;
};
