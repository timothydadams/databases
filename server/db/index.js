var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


dbConnection = mysql.createConnection({
  // host: '127.0.0.1:3306',
  user: 'root',
  password: '',
  database: 'chat'
});

dbConnection.connect((err, data) =>{
  if (err) {
    throw ('Failed to connect', err);
    // console.log('error:', err);
    // return;
  }
  // console.log('data:', data);
});


//The most basic way to perform a query is the .query() method on an object(Connection, Pool, or PoolNamespace instance).
//dbconnectionInstance.query(sqlString, callback), table names need backticks!!!!


