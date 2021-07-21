CREATE DATABASE nasaproject;

CREATE TABLE test(
  user_id SERIAL PRIMARY KEY,
  email varchar(100),
  password varchar(100),
  description VARCHAR(255)
);

-- for user_posts

CREATE TABLE user_posts(
  post_id SERIAL PRIMARY KEY,
  post_title varchar,
  post_image varchar,
  post_description varchar,
  post_footer varchar,
  email varchar
  
);
insert into user_posts(post_title, post_image,post_description, post_footer,email) values ('title','image','description','footer','test@gmail.com')
