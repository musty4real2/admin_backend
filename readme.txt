on empty folder
npm init -y to create package.json
npm i json-server
then change the test under script to point to your json server
    "server": "json-server --watch db.json --port 5000",
    "client": "npm start --prefix client"
you can now run "npm run client"

instead of running it npm on two tabs one for npm run server and the other for npm start 

you can install concurrently using npm i concurrently
    "dev":"concurrently \" npm run server\" \"npm run client\""
cd to client and install the following
pm i react-admin ra-data-simple-rest @material-ui/core           
