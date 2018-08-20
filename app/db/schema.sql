CREATE DATABASE burger_db;

USE burger_db;
CREATE TABLE burgers(
    id INT(10) AUTO_INCREMENT,
    burger_name VARCHAR(120) NOT NULL,
    devoured BOOLEAN,
        PRIMARY KEY(id)
);