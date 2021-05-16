var express = require('express');
var passport = require('passport');
var router = express.Router();
var authRoutes  = require('./auth');

router.use('/auth', authRoutes);
router.use('/user', require('./user'));
router.use('/classCategories', require('./classCategories'));
router.use('/classSessions', require('./classSessions'));

module.exports = router;
