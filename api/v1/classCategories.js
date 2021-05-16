var express = require('express');
var router = express.Router();
const classCategoriesController = require('../../controllers/classCategoriesController')

/**
 * @api {get} /classCategories Get Class Categories
 * @apiName GetClassCategories
 * @apiGroup ClassCategory
 * @apiVersion 1.0.0
 * @apiParam (Query Param) {Boolean} active  Optional 'active' filter to filter active and non-active class categories.
 * @apiParamExample {json} Request-Example: To get active class categories:
 *     {
 *       "active": 1
 *     }
 *
 * @apiSuccess {object} data class category details
 * @apiSuccessExample Success-Response:To get active class categories:
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
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 2,
      "name": "2021 Theory",
      "description": "2021 Theory Class",
      "fee": "1500",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 3,
      "name": "2021 Revision",
      "description": "2021 Revision Class",
      "fee": "1000",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 4,
      "name": "2022 Theory",
      "description": "2022 Theory Class",
      "fee": "1500",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 5,
      "name": "2023 Theory",
      "description": "2023 Theory Class",
      "fee": "1500",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    }
  ]
}
 * @apiParamExample {json} Request-Example: To get non-active class categories:
 *     {
 *       "active": 0
 *     }
 *
 * * @apiSuccessExample Success-Response: To get non-active class categories:
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
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
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
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 2,
      "name": "2021 Theory",
      "description": "2021 Theory Class",
      "fee": "1500",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 3,
      "name": "2021 Revision",
      "description": "2021 Revision Class",
      "fee": "1000",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 4,
      "name": "2022 Theory",
      "description": "2022 Theory Class",
      "fee": "1500",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 5,
      "name": "2023 Theory",
      "description": "2023 Theory Class",
      "fee": "1500",
      "active": true,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    },
    {
      "id": 6,
      "name": "2020 Theory",
      "description": "2020 Theory Class",
      "fee": "1500",
      "active": false,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z"
    }
  ]
}
 */
router.get('/', classCategoriesController.getAllClassCategories);

module.exports = router;
