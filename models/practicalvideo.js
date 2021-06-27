'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class practicalVideo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  practicalVideo.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING,
    documents: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'practicalVideo',
  });
  return practicalVideo;
};
