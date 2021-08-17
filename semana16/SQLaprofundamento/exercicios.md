### Exercício 1
- [x] 1a)
    ~~~~sql    
    ALTER TABLE Actor DROP COLUMN salary;
    ~~~~
    - deleta a coluna/campo salary da tabela Actor;
- [x] 1b)
    ~~~~sql    
    ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
    ~~~~
    - altera o nome da coluna/campo *gender* para *sex* e define o tipo;
- [x] 1c) 
    ~~~~sql
    ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
    ~~~~
    - altera o tipo da coluna/campo *gender* para conter até 255 caracteres;
- [x] 1d)
    ~~~~sql
    ALTER TABLE actor CHANGE gender gender VARCHAR(100)
    ~~~~
    *5 row(s) affected Records: 5  Duplicates: 0  Warnings: 0*


### Exercício 2
- [x] 2a)
    ~~~~sql
    UPDATE actor
    SET name = "Novo Nome", birth_date = "2021/08/17" WHERE id = 003;
    ~~~~
- [x] 2b)
    ~~~~sql
    UPDATE actor
    SET name = "JULIANA PAES" WHERE name = "Juliana Paes";
    ~~~~
    
    ~~~~sql
    UPDATE actor
    SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
    ~~~~
- [x] 2c)
    ~~~~sql
    UPDATE actor
    SET name = "Novo nome2",
    salary = 1000000,
    birth_date = "2021/08/17",
    gender = "female"
    WHERE id = "005";
    ~~~~
- [x] 2d)
    ~~~~sql
    UPDATE actor
    SET nome = "Fulano"
    WHERE id = "080";
    
    UPDATE actor
    SET name = "Fulano"
    WHERE id = "080";
    ~~~~
    - *Error Code: 1054. Unknown column 'nome' in 'field list'*
    - *0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0*
    - No 1o tentei atualizar a coluna/campo "nome" ao invés de "name" e sucedeu em uma msg de erro informando que a coluna é desconhecida
    No 2o usei o campo name que consta na tabela, mas com o um id inexistente, nesse caso uma msg de SUCESSO foi retornada, mas informando 0 mundanças.
 
### Exercício 3
- [x] 3a)
    ~~~~sql
    DELETE FROM actor WHERE name = "Fernanda Montenegro";
    ~~~~
    obs.: como já havia alterado na 2a, resultou em operação sem ação: *"0 row(s) affected"*
- [x] 3b)
    ~~~~sql
    DELETE FROM actor WHERE gender = "male" AND salary > "1000000";
    ~~~~
    obs.: resultou em operação sem ação uma vez que não teve valor correspondente econtrado: *"0 row(s) affected"*
    

### Exercício 4
- [x] 4a)
   ~~~~sql
   SELECT MAX(salary) FROM actor;
   ~~~~
    *1200000*
- [x] 4b)
   ~~~~sql
    SELECT MIN(salary) FROM actor WHERE gender = "female";
   ~~~~
    *300000*
- [x] 4c)
    ~~~~sql
    SELECT COUNT(*) FROM actor WHERE gender = "female";
    ~~~~
    *3*
- [x] 4d)
    ~~~~sql
    SELECT COUNT(*) FROM actor WHERE gender = "female";
    ~~~~
    *3300000*

### Exercício 5
- [x] 5a)
    ~~~~sql
    SELECT COUNT(*), gender
    FROM actor
    GROUP BY gender
    ~~~~
    - Contou a quantidade de valores diferentes dentro da coluna gender e agrupou a soma desse resultado por esses diferentes valores de gender;
    
    |COUNT(*)|gender|
    |--|--|
    |2|male|
    |3|female|
- [x] 5b)
    ~~~~sql
    SELECT id, name
    FROM actor
    ORDER BY name DESC;
    ~~~~

    |id|name|
    |--|--|
    |001|Tony Ramos|
    |005|Novo nome2|
    |003|Novo Nome|
    |002|Glória Pires|
    |004|Antônio Fagundes|
- [x] 5c)
    ~~~~sql
    SELECT *
    FROM actor
    ORDER BY salary ASC;
    ~~~~
    
    |id|name|salary|birth_date|gender|
    |--|--|--|--|--|
    |003|Novo Nome|300000|2021-08-17|female|
    |001|Tony Ramos|400000|1948-08-25|male|
    |004|Antônio Fagundes|400000|1949-04-18|male|
    |005|Novo nome2|1000000|2021-08-17|female|
    |002|Glória Pires|1200000|1963-08-23|female|
- [x] 5d)
    ~~~~sql
    SELECT *
    FROM actor
    ORDER BY salary DESC
    LIMIT 3;
    ~~~~
    |id|name|salary|birth_date|gender|
    |--|--|--|--|--|
    |002|Glória Pires|1200000|1963-08-23|female|
    |005|Novo nome2|1000000|2021-08-17|female|
    |004|Antônio Fagundes|400000|1949-04-18|male|
- [x] 5e)
    ~~~~sql
    SELECT gender, AVG(salary) FROM actor GROUP BY gender;
    ~~~~
    |gender|AVG(salary)|
    |--|--|
    |male|400000|
    |female|833333.3333333334|

### Exercício 6
- [x] 6a)
    ~~~~sql
    ALTER TABLE Filmes
    ADD playing_limit_date DATE;
    select * from Filmes
    ~~~~
- [x] 6b)
    ~~~~sql
    ALTER TABLE Filmes
    CHANGE rate rate FLOAT NOT NULL;
    ~~~~
- [X] 6c) 
    ~~~~sql
    UPDATE Filmes
    SET playing_limit_date = "2021-12-25" WHERE id = "001";
    
    UPDATE Filmes
    SET playing_limit_date = "2013-01-27" WHERE id = "002";
    ~~~~
- [X] 6d)
    ~~~~sql
    DELETE from Filmes
    WHERE id = "004";
    
    SELECT * FROM Filmes;
    
    UPDATE Filmes
    SET synopsis = "teste"
    WHERE id = "004";
    ~~~~
    *0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0*
    - o update do id deletado não teve efeito, pois o id não existe mais/ não é mais acessível para manipulação.

### Exercício 7
- [x] 7a)
    ~~~~sql
    SELECT COUNT(*)
    FROM Filmes
    WHERE rate > 7.5;
    ~~~~
    |COUNT(*)|
    |--|
    |2|
- [x] 7b)
    ~~~~sql
    SELECT AVG(rate)
    FROM Filmes;
    ~~~~
    |AVG(rate)|
    |--|
    |8.333333333333334|

- [x] 7c) 
    ~~~~sql
    SELECT COUNT(*)
    FROM Filmes
    WHERE playing_limit_date > curdate();
    ~~~~
    |COUNT(*)|
    |--|
    |1|
- [x] 7d)
    ~~~~sql
    SELECT COUNT(*)
    FROM Filmes
    WHERE launch_date > curdate();
    ~~~~
    |COUNT(*)|
    |--|
    |0|
- [x] 7e)
    ~~~~sql
    SELECT MAX(rate)
    FROM Filmes;
    ~~~~
    |MAX(rate)|
    |--|
    |10|
- [x] 7f)
    ~~~~sql
    SELECT MIN(rate)
    FROM Filmes;
    ~~~~
    |MIN(rate)|
    |--|
    |7|

### Exercício 8
- [] 8a)
- [] 8b)
- [] 8c) 
- [] 8d)