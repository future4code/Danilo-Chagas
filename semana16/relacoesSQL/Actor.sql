CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"001",
	"Tony Ramos",
	400000,
	"1948-08-25",
	"male"
),(
	"002",
	"Glória Pires",
	1200000,
	"1963-08-23",
	"female"
),(
	"003", 
	"Fernanda Montenegro",
	300000,
	"1929-10-19", 
	"female"
),(
	  "004", 
	  "Antônio Fagundes",
	  400000,
	  "1949-04-18", 
	  "male"
),(
	  "005", 
	  "Juliana Paes",
	  719333.33,
	  "1979-03-26", 
	  "female"
);