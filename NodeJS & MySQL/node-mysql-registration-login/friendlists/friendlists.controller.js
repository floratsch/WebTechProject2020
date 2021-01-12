
const express = require('express');
const router = express.Router();

module.exports = router;


router.get('/friendlists/get', (request,response) => {
  if (request.params.id) {
    db.execute("SELECT users.id, users.name, users.email, friendlists.has_accepted FROM friendlists " +
      "LEFT JOIN users ON friendlists.friend_id = users.id " +
      "WHERE user_id = ?;"
      , [request.params.id], (err, result) => {
        if (err) throw err;

        response.send(result);
      })
  } else {
    response.sendStatus(404);
  }
});


router.post('/friendlists/add', (request, response) => {
  console.log(request.params.id);
  console.log(request.params.friendid);
  if (request.params.id && request.body.friendId) {
    let queryResCount = 0;

    for (let i = 0; i < 2; i++) {
      let userId = (i == 0) ? request.params.id : request.body.friendId;
      let friendId = (i == 0) ? request.body.friendId : request.params.id;

      db.execute("insert into friendlists (user_id, friend_id, has_accepted) values (?, ?, 0)", [userId, friendId],
        (err, result) => {
          if (err) throw err;

          queryResCount++;
        });
    }

    if (queryResCount == 2) {
      response.sendStatus(204);
    } else {
      response.sendStatus(500);
    }

  } else {
    response.sendStatus(422);
  }
});


router.put('/friendlists/accept', ((request, response) => {
  if (request.params.id && request.body.friendId) {
    let queryResCount = 0;

    for (let i = 0; i < 2; i++) {
      let userId = (i == 0) ? request.params.id : request.body.friendId;
      let friendId = (i == 0) ? request.body.friendId : request.params.id;

      db.execute("update friendlists set has_accepted = 1 where user_id = ? and friend_id = ?", [userId, friendId],
        (err, result) => {
          if (err) throw err;

          queryResCount++;
        });
    }

    if (queryResCount == 2) {
      response.sendStatus(204);
    } else {
      response.sendStatus(500);
    }

  } else {
    response.sendStatus(422);
  }
}))



/*
router.route('/friendlists/:id')
  .get((request, response) => {
    if (request.params.id) {
      db.execute("SELECT users.id, users.name, users.email, friendlists.has_accepted FROM friendlists " +
        "LEFT JOIN users ON friendlists.friend_id = users.id " +
        "WHERE user_id = ?;"
        , [request.params.id], (err, result) => {
          if (err) throw err;

          response.send(result);
        })
    } else {
      response.sendStatus(404);
    }
  })
  .post((request, response) => {
    if (request.params.id && request.body.friendId) {
      let queryResCount = 0;

      for (let i = 0; i < 2; i++) {
        let userId = (i == 0) ? request.params.id : request.body.friendId;
        let friendId = (i == 0) ? request.body.friendId : request.params.id;

        db.execute("insert into friendlists (user_id, friend_id, has_accepted) values (?, ?, 0)", [userId, friendId],
          (err, result) => {
            if (err) throw err;

            queryResCount++;
          });
      }

      if (queryResCount == 2) {
        response.sendStatus(204);
      } else {
        response.sendStatus(500);
      }

    } else {
      response.sendStatus(422);
    }
  })
  .put((request, response) => {
    if (request.params.id && request.body.friendId) {
      let queryResCount = 0;

      for (let i = 0; i < 2; i++) {
        let userId = (i == 0) ? request.params.id : request.body.friendId;
        let friendId = (i == 0) ? request.body.friendId : request.params.id;

        db.execute("update friendlists set has_accepted = 1 where user_id = ? and friend_id = ?", [userId, friendId],
          (err, result) => {
            if (err) throw err;

            queryResCount++;
          });
      }

      if (queryResCount == 2) {
        response.sendStatus(204);
      } else {
        response.sendStatus(500);
      }

    } else {
      response.sendStatus(422);
    }
  })
*/
