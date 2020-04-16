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
  roomId INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (objectId)
);

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE messages ADD FOREIGN KEY (userId) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (roomId) REFERENCES rooms (id);


-- INSERT INTO messages (text,userId,roomId) VALUES ('','','');
-- INSERT INTO users (username) VALUES ('');
-- INSERT INTO rooms (roomname) VALUES ('');

INSERT INTO users (username) VALUES ('tommy');
INSERT INTO users (username) VALUES ('jones');

INSERT INTO rooms (roomname) VALUES ('lobby');
INSERT INTO rooms (roomname) VALUES ('panic-attack');

INSERT INTO messages (text,userId,roomId) VALUES ('hello world',1,1);
-- INSERT INTO messages (text,userId,roomId) VALUES ('','','');
-- INSERT INTO messages (text,userId,roomId) VALUES ('','','');