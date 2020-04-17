DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId INTEGER NOT NULL AUTO_INCREMENT,
  createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
  text MEDIUMTEXT NULL,
  userId INTEGER NOT NULL DEFAULT 0,
  roomname VARCHAR(50) NOT NULL DEFAULT 'lobby',
  PRIMARY KEY (objectId)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;

-- CREATE TABLE rooms (
--   id INTEGER NOT NULL AUTO_INCREMENT,
--   roomname VARCHAR(50) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- ALTER TABLE messages ADD FOREIGN KEY (userId) REFERENCES users (id);
-- ALTER TABLE messages ADD FOREIGN KEY (roomId) REFERENCES rooms (id);


-- INSERT INTO messages (text,userId,roomId) VALUES ('','','');
-- INSERT INTO users (username) VALUES ('');
-- INSERT INTO rooms (roomname) VALUES ('');

INSERT INTO users (username) VALUES ('tommy');
INSERT INTO users (username) VALUES ('jones');

-- INSERT INTO rooms (roomname) VALUES ('lobby');
-- INSERT INTO rooms (roomname) VALUES ('panic-attack');

INSERT INTO messages (text,userId,roomname) VALUES ('hello world',1,'lobby');
INSERT INTO messages (text,userId,roomname) VALUES ('greetings',2,'disco');
INSERT INTO messages (text,userId,roomname) VALUES ('some stuffff',1,'panic');
-- INSERT INTO messages (text,userId,roomId) VALUES ('','','');
-- INSERT INTO messages (text,userId,roomId) VALUES ('','','');