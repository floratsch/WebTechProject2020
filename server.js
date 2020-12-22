
// imports
let cfg = require('./config.json')      // config file
let express = require('express');       // express module
let cors = require('cors');             // cross origin requests (localhost -> localhost:3000)
const db = require("./db");             // database connector

const app = express();
app.use(express.static('public'));      // host public folder w/ images
app.use(cors());                        // allow all origins -> Access-Control-Allow-Origin: *

// bodyparser for sending different http request bodies
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));     // support encoded bodies
app.use(bodyParser.json());                             // support json encoded bodies

// set routes (import routes defined in modules of 'routes' folder and point to routes)

//register
const regRoute = require("./routes/register");
app.use("/register", regRoute);

// default route (has to be defined last)
app.use("/", (req, res) => {
  res.send("Welcome to gallery server 1.0");
});

// db connection and listening on port
const PORT = process.env.PORT || cfg.server.port;
db.initDb.then(() => {
  app.listen(PORT, () => {
    console.log("Listening on port " + PORT + "...");
  });
}, () => {console.log("Failed to connect to DB!")});
