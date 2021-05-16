'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        UserRole.hasMany(models.User, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }
  };
  UserRole.init({
    name: DataTypes.STRING
  }, {
      hooks: {
          beforeSave: (user, options) => {
              if(user.password){
                  const salt = bcrypt.genSaltSync();
                  user.password = bcrypt.hashSync(user.password, salt);
              }
          }
      },
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};
