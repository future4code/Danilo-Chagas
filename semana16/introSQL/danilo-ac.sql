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

CREATE TABLE Filmes (
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
rate INT NOT NULL,
launch_date DATE NOT NULL
);

INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
VALUES("001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
7,
"2006/01/06");

INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
VALUES("002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
10,
"2012/12/27");

INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
VALUES("003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
8,
"2017/11/02");

INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
VALUES("004",
"O Auto da Compadecida",
"O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
10,
"2000/09/15");

SELECT id, title, rate from Filmes WHERE id = "004";

SELECT * from Filmes WHERE title = "Se eu fosse você";

SELECT id, title, synopsis from Filmes WHERE rate >= 7;

SELECT * from Filmes WHERE title LIKE "%vida%";

SELECT * from Filmes WHERE title LIKE "%dona%" or synopsis LIKE "%dona%";

SELECT * from Filmes WHERE launch_date <= "2021-08-16";

SELECT * from Filmes WHERE launch_date <= "2021-08-16" AND
(title LIKE "%dona%" or synopsis LIKE "%dona%") AND
rate >= 7;