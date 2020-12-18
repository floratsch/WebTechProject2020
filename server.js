
let cfg = require('./src/app/dbconfig/config.json')
let express = require('express');
let cors = require('cors')
const app = express();
app.use(express.static('public'));
app.use(cors());
const db = require("./src/app/dbconfig/db.config");


let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies


db.initDb.then(() => {
  app.listen(cfg.server.port, () => {
    console.log("Listening on port " + cfg.server.port + "...");
  });
}, () => {console.log("Failed to connect to DB!")});
