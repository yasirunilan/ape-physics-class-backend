var express = require('express');
var router = express.Router();
const mcqPaperController = require('../../controllers/mcqPaperController')


/**
 * @api {get} /mcqPapers Get All Active MCQ Papers
 * @apiName GetMCQPapers
 * @apiGroup MCQPaper
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiSuccess {object} data MCQ Paper details
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": [
    {
      "id": 1,
      "name": "MCQ Paper 1",
      "description": "MCQ Paper 1 Description",
      "link": "https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit",
      "documents": {
        "Tute 1": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
        "Tute 2": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      },
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 2,
      "name": "MCQ Paper 2",
      "description": "MCQ Paper 2 Description",
      "link": "https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit",
      "documents": {
        "Tute 1": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
        "Tute 2": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      },
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 3,
      "name": "MCQ Paper 3",
      "description": "MCQ Paper 3 Description",
      "link": "https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit",
      "documents": {
        "Tute 1": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
        "Tute 2": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      },
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 4,
      "name": "MCQ Paper 4",
      "description": "MCQ Paper 4 Description",
      "link": "https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit",
      "documents": {
        "Tute 1": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
        "Tute 2": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      },
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 5,
      "name": "MCQ Paper 5",
      "description": "MCQ Paper 5 Description",
      "link": "https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit",
      "documents": {
        "Tute 1": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA",
        "Tute 2": "https://drive.google.com/file/d/0B1HXnM1lBuoqMzVhZjcwNTAtZWI5OS00ZDg3LWEyMzktNzZmYWY2Y2NhNWQx/view?hl=en&resourcekey=0-5DqnTtXPFvySMiWstuAYdA"
      },
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    }
  ]
}
 */
router.get('/', mcqPaperController.getAllActiveMcqPapers);

module.exports = router;
