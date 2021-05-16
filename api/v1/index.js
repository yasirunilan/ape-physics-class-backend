var express = require('express');
var router = express.Router();

router.use('/user', require('./user'));
router.use('/classCategories', require('./classCategories'));
router.use('/classSessions', require('./classSessions'));

module.exports = router;
