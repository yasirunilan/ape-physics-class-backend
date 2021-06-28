var express = require('express');
var router = express.Router();
const classSessionsController = require('../../controllers/classSessionsController')

/**
 * @api {get} /classSessions/classCategory/:classCategoryId Get Class Sessions for a Class Category
 * @apiName GetClassSessionsForClassCategory
 * @apiGroup ClassSessions
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiParam {Number} classCategoryId  Class Category Id
 * @apiSuccess {object} data class sessions details
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": [
    {
      "id": 1,
      "name": "2021-01-07",
      "description": "2021-01-07 Class",
      "date": "2021-01-07T00:00:00.000Z",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",      "classCategoryId": 1,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z",
    },
    {
      "id": 2,
      "name": "2021-01-14",
      "description": "2021-01-14 Class",
      "date": "2021-01-14T00:00:00.000Z",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": "[{\"name\":\"Tute 1\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"},{\"name\":\"Tute 2\",\"link\":\"https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA\"}]",      "classCategoryId": 1,
      "classCategoryId": 1,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z",
    },
    {
      "id": 3,
      "name": "2021-01-21",
      "description": "2021-01-21 Class",
      "date": "2021-01-21T00:00:00.000Z",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": null,
      "classCategoryId": 1,
      "createdAt": "2021-05-16T07:04:12.000Z",
      "updatedAt": "2021-05-16T07:04:12.000Z",
    }
  ]
}
 */
router.get('/classCategory/:classCategoryId', classSessionsController.getAllClassSessionsOfClassCategory);

module.exports = router;
