CREATE DATABASE Project;

USE Project;

CREATE TABLE user
(	First_Name varchar(25) NOT NULL,
	Last_Name  varchar(25) NOT NULL,
	Email Varchar(25) NOT NULL,
    Password varchar(20) NOT NULL,
    Confirm_Password Varchar(20) NOT NULL,
    PRIMARY KEY(Email)
    );
    
DESC user;

SELECT * FROM user;

DROP TABLE user;


 




