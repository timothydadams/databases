var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // get all messages
      dbConnection.query('SELECT * FROM `messages`;', (err, results, fields) => {
        // fields will contain information about the returned results fields (if any) and we don't need this
        if (err) {
          // console.log('models error:', err);
          callback(err);
          return;
        }
        // console.log('Model success:', results);
        callback(err, results, fields);
      });
    }, // a function which produces all the messages
    post: function (messageObject, callback) {
      console.log('i made it to the MESSAGES model!!!!!!!   yayayayayayayaa------------------------');
      console.log('This is the message object inside the Model! --------', messageObject);
      const {username, message, roomname} = messageObject;
      // username: App.username,
      // text: FormView.$form.find('#message').val(),
      // roomname: Rooms.selected || 'lobby'

      //adds message to db
      var query1 = `INSERT INTO messages (text, userId, roomname) VALUES ("${message}", (SELECT id FROM users WHERE username = '${username}'), '${roomname}');`;

      // TEMP STUFF
      // `INSERT INTO messages (text, userId, roomId) VALUES ('this is the intended return message', (SELECT id FROM users WHERE username = 'jones'), (SELECT id FROM rooms WHERE roomname = 'lobby')); SELECT * FROM messages WHERE objectId = LAST_INSERT_ID();`

      var query2 = `SELECT objectId, createdAt FROM messages WHERE objectId = LAST_INSERT_ID()`;

      // we can get rid of this query by getting the id (And possibly timestamp?) from the fields object INSERT returns.s

      dbConnection.query(query1, (err, data, fields) => {
        if (err) {
          callback(err);
          return;
        }
        dbConnection.query(query2, (err, results, fields) => {
          if (err) {
            callback(err);
            return;
          }
          callback(null, results);
        });
      });

      //get a complete msg from db and send back

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {}, // get user information - NOT TESTED, DON'T DO IT
    post: function (username, callback) {
      console.log('i made it to the USERS model!!!!!!!   yayayayayayayaa------------------------');
      //var checkExistingUsers = `SELECT username FROM users WHERE username='${username}';`; // if username already exists, don't add it, end, call it a day
      var insertUser = `INSERT INTO users (username) VALUES ('${username}');`;


      // run dbConnection, if result array length is 0, callback(). If it doesn't exist, run insertUser and run POST callback on the return value?
      // if (results.length === 0) {
      dbConnection.query(insertUser, (err, results, fields) => {
        if (err) {
          callback(err);
          return;
        }
        callback(err, results);
      });
    }
  }
};

//module.exports.messages.post({text: 'Hey', username: 'tommy', roomname: 'lobby'}, getInfo);

// var getInfo = function(err, data, fields) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('this is the error:', err);
//   console.log('this is the result:', data); //{objectID: data.insertId createdAt: data.}
//   console.log('This is the fields:', fields);
// };


// module.exports.users.post('Tom', getInfo);


// insert into test (id1, id2) values (1, (select max(id) from test2)), (2, (select max(id) from test2));