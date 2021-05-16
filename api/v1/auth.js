var express = require('express');
var router = express.Router();
const authController = require('../../controllers/authController')
var passport = require('passport');

/**
 * @api {post} /auth/issueToken Get Access Token
 * @apiName IssueToken
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiDescription Basic Authentication request is sent using username and password
 * @apiSuccess {Object} data accessToken data.
 * @apiSuccess {string} message success message.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
  "error": false,
  "data": {
    "accessToken": "NOmiPzRxDZgVg0CHSTKmu4pkNDzgBHaYvqUMYWyam6n8KirYss2sBB0NWikLIqQV",
    "refreshToken": "KiqySm4rr7iBWg5AVcnulZzrKhsnQ3fzwXyA89mXYEVMITJ4DpVoWfiogcIx2hnO"
  },
  "message": "user has successfully authenticated"
}
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 */
router.post('/issueToken', passport.authenticate('login', {session: false}), authController.getAuthUserByInHouseAuthentication);

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
    let error = req.flash('error')[0];
    res.status(401).json({
        success: false,
        message: "Login Failed"
    });
});

// when login is successful, retrieve user info
router.get("/login/success", authController.getAuthUserByInHouseAuthentication);

// when reissue access token is success
router.get("/reissue/success", authController.getAuthUserByInHouseAuthenticationRefreshToken);


/**
 * @api {post} /auth/reIssueAccessToken Get Access Token from Refresh Token
 * @apiName Reissue Token
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiHeader {String} Authorization Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7
 * @apiSuccess {Object} data accessToken data.
 * @apiSuccess {string} message success message.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
  "error": false,
  "data": {
    "accessToken": "wSitPhR6w9wBgkM1Gc2fbZk3ioZCmsxOyVV6fHflKY3Yj2Y8qJLfKLXXnjzXPBpi",
    "refreshToken": "hKYnwGdySOpEciM5LHFhqCIELBcBXLA2DeqULoilQidIJ2opUeToTVCcMQfiYpdy"
  },
  "message": "user has successfully authenticated"
}
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *
 */
router.post('/reIssueAccessToken', passport.authenticate('refreshAuthBearer', {session:false}), authController.getAuthUserByInHouseAuthentication);


module.exports = router;
