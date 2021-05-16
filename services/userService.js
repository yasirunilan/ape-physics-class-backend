var moment = require('moment');
var model = require('../models/index');
const sequelize = require("sequelize");

exports.getUsersByFilters = async (filters) => {
    try {
        let userDataFilters = {}
        if(filters){
            if(filters.username){
                userDataFilters.username = filters.username;
            }
        }
        const users = await model.User.findAll({
            where: {
                [sequelize.Op.and]: [userDataFilters]
            },
            attributes: { exclude: ['password', 'accessToken'] },
            order: [['firstName', 'ASC']]
        });

        return {data: users};
    } catch(e) {
        console.log(e.message)
        return false;
    }
}

// this method used to save the access token and refresh token generated when loign action is happening with username and password
exports.saveAuthUserAccessToken = async (username, accessToken, refreshToken) => {
    try {
        const user = await model.User.findOne({ where: {username: username}, attributes: { exclude: ['password'] }});
        let accessTokenObj = {
            token: accessToken,
            authClientId: 'front_end_client',
            userId: user.id,
            expires: moment(new Date()).add(1, 'hours')
        }
        let refreshTokenObj = {
            token: refreshToken,
            authClientId: 'front_end_client',
            userId: user.id,
            expires: moment(new Date()).add(7, 'days')
        }
        await model.AuthAccessToken.create(accessTokenObj)
        await model.AuthRefreshToken.create(refreshTokenObj)

        return true;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}


// this method used to save the access token generated from a refresh token
exports.saveAuthUserAccessTokenFromRefreshToken = async (username, accessToken) => {
    try {
        const user = await model.User.findOne({ where: {username: username}, attributes: { exclude: ['password'] }});
        let accessTokenObj = {
            token: accessToken,
            authClientId: 'front_end_client',
            userId: user.id,
            expires: moment(new Date()).add(2, 'days')
        }
        await model.AuthAccessToken.create(accessTokenObj)

        return true;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
