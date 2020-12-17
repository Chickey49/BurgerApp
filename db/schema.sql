
create database burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INTEGER auto_increment NOT NULL,
  burger_name VARCHAR(20) NOT NULL,
  devoured tinyint(1) not null,
  PRIMARY KEY(id)
);

INSERT INTO burgers(burger_name, devoured) VALUES ('mushroom burger', 0);
INSERT INTO burgers(burger_name, devoured) VALUES ('cheddar burger', 0);
INSERT INTO burgers(burger_name, devoured) VALUES ('vegetarian burger', 0);
