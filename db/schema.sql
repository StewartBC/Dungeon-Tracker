CREATE DATABASE dungeon_db;
USE dungeon_db;

CREATE TABLE dungeons
(
	id int NOT NULL AUTO_INCREMENT,
	dungeon_name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);