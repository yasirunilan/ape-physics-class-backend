'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthClient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AuthClient.hasMany(models.AuthAccessToken);
      AuthClient.hasMany(models.AuthRefreshToken);
    }
  };
  AuthClient.init({
    clientId: DataTypes.STRING,
    grantType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AuthClient',
  });
  return AuthClient;
};
