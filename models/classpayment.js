'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classPayment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        classPayment.belongsTo(models.payment)
        classPayment.hasOne(models.userClassCategory)
    }
  };
  classPayment.init({
    paymentId: DataTypes.INTEGER,
    userClassCategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'classPayment',
  });
  return classPayment;
};
