'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthRefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AuthRefreshToken.belongsTo(models.AuthClient)
      AuthRefreshToken.belongsTo(models.User)
    }
  };
  AuthRefreshToken.init({
    token: DataTypes.STRING,
    authClientId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    expires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AuthRefreshToken',
  });
  return AuthRefreshToken;
};
