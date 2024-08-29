on empty folder
npm init -y to create package.json
npm i json-server
then change the test under script to point to ypur json server
"server":"json-server --watch db.json"
