define({ "api": [
  {
    "type": "post",
    "url": "/auth/issueToken",
    "title": "Get Access Token",
    "name": "IssueToken",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Basic Authentication request is sent using username and password</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>accessToken data.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n  \"error\": false,\n  \"data\": {\n    \"accessToken\": \"NOmiPzRxDZgVg0CHSTKmu4pkNDzgBHaYvqUMYWyam6n8KirYss2sBB0NWikLIqQV\",\n    \"refreshToken\": \"KiqySm4rr7iBWg5AVcnulZzrKhsnQ3fzwXyA89mXYEVMITJ4DpVoWfiogcIx2hnO\"\n  },\n  \"message\": \"user has successfully authenticated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/reIssueAccessToken",
    "title": "Get Access Token from Refresh Token",
    "name": "Reissue_Token",
    "group": "Auth",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>accessToken data.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>success message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n  \"error\": false,\n  \"data\": {\n    \"accessToken\": \"wSitPhR6w9wBgkM1Gc2fbZk3ioZCmsxOyVV6fHflKY3Yj2Y8qJLfKLXXnjzXPBpi\",\n    \"refreshToken\": \"hKYnwGdySOpEciM5LHFhqCIELBcBXLA2DeqULoilQidIJ2opUeToTVCcMQfiYpdy\"\n  },\n  \"message\": \"user has successfully authenticated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/classCategories",
    "title": "Get Class Categories",
    "name": "GetClassCategories",
    "group": "ClassCategory",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Param": [
          {
            "group": "Query Param",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Optional 'active' filter to filter active and non-active class categories.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: To get active class categories:",
          "content": "{\n  \"active\": 1\n}",
          "type": "json"
        },
        {
          "title": "Request-Example: To get non-active class categories:",
          "content": "{\n  \"active\": 0\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>class category details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:To get active class categories:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"2021 Theory/Revision\",\n      \"description\": \"2021 Theory/Revision Class\",\n      \"fee\": \"2500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"2021 Theory\",\n      \"description\": \"2021 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"2021 Revision\",\n      \"description\": \"2021 Revision Class\",\n      \"fee\": \"1000\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"2022 Theory\",\n      \"description\": \"2022 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"2023 Theory\",\n      \"description\": \"2023 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: To get non-active class categories:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 6,\n      \"name\": \"2020 Theory\",\n      \"description\": \"2020 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": false,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    }\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: Without Query Params:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"2021 Theory/Revision\",\n      \"description\": \"2021 Theory/Revision Class\",\n      \"fee\": \"2500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"2021 Theory\",\n      \"description\": \"2021 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"2021 Revision\",\n      \"description\": \"2021 Revision Class\",\n      \"fee\": \"1000\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"2022 Theory\",\n      \"description\": \"2022 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"2023 Theory\",\n      \"description\": \"2023 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    },\n    {\n      \"id\": 6,\n      \"name\": \"2020 Theory\",\n      \"description\": \"2020 Theory Class\",\n      \"fee\": \"1500\",\n      \"active\": false,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/classCategories.js",
    "groupTitle": "ClassCategory"
  },
  {
    "type": "get",
    "url": "/classSessions/classCategory/:classCategoryId",
    "title": "Get Class Sessions for a Class Category",
    "name": "GetClassSessionsForClassCategory",
    "group": "ClassSessions",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "classCategoryId",
            "description": "<p>Class Category Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>class sessions details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"2021-01-07\",\n      \"description\": \"2021-01-07 Class\",\n      \"date\": \"2021-01-07T00:00:00.000Z\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"classCategoryId\": 1,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\",\n    },\n    {\n      \"id\": 2,\n      \"name\": \"2021-01-14\",\n      \"description\": \"2021-01-14 Class\",\n      \"date\": \"2021-01-14T00:00:00.000Z\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"classCategoryId\": 1,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\",\n    },\n    {\n      \"id\": 3,\n      \"name\": \"2021-01-21\",\n      \"description\": \"2021-01-21 Class\",\n      \"date\": \"2021-01-21T00:00:00.000Z\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"classCategoryId\": 1,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\",\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/classSessions.js",
    "groupTitle": "ClassSessions"
  },
  {
    "type": "get",
    "url": "/mcqClasses",
    "title": "Get All Active MCQ Classes",
    "name": "GetMCQClasses",
    "group": "MCQClass",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>MCQ Classes details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Reminder 1\",\n      \"description\": \"MCQ Class 1 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Reminder 2\",\n      \"description\": \"MCQ Class 2 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Reminder 3\",\n      \"description\": \"MCQ Class 3 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Reminder 4\",\n      \"description\": \"MCQ Class 4 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Reminder 5\",\n      \"description\": \"MCQ Class 5 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/mcqClass.js",
    "groupTitle": "MCQClass"
  },
  {
    "type": "get",
    "url": "/mcqPapers",
    "title": "Get All Active MCQ Papers",
    "name": "GetMCQPapers",
    "group": "MCQPaper",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>MCQ Paper details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"MCQ Paper 1\",\n      \"description\": \"MCQ Paper 1 Description\",\n      \"link\": \"https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"MCQ Paper 2\",\n      \"description\": \"MCQ Paper 2 Description\",\n      \"link\": \"https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"MCQ Paper 3\",\n      \"description\": \"MCQ Paper 3 Description\",\n      \"link\": \"https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"MCQ Paper 4\",\n      \"description\": \"MCQ Paper 4 Description\",\n      \"link\": \"https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"MCQ Paper 5\",\n      \"description\": \"MCQ Paper 5 Description\",\n      \"link\": \"https://docs.google.com/forms/d/1RjTM59W-HedqULP9rEMROa-tSCltWkR894OINzGaPt4/edit\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/mcqPapers.js",
    "groupTitle": "MCQPaper"
  },
  {
    "type": "post",
    "url": "/payments/addNewPayment",
    "title": "Add New Payment",
    "name": "AddNewPayment",
    "group": "Payment",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"date\": \"2021-10-10\",\n\t\"amount\": 1000,\n\t\"expireDate\": \"2021-11-10\",\n\t\"note\": \"New Note\",\n\t\"slip\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAmcAFGJ5VDUwOGR5OGcxUGo3cjZBUmNLHAIoAGJGQk1EMDEwMDBhOWMwZDAwMDAzZDQyMDAwMGZjNjIwMDAwNTA2OTAwMDBhZTZmMDAwMDUyNzgwMDAwMzFhNjAwMDBjY2I0MDAwMGUyYzAwMDAwNzNjYzAwMDBhZTQzMDEwMP/iC/hJQ0NfUFJPRklMRQABAQAAC+gAAAAAAgAAAG1udHJSR0IgWFlaIAfZAAMAGwAVACQAH2Fjc3AAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAD21gABAAAAANMtAAAAACn4Pd6v8lWueEL65MqDOQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGRlc2MAAAFEAAAAeWJYWVoAAAHAAAAAFGJUUkMAAAHUAAATQLVTRlw93Eefjvh05MHYADaYNNUMAZA0waajTAGqGImCjTgAGBTE4YTqeZtjv8AS+dMghSuvd+u830spuXnTAAAAABD870fjtTzBrp/Q1pfUrBbihpsqBwblEjgJklfRDcyIavyiI4jGxO4l4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=\",\n\t\"slipFileType\": \"image/jpeg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>added payment data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": {\n    \"slip\": \"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAmcAFGJ5VDUwOGR5OGcxUGo3cjZBUmNLHAIoAGJGQk1EMDEwMDBhOWMwZDAwMDAzZDQyMDAwMGZjNjIwMDAwNTA2OTAwMDBhZTZmMDAwMDUyNzgwMDAwMzFhNjAwMDBjY2I0MDAwMGUyYzAwMDAwNzNjYzAwMDBhZTQzMDEwMP/iC/hJQ0NfUFJPRklMRQABAQAAC+gAAAAAAgAAAG1udHJSR0IgWFlaIAfZAAMAGwAVACQAH2Fjc3AAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAD21gABAAAAANMtAAAAACn4Pd6v8lWueEL65MqDOQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEGRlc2MAAAFEAAAAeWJYWVoAAAHAAAAAFGJUUkMAAAHUAAA/wEM9ngarYSLYkZK8kmBKVpJ0KJHCQtS52JW7Gpb4FuB0KCNIWBaPUhFErVITEyRsbWjCbEyh6JEIT50ehLIJDYgS4KlNLppsajglcivZDfIrGhoYxoayMQdMaVoj6cmJCyjtIsy+EcmeHA2ybb7erGTQyAqIPApFG7HoI/Q1pfUrBbihpsqBwblEjgJklfRDcyIavyiI4jGxO4l4I8EeNRhpxZCcIithLwW2IjKUJ0W4PHSg0ErYfoW00VkRLIjguhUkBQ1agQ0PU0ORJG0JqSMj/9k=\",\n    \"id\": 12,\n    \"date\": \"2021-10-10T00:00:00.000Z\",\n    \"amount\": 1000,\n    \"expireDate\": \"2021-11-10T00:00:00.000Z\",\n    \"slipFileType\": \"image/jpeg\",\n    \"updatedAt\": \"2021-05-23T05:25:55.943Z\",\n    \"createdAt\": \"2021-05-23T05:25:55.943Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/payment.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/practicalVideos",
    "title": "Get All Active Practical Videos",
    "name": "GetPracticalVideos",
    "group": "PracticalVideo",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>Practical Video details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"Practical 1\",\n      \"description\": \"Practical 1 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Practical 2\",\n      \"description\": \"Practical 2 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Practical 3\",\n      \"description\": \"Practical 3 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 4,\n      \"name\": \"Practical 4\",\n      \"description\": \"Practical 4 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    },\n    {\n      \"id\": 5,\n      \"name\": \"Practical 5\",\n      \"description\": \"Practical 5 Description\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"active\": true,\n      \"createdAt\": \"2021-05-16T12:36:39.000Z\",\n      \"updatedAt\": \"2021-05-16T12:36:39.000Z\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/practicalVideo.js",
    "groupTitle": "PracticalVideo"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get Users From Filter Values",
    "name": "GetUserFromFilterValues",
    "group": "User",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer 2a81e13969953cdddc7596f0766d2ce5b3e848b7",
            "description": ""
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Query Param": [
          {
            "group": "Query Param",
            "type": "Object",
            "optional": true,
            "field": "filters",
            "description": "<p>Optional nested filters object.</p>"
          },
          {
            "group": "Query Param",
            "type": "String",
            "optional": true,
            "field": "filters[username]",
            "description": "<p>Optional username.</p>"
          },
          {
            "group": "Query Param",
            "type": "String",
            "optional": true,
            "field": "filters[email]",
            "description": "<p>Optional email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: With Username Filter",
          "content": "{\n  \"filters\": {\n      \"username\": \"buddhi\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>user details</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: With Filter",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": {\n    \"data\": {\n      \"data\": [\n        {\n          \"id\": 1,\n          \"username\": \"buddhi\",\n          \"firstName\": \"Buddhi\",\n          \"lastName\": \"Vikasitha\",\n          \"email\": \"buddhi@gmail.com\",\n          \"nic\": \"111212121212V\",\n          \"phoneMain\": \"0702132356\",\n          \"phoneExtra\": \"0702132357\",\n          \"homePhone\": \"0412273465\",\n          \"city\": \"Matara\",\n          \"examYear\": \"2022\",\n          \"address\": \"\\\"Wimalasewana\\\", Hingurupanagala,Kotapola\",\n          \"userRoleId\": 3,\n          \"createdAt\": \"2021-05-16T08:20:46.000Z\",\n          \"updatedAt\": \"2021-05-16T08:20:46.000Z\",\n        }\n      ]\n    }\n  }\n}",
          "type": "json"
        },
        {
          "title": "Success-Response: Without Filters",
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": {\n    \"data\": {\n      \"data\": [\n        {\n          \"id\": 1,\n          \"username\": \"buddhi\",\n          \"firstName\": \"Buddhi\",\n          \"lastName\": \"Vikasitha\",\n          \"email\": \"buddhi@gmail.com\",\n          \"nic\": \"111212121212V\",\n          \"phoneMain\": \"0702132356\",\n          \"phoneExtra\": \"0702132357\",\n          \"homePhone\": \"0412273465\",\n          \"city\": \"Matara\",\n          \"examYear\": \"2022\",\n          \"address\": \"\\\"Wimalasewana\\\", Hingurupanagala,Kotapola\",\n          \"userRoleId\": 3,\n          \"createdAt\": \"2021-05-16T08:20:46.000Z\",\n          \"updatedAt\": \"2021-05-16T08:20:46.000Z\",\n        },\n        {\n          \"id\": 5,\n          \"username\": \"eshan\",\n          \"firstName\": \"Eshan\",\n          \"lastName\": \"Pathirana\",\n          \"email\": \"eshan@gmail.com\",\n          \"nic\": \"35423432434V\",\n          \"phoneMain\": \"0732132356\",\n          \"phoneExtra\": \"0732132357\",\n          \"homePhone\": \"0442273465\",\n          \"city\": \"Matara\",\n          \"examYear\": \"2022\",\n          \"address\": \"\\\"Wimalasewana\\\", Hingurupanagala,Kotapola\",\n          \"userRoleId\": 3,\n          \"createdAt\": \"2021-05-16T08:20:46.000Z\",\n          \"updatedAt\": \"2021-05-16T08:20:46.000Z\",\n        },\n        {\n          \"id\": 3,\n          \"username\": \"nevil\",\n          \"firstName\": \"Nevil\",\n          \"lastName\": \"Krishan\",\n          \"email\": \"nevil@gmail.com\",\n          \"nic\": \"222222323V\",\n          \"phoneMain\": \"0712132356\",\n          \"phoneExtra\": \"0712132357\",\n          \"homePhone\": \"0422273465\",\n          \"city\": \"Matara\",\n          \"examYear\": \"\",\n          \"address\": \"\\\"Wimalasewana\\\", Hingurupanagala,Kotapola\",\n          \"userRoleId\": 1,\n          \"createdAt\": \"2021-05-16T08:20:46.000Z\",\n          \"updatedAt\": \"2021-05-16T08:20:46.000Z\",\n        },\n        {\n          \"id\": 4,\n          \"username\": \"ythilina\",\n          \"firstName\": \"Thilina\",\n          \"lastName\": \"Kumarasinghe\",\n          \"email\": \"thilina@gmail.com\",\n          \"nic\": \"343423224V\",\n          \"phoneMain\": \"0722132356\",\n          \"phoneExtra\": \"0722132357\",\n          \"homePhone\": \"0432273465\",\n          \"city\": \"Matara\",\n          \"examYear\": \"\",\n          \"address\": \"\\\"Wimalasewana\\\", Hingurupanagala,Kotapola\",\n          \"userRoleId\": 1,\n          \"createdAt\": \"2021-05-16T08:20:46.000Z\",\n          \"updatedAt\": \"2021-05-16T08:20:46.000Z\",\n        },\n        {\n          \"id\": 2,\n          \"username\": \"yasiru\",\n          \"firstName\": \"Yasiru\",\n          \"lastName\": \"nilan\",\n          \"email\": \"yasiru@gmail.com\",\n          \"nic\": \"222222222V\",\n          \"phoneMain\": \"0702132850\",\n          \"phoneExtra\": \"0702132851\",\n          \"homePhone\": \"0702132852\",\n          \"city\": \"Matara\",\n          \"examYear\": \"\",\n          \"address\": \"\\\"Wimalasewana\\\", Hingurupanagala,Kotapola\",\n          \"userRoleId\": 2,\n          \"createdAt\": \"2021-05-16T08:20:46.000Z\",\n          \"updatedAt\": \"2021-05-16T08:20:46.000Z\",\n        }\n      ]\n    }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/user.js",
    "groupTitle": "User"
  }
] });