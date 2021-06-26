'use strict';
let bcrypt = require('bcryptjs');
let dataUriToBuffer = require('data-uri-to-buffer');

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
      user.hasMany(models.authAccessToken)
      user.hasMany(models.payment)
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
    userRoleId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    profilePicture: {
      type: DataTypes.BLOB('Medium'),
      get() {
        let profilePicture = this.getDataValue('profilePicture');
        if(profilePicture){
          let profilePictureBase64Content = profilePicture.toString('base64');
          let profilePictureImageType = this.getDataValue('profilePictureImageType')
          let profilePictureFullBase64 = 'data:'+profilePictureImageType+';base64,'+profilePictureBase64Content;
          return profilePictureFullBase64;
        }else{
          return profilePicture;
        }
      },
      set (data){
        let decoded = dataUriToBuffer(data);
        this.setDataValue('profilePicture', decoded);
      },
    },
    profilePictureImageType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
    hooks: {
      beforeSave: (user, options) => {
        if(user.getDataValue('password')){
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.getDataValue('password'), salt);
        }
      },
    }
  });
  return user;
};
