var express = require('express');
var router = express.Router();
const mcqClassController = require('../../controllers/mcqClassController')


/**
 * @api {get} /mcqClasses Get All Active MCQ Classes
 * @apiName GetMCQClasses
 * @apiGroup MCQClass
 * @apiVersion 1.0.0
 * @apiSuccess {object} data MCQ Classes details
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": [
    {
      "id": 1,
      "name": "Reminder 1",
      "description": "MCQ Class 1 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 2,
      "name": "Reminder 2",
      "description": "MCQ Class 2 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 3,
      "name": "Reminder 3",
      "description": "MCQ Class 3 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 4,
      "name": "Reminder 4",
      "description": "MCQ Class 4 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    },
    {
      "id": 5,
      "name": "Reminder 5",
      "description": "MCQ Class 5 Description",
      "link": "https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1",
      "active": true,
      "createdAt": "2021-05-16T12:36:39.000Z",
      "updatedAt": "2021-05-16T12:36:39.000Z"
    }
  ]
}
 */
router.get('/', mcqClassController.getAllActiveMcqClasses);

module.exports = router;
