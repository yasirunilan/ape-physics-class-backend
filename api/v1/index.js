var express = require('express');
var passport = require('passport');
var router = express.Router();
var authRoutes  = require('./auth');
var userRoutes  = require('./user');
var classCategoriesRoutes  = require('./classCategories');
var classSessionsRoutes  = require('./classSessions');

router.use('/auth', authRoutes);

router.use('/users', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        next();
    })(req, res, next);
}, userRoutes);

router.use('/classCategories', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        next();
    })(req, res, next);
}, classCategoriesRoutes);

router.use('/classSessions', require('./classSessions'));

router.use('/classSessions', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        next();
    })(req, res, next);
}, classSessionsRoutes);

module.exports = router;
