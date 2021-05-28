'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authClient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      authClient.hasMany(models.authAccessToken);
      authClient.hasMany(models.authRefreshToken);
    }
  };
  authClient.init({
    clientId: DataTypes.STRING,
    grantType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'authClient',
  });
  return authClient;
};
