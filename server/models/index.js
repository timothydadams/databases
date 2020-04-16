var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // get all messages
      dbConnection.query('SELECT * FROM `messages`;', (err, results, field) => {
        // fields will contain information about the returned results fields (if any) and we don't need this
        if (err) {
          callback(err);
          return;
        }
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (messageObject, callback) {
      const {username, text, roomname} = messageObject;
      // username: App.username,
      // text: FormView.$form.find('#message').val(),
      // roomname: Rooms.selected || 'lobby'

      //adds message to db
      var query1 = `INSERT INTO messages (text, userId, roomname) VALUES ('${text}', (SELECT id FROM users WHERE username = '${username}'), '${roomname}');`;

      // TEMP STUFF
      // `INSERT INTO messages (text, userId, roomId) VALUES ('this is the intended return message', (SELECT id FROM users WHERE username = 'jones'), (SELECT id FROM rooms WHERE roomname = 'lobby')); SELECT * FROM messages WHERE objectId = LAST_INSERT_ID();`

      var query2 = `SELECT objectId, createdAt FROM messages WHERE objectId = LAST_INSERT_ID()`;

      dbConnection.query(query1, (err, data) => {
        if (err) {
          callback(err);
          return;
        }
        dbConnection.query(query2, (err, results) => {
          if (err) {
            callback(err);
            return;
          }
          callback(results);
        });
      });

      //get a complete msg from db and send back

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {}, // get user information - NOT TESTED, DON'T DO IT
    post: function (username, callback) {
      var checkExistingUsers = ``; // if username already exists, don't add it, end, call it a day
      var insertUser = '';
      // run dbConnection, if result array length is 0, callback(). If it doesn't exist, run insertUser and run POST callback on the return value?
      // if (results.length === 0) {

      // }

    } // add a user to the database
  }
};

module.exports.messages.post({text: 'Hey', username: 'tommy', roomname: 'lobby'}, function(data) { console.log(data); } );


// insert into test (id1, id2) values (1, (select max(id) from test2)), (2, (select max(id) from test2));