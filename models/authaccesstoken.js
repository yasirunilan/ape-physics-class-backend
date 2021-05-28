'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authAccessToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      authAccessToken.belongsTo(models.authClient)
      authAccessToken.belongsTo(models.user)
    }
  };
  authAccessToken.init({
    token: DataTypes.STRING,
    authClientId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    expires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'authAccessToken',
  });
  return authAccessToken;
};
