# Physics Ape Panthiya Backend
This is the backend app for Physics Ape Panthiya written using NodeJs.

**How to setup with docker**
1. Clone the repo
2. Install the dependencies using npm

    ``npm install``
3. run following command to start the docker environment.in the first time container may spin up and stop. that's not a problem. later you can restart it.

    ```docker-compose up -d``` 
4. first create the database by logging in to the mariadb container
   ```docker exec -it physics_mariadb_102 /bin/bash/```
5. then update the config.json file with correct values.
6. now again restart the physics_backend container.
7. log in to the physics_backend and execute the following commands to run the migrations against the db and load dummy data using seeds

    ```
   node_modules/.bin/sequelize db:migrate
   npx sequelize-cli db:seed:all
    ```
   to run a specific seed file
   ```npx sequelize-cli db:seed --seed name-of-seed-as-in-data```

8. application will be available on the following url.
    ```http://localhost:3000/```
    
9. phpmyadmin is available on

    ```http://localhost:9092/```

**How to setup without docker**
1. You need to have nodejs, mariadb setup on the host machine.
2. Clone the repo
3. Install the dependencies using npm

    ``npm install``
4. first create the database in the mariadb
5. then update the config.json file with correct values.
6. run following command to run the migrations to the db

    ```node_modules/.bin/sequelize db:migrate```
7. run following command to load dummy data to the database using seeds.

    ```npx sequelize-cli db:seed:all```
    
8. run ```npm start``` to start the application
9. application will be available on the following url.
    ```http://localhost:3000/```
10. phpmyadmin is available on

    ```http://localhost:9090/```
    
To Generate API Docs
```apidoc -i api/ -o apidoc/```

To Migrate Data in Production DB
```node_modules/.bin/sequelize db:migrate --env production```
