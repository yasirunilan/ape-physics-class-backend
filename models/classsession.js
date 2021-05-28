'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class classSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      classSession.belongsTo(models.classCategory)
    }
  };
  classSession.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    link: DataTypes.STRING,
    classCategoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'classSession'
  })
  return classSession
}
