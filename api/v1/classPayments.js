var express = require('express');
var router = express.Router();
const classPaymentController = require('../../controllers/classPaymentController')


router.get('/', classPaymentController.getAllClassPayments);

module.exports = router;
