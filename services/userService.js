var model = require('../models/index');
const sequelize = require("sequelize");

exports.getAllUser = async () => {
    try {
        const user = await model.User.findAll({});
        return user;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}