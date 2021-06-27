var express = require('express');
var router = express.Router();
const userController = require("../../controllers/userController");

/**
 * @api {post} /signup Signup New User
 * @apiName SignupNewUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiParamExample {json} Request-Example: Successful Sign Up
 {
            "username": "saman",
            "password": "12345",
            "firstName": "Yasiru",
            "lastName": "Nilan",
            "email": "ajith@gmail.com",
            "nic": "1212323322313",
            "phoneMain": "07023232232",
            "phoneExtra": "07023232232",
            "homePhone": "07023232232",
            "city": "Matara",
            "examYear": "2021",
            "address": "Wimalasewana, Hingurupanagala, Kotapola",
		    "profilePictureImageType": "image/png",
			"profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUmCC"
        }
 }
 * @apiSuccess {object} data signed up user information
 * @apiSuccessExample Success-Response:Successful Sign Up
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": {
    "profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhuQmCC",
    "id": 7,
    "username": "samann",
    "password": "$2a$10$yRZemjz0M/YWEIzSMN67teRG8N1O2ZTgAUdpuv685PO1zIh2ytkgC",
    "firstName": "Yasiru",
    "lastName": "Nilan",
    "email": "ajith@gmail.com",
    "nic": "1212323322313",
    "phoneMain": "07023232232",
    "phoneExtra": "07023232232",
    "homePhone": "07023232232",
    "city": "Matara",
    "examYear": "2021",
    "address": "Wimalasewana, Hingurupanagala, Kotapola",
    "status": true,
    "userRoleId": 3,
    "profilePictureImageType": "image/png",
    "updatedAt": "2021-06-27T13:09:21.312Z",
    "createdAt": "2021-06-27T13:09:21.312Z"
  },
  "message": "Successfully Added"
}
 * @apiSuccessExample Success-Response:When user exists with same username
 *     HTTP/1.1 200 OK
 * {
  "data": [],
  "error": true,
  "message": "User with Same Username Exists"
}
 */
router.post("/", userController.addNewUser);

module.exports = router;
