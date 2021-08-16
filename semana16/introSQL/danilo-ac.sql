CREATE TABLE actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE actor;

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male");

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female");

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Tony Tornado",
2200000,
"1930-05-26",
"male");

INSERT INTO actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT * from actor WHERE gender = "female";

SELECT * from actor WHERE gender = "invalid";

SELECT id, name, salary from actor WHERE salary <= 500000;

SELECT id, nome from actor WHERE id = "002";

SELECT id, name from actor WHERE id = "002";

SELECT * FROM actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

SELECT * FROM actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND (salary BETWEEN 350000 AND 900000 );