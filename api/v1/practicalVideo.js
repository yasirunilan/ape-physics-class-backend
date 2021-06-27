var express = require('express');
var router = express.Router();
const practicalVideoController = require('../../controllers/practicalVideoController')


/**
 * @api {get} /practicalVideos Get All Active Practical Videos
 * @apiName GetPracticalVideos
 * @apiGroup PracticalVideo
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiSuccess {object} data Practical Video details
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": [
    {
      "id": 1,
      "name": "Practical 1",
      "description": "Practical 1 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": [
        "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
      ],
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 2,
      "name": "Practical 2",
      "description": "Practical 2 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": [
        "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
        "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      ],
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 3,
      "name": "Practical 3",
      "description": "Practical 3 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": null,
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 4,
      "name": "Practical 4",
      "description": "Practical 4 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": [
        "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
        "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      ],
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 5,
      "name": "Practical 5",
      "description": "Practical 5 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "documents": [
        "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      ],
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    }
  ]
}
 */
router.get('/', practicalVideoController.getAllActivePracticalVideos);

module.exports = router;
