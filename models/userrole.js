'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        userRole.hasMany(models.user, {
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }
  };
    userRole.init({
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
    modelName: 'userRole',
  });
  return userRole;
};
