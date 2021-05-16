'use strict';
var bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.UserRole)
      User.belongsToMany(models.ClassCategory, { through: models.UserClassCategory })
      User.hasMany(models.AuthAccessToken)
      User.hasMany(models.AuthRefreshToken)
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
  User.init({
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
    modelName: 'User',
  });
  return User;
};
