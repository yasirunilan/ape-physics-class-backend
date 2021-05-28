'use strict';
var bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.userRole)
      user.belongsToMany(models.classCategory, { through: models.userClassCategory })
      user.hasMany(models.authAccessToken)
      user.hasMany(models.authRefreshToken)
    }
    static comparePassword(password, hash, callback){
      bcrypt.compare(password, hash, function(err, isMatch) {
        if(err) {
          return callback(err, null);
        } else {
          callback(null, isMatch);
        }
      });
    }
  };
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    nic: DataTypes.STRING,
    phoneMain: DataTypes.STRING,
    phoneExtra: DataTypes.STRING,
    homePhone: DataTypes.STRING,
    city: DataTypes.STRING,
    examYear: DataTypes.STRING,
    address: DataTypes.STRING,
    userRoleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
