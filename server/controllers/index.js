var models = require('../models');

module.exports = { // routes.js is ensuring these methods only receive what they should be. No conditional checks required
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages.
      //get a username from req
      // invoke the model
      models.messages.get(function(err, data) {
        if (err) {
          res.status(500).send(err).end();
          return;
        }
        res.status(200).send(data).end();
      });
      //search dbtable user for username
    },
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req.body, function(err, data) {
        console.log('message post: -----------------', req.body);
        console.log('This is the error, brace yourself: ----------------', err);
        if (err) {
          res.status(500).send(err).end();
        } else {
          res.status(201).send(data).end();
        }
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.status(400).send({ error: 'You have made a bad request. User information is private.' });
    },
    post: function (req, res) {
      console.log('This is a user post request: --------------------', req.body);
      models.users.post(req.body.username, function(err, data) {
        if (err) {
          res.status(500).send(err).end();
        } else {
          res.status(201).send(data).end();
        }
      });
    }
  }
};

