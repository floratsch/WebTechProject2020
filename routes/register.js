
let cfg = require('../config.json')
const express = require('express');
const getDb = require("../db").getDb;
const jwt = require('jsonwebtoken');
const router = require("./login");

router.post('/', (req, res) => {
  const queryAll = {
    text: "SELECT * FROM users WHERE username = $1",
    values: [req.body.username]
  }

  db.query(queryAll).then(resultRows => {
    let results = resultRows.rows;

    if (results.length > 0) {
      res.status(400).json({
        message: "Benutzer existiert bereits"
      });
    } else {
      const queryInsert = {
        text: "INSERT INTO users (id, username, password) values ($1, $2, $3)",
        values: [req.body.id, req.body.username, req.body.password]
      };

      db.query(queryInsert).then(resultRows => {
        res.status(200).json({
          message: "User erfolgreich erstellt!"
        });
      })
    }
  }).catch((error) => {
    if(error) {
      res.status(400).json({
        message: "Fehler"
      });
    }
  });
})
