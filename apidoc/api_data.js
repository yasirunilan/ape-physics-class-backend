define({ "api": [
  {
    "type": "get",
    "url": "/classCategories",
    "title": "Get Class Categories",
    "name": "GetClassCategories",
    "group": "ClassCategory",
    "version": "1.0.0",
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
          "content": "    HTTP/1.1 200 OK\n{\n  \"error\": false,\n  \"data\": [\n    {\n      \"id\": 1,\n      \"name\": \"2021-01-07\",\n      \"description\": \"2021-01-07 Class\",\n      \"date\": \"2021-01-07T00:00:00.000Z\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"classCategoryId\": 1,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\",\n      \"ClassCategoryId\": 1\n    },\n    {\n      \"id\": 2,\n      \"name\": \"2021-01-14\",\n      \"description\": \"2021-01-14 Class\",\n      \"date\": \"2021-01-14T00:00:00.000Z\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"classCategoryId\": 1,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\",\n      \"ClassCategoryId\": 1\n    },\n    {\n      \"id\": 3,\n      \"name\": \"2021-01-21\",\n      \"description\": \"2021-01-21 Class\",\n      \"date\": \"2021-01-21T00:00:00.000Z\",\n      \"link\": \"https://www.youtube.com/watch?v=IYfgkdy82lo&list=RDIYfgkdy82lo&index=1\",\n      \"classCategoryId\": 1,\n      \"createdAt\": \"2021-05-16T07:04:12.000Z\",\n      \"updatedAt\": \"2021-05-16T07:04:12.000Z\",\n      \"ClassCategoryId\": 1\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/classSessions.js",
    "groupTitle": "ClassSessions"
  }
] });
