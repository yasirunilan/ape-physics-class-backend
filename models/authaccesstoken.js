'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthAccessToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AuthAccessToken.belongsTo(models.AuthClient)
      AuthAccessToken.belongsTo(models.User)
    }
  };
  AuthAccessToken.init({
    token: DataTypes.STRING,
    authClientId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    expired: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AuthAccessToken',
  });
  return AuthAccessToken;
};
