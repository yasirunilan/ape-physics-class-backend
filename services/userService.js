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

exports.addNewUser = async (data) => {
    try {
        let user = {
            username: data.username,
            password: data.password? data.password:12345,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            nic: data.nic,
            phoneMain: data.phoneMain,
            phoneExtra: data.phoneExtra,
            homePhone: data.homePhone,
            city: data.city,
            examYear: data.examYear,
            address: data.address,
            status: 1,
            userRoleId: 3,
        };

        if(data.profilePicture){
            user.profilePicture = data.profilePicture;
            user.profilePictureImageType = data.profilePictureImageType
        }
        let savedUser = await model.user.create(user)
        return savedUser;

    } catch(e) {
        console.log(e.message)
        return false;
    }
}

exports.updateUserProfile = async (id, data) => {
    try {
        const user = await model.user.findOne({ where: {id: id}});

        if(data.firstName){
            user.firstName = data.firstName
        }
        if(data.lastName){
            user.lastName = data.lastName
        }
        if(data.email){
            user.email = data.email
        }
        if(data.nic){
            user.nic = data.nic
        }
        if(data.phoneMain){
            user.phoneMain = data.phoneMain
        }
        if(data.phoneExtra){
            user.phoneExtra = data.phoneExtra
        }
        if(data.homePhone){
            user.homePhone = data.homePhone
        }
        if(data.city){
            user.city = data.city
        }
        if(data.examYear){
            user.examYear = data.examYear
        }
        if(data.address){
            user.address = data.address
        }
        if(data.userRoleId){
            user.userRoleId = data.userRoleId
        }
        if(data.status){
            user.status = data.status
        }
        if(data.profilePictureImageType){
            user.profilePictureImageType = data.profilePictureImageType
        }
        if(data.profilePicture){
            user.profilePicture = data.profilePicture
        }

        await user.save();

        return user;
    } catch(e) {
        console.log(e.message)
        return false;
    }
}
