
require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/users', require('./users/users.controller'));
app.use('/friendlists/*', require('./friendlists/friendlists.controller'));


// start server
const port =  4000;
app.listen(port, () => console.log('Server listening on port ' + port));
