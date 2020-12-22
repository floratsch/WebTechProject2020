
let cfg = require('../config.json')
const express = require('express');
const router = express.Router();
const getDb = require("../db").getDb;
const jwt = require('jsonwebtoken');


router.post('/:username/:password', (req, res) => {
  const db = getDb();

  // get login parameters
  const username = req.params.username;     // change to get parameter from body
  const password =req.params.password;        // change to get parameter from body

  // prepare query
  const query = {
    text: 'SELECT * FROM users WHERE email = $1 AND password = $2',
    values: [username, password]
  }

  // issue query (returns promise)
  db.query(query)
    .then (results => {

      resultRows = results.rows;

      // no results
      if (resultRows.length < 1) {
        res.status(401).json({
          "message": "login failed"
        });
        return;
      }

      // everything ok
      resultUser = resultRows[0];
      const token = null;         // TODO: replace with your code
      res.status(200).json({
        "message": "login successful",
        username: resultUser.username,
        token: token
      });

    })
    .catch(error => {
      // error accessing db
      if (error) {
        res.status(400).json({
          "message": "error ocurred"
        });
        console.log(error.stack);
        return;
      }
    });

});

module.exports = router;
