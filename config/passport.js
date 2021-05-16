var passport = require('passport');
var moment = require('moment');
var sequelize = require('sequelize');
var BearerStrategy = require('passport-http-bearer').Strategy;
var BasicStrategy = require('passport-http').BasicStrategy;
var models = require('../models/index');

/**
 * LocalStrategy
 *
 * This strategy is used to authenticate users based on a username and password.
 * Anytime a request is made to authorize an application, we must ensure that
 * a user is logged in before asking them to approve the request.
 */
passport.use('login',new BasicStrategy({
    usernameField: 'username',
    passwordField: 'password'
},function(username, password, done) {
    models.User
        .findOne({ where: { username: username } })
        .then(function(user) { // successful query to database
            if(!user) {
                return done(null, false, { message: 'No User Found With Username ' + username });
            }
            models.User.comparePassword(password, user.password, function(err, isMatch) {
                if(err) {
                    return done(err);
                }
                if(isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        })
        .catch(function(err) { // something went wrong with query to db
            done(err);
        });
}));

passport.use('bearer',new BearerStrategy(
    async function(token, done) {
        const user = await models.AuthAccessToken.findOne({ where: {token: token, expires: {
                    [sequelize.Op.gte]: moment()
                } }, include: ['User'] });
        if (!user) { return done(null, false); }
        return done(null, user, { scope: 'all' });
    }
));

passport.use('refreshAuthBearer',new BearerStrategy(
    async function(token, done) {
        const authToken = await models.AuthRefreshToken.findOne({ where: {token: token, expires: {
                    [sequelize.Op.gte]: moment()
                } }, include: ['User'] });
        if (!authToken) { return done(null, false); }
        return done(null, authToken.User, { scope: 'all' });
    }
));

// serialize session, only store user id in the session information
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// from the user id, figure out who the user is...
passport.deserializeUser(function(userId, done){
    models.User
        .findOne({ where: { id: userId } })
        .then(function(user){
            done(null, user);
        }).catch(function(err){
        done(err, null);
    });
});
