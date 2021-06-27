'use strict';
const {
  Model
} = require('sequelize');
const dataUriToBuffer = require('data-uri-to-buffer');

module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment.belongsTo(models.user);
      payment.belongsTo(models.classCategory);
    }
  };
  payment.init({
    date: DataTypes.DATE,
    slip: {
      type: DataTypes.BLOB('Medium'),
      get() {
        let slip = this.getDataValue('slip');
        if(slip){
          let slipBase64Content = slip.toString('base64');
          let slipFileType = this.getDataValue('slipFileType')
          let slipFullBase64 = 'data:'+slipFileType+';base64,'+slipBase64Content;
          return slipFullBase64;
        }else{
          return slip;
        }
      },
      set (data){
        let decoded = dataUriToBuffer(data);
        this.setDataValue('slip', decoded);
      }
    },
    slipFileType: DataTypes.STRING,
    amount: DataTypes.NUMBER,
    expireDate: DataTypes.DATE,
    note: DataTypes.STRING,
    extraData: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};
