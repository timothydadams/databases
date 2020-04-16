var models = require('../models');

module.exports = { // routes.js is ensuring these methods only receive what they should be. No conditional checks required
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages.
      //get a username from req
      // invoke the model
      models.messages.get(function(err, data) {
        if (err) {
          res.status(500).send({ error: 'We broke it: ' + err }).end();
          return;
        }
        res.status(200).send(data).end();
      });
      //search dbtable user for username
    },
    post: function (req, res) {  // a function which handles posting a message to the database
      models.messages.post(req.json, function(err, data) {
        if (err) {
          res.status(500).send({ error: 'We broke the post :( ' + err}).end();
        } else {
          res.status(201).send(data).end();
        }
      })
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      res.status(400).send({ error: 'You have made a bad request. Bad, bad request.' });
    },
    post: function (req, res) {
      models.users.post(req.json.username, function(err, data) {
        if (err) {
          res.status(500).send(err).end();
        } else {
          res.status(201).send(data).end();
        }
      });
    }
  }
};

