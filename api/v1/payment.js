var express = require('express');
var router = express.Router();
const paymentController = require('../../controllers/paymentController')

/**
 * @api {post} /payments/addNewPayment Add New Payment
 * @apiName AddNewPayment
 * @apiGroup Payment
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiParamExample {json} Request-Example:
 {
	"date": "2021-10-10",
	"amount": 1000,
	"expireDate": "2021-11-10",
	"note": "New Note",
	"slip": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAmcAFGJ5VDUwOGR5OGcxUGo3cjZBUmNLHAIoAGJGQk1EMDEwMDBhOWMwZDAwMDAzZDQyMDAwMGZjNjIwMDAwNTA2OTAwMDBhZTZmMDAwMDUyNzgwMDAwMzFhNjAwMDBjY2I0MDAwMGUyYzAwMDAwNzNjYzAwMDBhZTQzMDEwMP/iC/hJQ0NfUFJPRklMRQABAQAAC+gAAAAAAgAAAG1udHJSR0IgWFlaIAfZAAMAGwAVACQAH2Fjc3AAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAD21gABAAAAANMtAAAAACn4Pd6v8lWueEL65MqDOQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGRlc2MAAAFEAAAAeWJYWVoAAAHAAAAAFGJUUkMAAAHUAAATQLVTRlw93Eefjvh05MHYADaYNNUMAZA0waajTAGqGImCjTgAGBTE4YTqeZtjv8AS+dMghSuvd+u830spuXnTAAAAABD870fjtTzBrp/Q1pfUrBbihpsqBwblEjgJklfRDcyIavyiI4jGxO4l4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=",
	"slipFileType": "image/jpeg"
}
 * @apiSuccess {object} data added payment data
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
  "error": false,
  "data": {
    "slip": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAmcAFGJ5VDUwOGR5OGcxUGo3cjZBUmNLHAIoAGJGQk1EMDEwMDBhOWMwZDAwMDAzZDQyMDAwMGZjNjIwMDAwNTA2OTAwMDBhZTZmMDAwMDUyNzgwMDAwMzFhNjAwMDBjY2I0MDAwMGUyYzAwMDAwNzNjYzAwMDBhZTQzMDEwMP/iC/hJQ0NfUFJPRklMRQABAQAAC+gAAAAAAgAAAG1udHJSR0IgWFlaIAfZAAMAGwAVACQAH2Fjc3AAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAD21gABAAAAANMtAAAAACn4Pd6v8lWueEL65MqDOQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGRlc2MAAAFEAAAAeWJYWVoAAAHAAAAAFGJUUkMAAAHUAAA/wEM9ngarYSLYkZK8kmBKVpJ0KJHCQtS52JW7Gpb4FuB0KCNIWBaPUhFErVITEyRsbWjCbEyh6JEIT50ehLIJDYgS4KlNLppsajglcivZDfIrGhoYxoayMQdMaVoj6cmJCyjtIsy+EcmeHA2ybb7erGTQyAqIPApFG7HoI/Q1pfUrBbihpsqBwblEjgJklfRDcyIavyiI4jGxO4l4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=",
    "id": 12,
    "date": "2021-10-10T00:00:00.000Z",
    "amount": 1000,
    "expireDate": "2021-11-10T00:00:00.000Z",
    "slipFileType": "image/jpeg",
    "updatedAt": "2021-05-23T05:25:55.943Z",
    "createdAt": "2021-05-23T05:25:55.943Z"
  }
}
 */
router.post("/addNewPayment", paymentController.addNewPayment);
module.exports = router;
