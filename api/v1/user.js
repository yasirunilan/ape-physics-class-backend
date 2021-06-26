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
          "id": 2,
          "username": "yasiru@test.com",
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
          "createdAt": "2021-06-06T06:55:11.000Z",
          "updatedAt": "2021-06-06T06:55:11.000Z"
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
