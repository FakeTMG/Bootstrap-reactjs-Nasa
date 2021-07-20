CREATE DATABASE nasaproject;

CREATE TABLE loginandsign(
  user_id SERIAL PRIMARY KEY,
  email varchar(100),
  password varchar(100),
  description VARCHAR(255)
);