var express = require('express');
var router = express.Router();
const paymentController = require('../../controllers/paymentController')
const classCategoriesController = require('../../controllers/classCategoriesController')

/**
 * @api {post} /payments/addNewPayment Add New Payment
 * @apiName AddNewPayment
 * @apiGroup Payment
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiParamExample {json} Request-Example: Without Extra Data(Class Payments)
 {
	"date": "2021-10-10",
	"amount": 1000,
	"classCategoryId": 1,
	"expireDate": "2021-11-10",
	"classCategoryId": 1,
	"slip": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4Qkl4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=",
	"slipFileType": "image/jpeg"
}
 * @apiParamExample {json} Request-Example: With Extra Data(Practical Payments)
 {
	"date": "2021-10-10",
	"amount": 1000,
	"classCategoryId": 1,
	"expireDate": "2021-11-10",
	"classCategoryId": 1,
	"extraData": {"practicals":[1,2,3]},
	"slip": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4Qkl4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=",
	"slipFileType": "image/jpeg"
 }
 * @apiSuccess {object} data payment information
 * @apiSuccessExample Success-Response:Without Extra Data(Class Payments)
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": {
    "slip": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAmcAFGJ5VDUwOGR5OGcxUGo3cjZBUmNLHAIoAGJGQk1EMDEwMDBhOWMwZDAwMDAzZDQyMDAwMGZjNjIwMDAwNT7Gpb4FuB0KCNIWBaPUhFErVITEyRsbWjCbEyh6JEIT50ehLIJDYgS4KlNLppsajglcivZDfIrGhoYxoayMQdMaVoj6cmJCyjtIsy+EcmeHA2ybb7erGTQyAqIPApFG7HoI/Q1pfUrBbihpsqBwblEjgJklfRDcyIavyiI4jGxO4l4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=",
    "id": 14,
    "date": "2021-10-10T00:00:00.000Z",
    "userId": 2,
    "classCategoryId": 1,
    "amount": 1000,
    "expireDate": "2021-11-10T00:00:00.000Z",
    "slipFileType": "image/jpeg",
    "updatedAt": "2021-06-27T06:04:48.981Z",
    "createdAt": "2021-06-27T06:04:48.981Z"
  }
}
 * @apiSuccessExample Success-Response:With Extra Data(Practical Payments)
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": {
    "slip": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAmcAFGJ5VDUwOGR5OGcxUGo3cjZBUmNLHAIoAGJGQk1EMDEwMDBhOWMwZDAwMDAzZDQyMDAwMGZjNjIwMDAwNT7Gpb4FuB0KCNIWBaPUhFErVITEyRsbWjCbEyh6JEIT50ehLIJDYgS4KlNLppsajglcivZDfIrGhoYxoayMQdMaVoj6cmJCyjtIsy+EcmeHA2ybb7erGTQyAqIPApFG7HoI/Q1pfUrBbihpsqBwblEjgJklfRDcyIavyiI4jGxO4l4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=",
    "id": 14,
    "date": "2021-10-10T00:00:00.000Z",
    "userId": 2,
    "classCategoryId": 1,
    "amount": 1000,
    "expireDate": "2021-11-10T00:00:00.000Z",
    "extraData": {
      "practicals": [
        1,
        2,
        3
      ]
    },
    "slipFileType": "image/jpeg",
    "updatedAt": "2021-06-27T06:04:48.981Z",
    "createdAt": "2021-06-27T06:04:48.981Z"
  }
}
 */
router.post("/addNewPayment", paymentController.addNewPayment);

/**
 * @api {get} /payments/classCategories Get Class Categories for Payments
 * @apiName GetClassCategoriesForPayment
 * @apiGroup ClassCategoryForPayments
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiParam (Query Param) {Boolean} active  Optional 'active' filter to filter active and non-active class categories.
 * @apiParamExample {json} Request-Example: To get active class categories available for payment:
 *     {
 *       "active": 1
 *     }
 *
 * @apiSuccess {object} data class category available for payment details
 * @apiSuccessExample Success-Response:To get active class categories available for payment:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": [
    {
      "id": 1,
      "name": "2021 Theory/Revision",
      "description": "2021 Theory/Revision Class",
      "fee": "2500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 2,
      "name": "2021 Theory",
      "description": "2021 Theory Class",
      "fee": "1500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 3,
      "name": "2021 Revision",
      "description": "2021 Revision Class",
      "fee": "1000",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 4,
      "name": "2022 Theory",
      "description": "2022 Theory Class",
      "fee": "1500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 5,
      "name": "2023 Theory",
      "description": "2023 Theory Class",
      "fee": "1500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 7,
      "name": "Practical Videos",
      "description": "Practical Videos",
      "fee": "",
      "active": true,
      "isOnlyPaymentCategory": true,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    }
  ]
}
 * @apiParamExample {json} Request-Example: To get non-active class categories available for payment:
 *     {
 *       "active": 0
 *     }
 *
 * * @apiSuccessExample Success-Response: To get non-active class categories available for payment:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": [
    {
      "id": 6,
      "name": "2020 Theory",
      "description": "2020 Theory Class",
      "fee": "1500",
      "active": false,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    }
  ]
}
 * * @apiSuccessExample Success-Response: Without Query Params:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": [
    {
      "id": 1,
      "name": "2021 Theory/Revision",
      "description": "2021 Theory/Revision Class",
      "fee": "2500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 2,
      "name": "2021 Theory",
      "description": "2021 Theory Class",
      "fee": "1500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 3,
      "name": "2021 Revision",
      "description": "2021 Revision Class",
      "fee": "1000",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 4,
      "name": "2022 Theory",
      "description": "2022 Theory Class",
      "fee": "1500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 5,
      "name": "2023 Theory",
      "description": "2023 Theory Class",
      "fee": "1500",
      "active": true,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 6,
      "name": "2020 Theory",
      "description": "2020 Theory Class",
      "fee": "1500",
      "active": false,
      "isOnlyPaymentCategory": false,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    },
    {
      "id": 7,
      "name": "Practical Videos",
      "description": "Practical Videos",
      "fee": "",
      "active": true,
      "isOnlyPaymentCategory": true,
      "createdAt": "2021-06-06T06:55:11.000Z",
      "updatedAt": "2021-06-06T06:55:11.000Z"
    }
  ]
}
 */
router.get("/classCategories", classCategoriesController.getAllClassCategories);
module.exports = router;
