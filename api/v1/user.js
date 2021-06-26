var express = require('express');
var router = express.Router();
const userController = require('../../controllers/userController')



/**
 * @api {get} /users Get Users From Filter Values
 * @apiName GetUserFromFilterValues
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiParam (Query Param) {Object} [filters]  Optional nested filters object.
 * @apiParam (Query Param) {String} [filters[username]] Optional username.
 * @apiParam (Query Param) {String} [filters[email]] Optional email.
 * @apiParamExample {json} Request-Example: With Username Filter
 *     {
 *       "filters": {
 *           "username": "buddhi"
 *       }
 *     }
 *
 * @apiSuccess {object} data user details
 * @apiSuccessExample Success-Response: With Filter
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": {
    "data": {
      "data": [
        {
          "id": 1,
          "username": "buddhi",
          "firstName": "Buddhi",
          "lastName": "Vikasitha",
          "email": "buddhi@gmail.com",
          "nic": "111212121212V",
          "phoneMain": "0702132356",
          "phoneExtra": "0702132357",
          "homePhone": "0412273465",
          "city": "Matara",
          "examYear": "2022",
          "address": "\"Wimalasewana\", Hingurupanagala,Kotapola",
          "userRoleId": 3,
          "createdAt": "2021-05-16T08:20:46.000Z",
          "updatedAt": "2021-05-16T08:20:46.000Z",
        }
      ]
    }
  }
}
 * @apiSuccessExample Success-Response: Without Filters
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": {
    "data": {
      "data": [
        {
          "profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSuQmCC",
          "id": 1,
          "username": "buddhi",
          "firstName": "Buddhi",
          "lastName": "Vikasitha",
          "email": "buddhi@gmail.com",
          "nic": "111212121212V",
          "phoneMain": "0702132356",
          "phoneExtra": "0702132357",
          "homePhone": "0412273465",
          "city": "Matara",
          "profilePictureImageType": "image/png",
          "examYear": "2022",
          "address": "\"Wimalasewana\", Hingurupanagala,Kotapola",
          "userRoleId": 3,
          "createdAt": "2021-05-16T08:20:46.000Z",
          "updatedAt": "2021-05-16T08:20:46.000Z",
        },
        {
          "id": 5,
          "username": "eshan",
          "firstName": "Eshan",
          "lastName": "Pathirana",
          "email": "eshan@gmail.com",
          "nic": "35423432434V",
          "phoneMain": "0732132356",
          "phoneExtra": "0732132357",
          "homePhone": "0442273465",
          "city": "Matara",
          "examYear": "2022",
          "address": "\"Wimalasewana\", Hingurupanagala,Kotapola",
          "userRoleId": 3,
          "createdAt": "2021-05-16T08:20:46.000Z",
          "updatedAt": "2021-05-16T08:20:46.000Z",
        },
        {
          "id": 3,
          "username": "nevil",
          "firstName": "Nevil",
          "lastName": "Krishan",
          "email": "nevil@gmail.com",
          "nic": "222222323V",
          "phoneMain": "0712132356",
          "phoneExtra": "0712132357",
          "homePhone": "0422273465",
          "city": "Matara",
          "examYear": "",
          "address": "\"Wimalasewana\", Hingurupanagala,Kotapola",
          "userRoleId": 1,
          "createdAt": "2021-05-16T08:20:46.000Z",
          "updatedAt": "2021-05-16T08:20:46.000Z",
        },
        {
          "id": 4,
          "username": "ythilina",
          "firstName": "Thilina",
          "lastName": "Kumarasinghe",
          "email": "thilina@gmail.com",
          "nic": "343423224V",
          "phoneMain": "0722132356",
          "phoneExtra": "0722132357",
          "homePhone": "0432273465",
          "city": "Matara",
          "examYear": "",
          "address": "\"Wimalasewana\", Hingurupanagala,Kotapola",
          "userRoleId": 1,
          "createdAt": "2021-05-16T08:20:46.000Z",
          "updatedAt": "2021-05-16T08:20:46.000Z",
        },
        {
          "id": 2,
          "username": "yasiru",
          "firstName": "Yasiru",
          "lastName": "nilan",
          "email": "yasiru@gmail.com",
          "nic": "222222222V",
          "phoneMain": "0702132850",
          "phoneExtra": "0702132851",
          "homePhone": "0702132852",
          "city": "Matara",
          "examYear": "",
          "address": "\"Wimalasewana\", Hingurupanagala,Kotapola",
          "userRoleId": 2,
          "createdAt": "2021-05-16T08:20:46.000Z",
          "updatedAt": "2021-05-16T08:20:46.000Z",
        }
      ]
    }
  }
}
 */
router.get("/", userController.getUserByFilterValues);

/**
 * @api {get} /users/loggedInUser Get Logged-In User Data
 * @apiName GetLoggedInUserDetails
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiSuccess {object} data user details
 * @apiSuccessExample Success-Response
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": {
    "data": {
      "data": [
        {
          "profilePicture": "data:image/png;base64,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",
          "id": 10,
          "username": "saman",
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
          "userRoleId": 3,
          "status": true,
          "profilePictureImageType": "image/png",
          "createdAt": "2021-06-26T12:43:43.000Z",
          "updatedAt": "2021-06-26T12:43:43.000Z"
        }
      ]
    }
  }
}
 */
router.get("/loggedInUser", userController.getLoggedInUser);


/**
 * @api {post} /users/addUser Add New User
 * @apiName AddNewUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization ='Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7'
 * @apiParamExample {json} Request-Example:
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
 */
router.post("/addUser", userController.addNewUser);

/**
 * @api {patch} /users/:userId Update User Profile
 * @apiName UpdateUserProfile
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiParam {Number} userId  userId
 * @apiParamExample {json} Request-Example:
 {
            "username": "saman",
            "password": "12345",
            "firstName": "Saman",
            "lastName": "Priyankara",
            "email": "ajith@gmail.com",
            "nic": "1212323322313",
            "phoneMain": "07023232232",
            "phoneExtra": "07023232232",
            "homePhone": "07023232232",
            "city": "Matara",
            "examYear": "2021",
            "address": "Wimalasewana, Hingurupanagala, Kotapola",
						"profilePictureImageType": "image/png",
						"profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSCC"
        }
 * @apiSuccess {object} data updated user data
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
  "error": false,
  "data": {
    "profilePicture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnUmCC",
    "id": 9,
    "username": "saman",
    "password": "$2a$10$u4h1S/4WGhjT/amUwrw6c.lfAzNPNofeOejP6DzNmbRZJn8JwwaYi",
    "firstName": "Saman",
    "lastName": "Priyankara",
    "email": "ajith@gmail.com",
    "nic": "1212323322313",
    "phoneMain": "07023232232",
    "phoneExtra": "07023232232",
    "homePhone": "07023232232",
    "city": "Matara",
    "examYear": "2021",
    "address": "Wimalasewana, Hingurupanagala, Kotapola",
    "userRoleId": 3,
    "status": true,
    "profilePictureImageType": "image/png",
    "createdAt": "2021-06-26T12:13:09.000Z",
    "updatedAt": "2021-06-26T12:35:25.593Z"
  }
}
 */
router.patch('/:userId', userController.updateUserProfile)

module.exports = router;
