var userService = require('../services/userService');
var util = require('../utils/index');


exports.getAuthUserByInHouseAuthentication = async (req, res, next) => {
    try {
        let username = req.user.username;
        let accessToken = util.getUid(64)
        let refreshToken = util.getUid(64)
        let updatedUser = await userService.saveAuthUserAccessToken(username, accessToken, refreshToken);
        if(updatedUser){
            res.send({
                error: false,
                data: {accessToken: accessToken, refreshToken: refreshToken},
                message: "user has successfully authenticated",
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}



exports.getAuthUserByInHouseAuthenticationRefreshToken = async (req, res, next) => {
    try {
        let username = req.user.username;
        let accessToken = util.getUid(32)
        let updatedUser = await userService.saveAuthUserAccessTokenFromRefreshToken(username, accessToken);
        if(updatedUser){
            res.send({
                error: false,
                data: {accessToken: accessToken},
                message: "user has successfully authenticated",
            })
        }else {
            res.send({data: [], error: false})
        }
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
}


