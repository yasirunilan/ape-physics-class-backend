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
            if(filters.userId){
                userDataFilters.id = filters.userId;
            }
            if(filters.email){
                userDataFilters.email = filters.email;
            }
        }
        const users = await model.user.findAll({
            where: {
                [sequelize.Op.and]: [userDataFilters]
            },
            attributes: { exclude: ['password', 'accessToken'] },
            order: [['firstName', 'ASC']]
        });


        console.log('users')
        // console.log(users)
        return {data: users};
    } catch(e) {
        console.log(e.message)
        return false;
    }
}

// this method used to save the access token and refresh token generated when loign action is happening with username and password
exports.saveAuthUserAccessToken = async (username, accessToken, refreshToken) => {
    try {
        const user = await model.user.findOne({ where: {username: username}, attributes: { exclude: ['password'] }});
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
        await model.authAccessToken.create(accessTokenObj)
        await model.authRefreshToken.create(refreshTokenObj)

        return true;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}


// this method used to save the access token generated from a refresh token
exports.saveAuthUserAccessTokenFromRefreshToken = async (username, accessToken) => {
    try {
        const user = await model.user.findOne({ where: {username: username}, attributes: { exclude: ['password'] }});
        let accessTokenObj = {
            token: accessToken,
            authClientId: 'front_end_client',
            userId: user.id,
            expires: moment(new Date()).add(2, 'days')
        }
        await model.authAccessToken.create(accessTokenObj)

        return true;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
