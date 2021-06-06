var express = require('express');
var passport = require('passport');
var router = express.Router();
var authRoutes  = require('./auth');
var userRoutes  = require('./user');
var classCategoriesRoutes  = require('./classCategories');
var classSessionsRoutes  = require('./classSessions');
var mcqClassRoutes  = require('./mcqClass');
var mcqPapersRoutes  = require('./mcqPapers');
var practicalVideoRoutes  = require('./practicalVideo');
var paymentRoutes  = require('./payment');

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

router.use('/classSessions', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        next();
    })(req, res, next);
}, classSessionsRoutes);

router.use('/mcqClasses', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        next();
    })(req, res, next);
}, mcqClassRoutes);

router.use('/mcqPapers', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        next();
    })(req, res, next);
}, mcqPapersRoutes);


router.use('/practicalVideos', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        next();
    })(req, res, next);
}, practicalVideoRoutes);

router.use('/payments', function(req, res, next) {
    passport.authenticate('bearer', function(err, user, info) {
        if (err) { return next(err) }
        if (!user) { return res.status(401).send({data: [], error: true, message: "Invalid Token"}) }
        req.user = user;
        next();
    })(req, res, next);
}, paymentRoutes);

module.exports = router;
