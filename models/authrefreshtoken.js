'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class authRefreshToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      authRefreshToken.belongsTo(models.authClient)
      authRefreshToken.belongsTo(models.user)
    }
  };
  authRefreshToken.init({
    token: DataTypes.STRING,
    authClientId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    expires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'authRefreshToken',
  });
  return authRefreshToken;
};
