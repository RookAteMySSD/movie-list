DROP DATABASE IF EXISTS movielist;
CREATE DATABASE movielist;
USE movielist;

CREATE TABLE movie (
  movie_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  watchStatus VARCHAR(9) DEFAULT 'unwatched'
)
