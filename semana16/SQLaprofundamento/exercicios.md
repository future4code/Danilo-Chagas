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
- [] 5a)
- [] 5b)
- [] 5c)
- [] 5d)
- [] 5e)

### Exercício 6
- [] 6a)
- [] 6b)
- [] 6c) 
- [] 6d)

### Exercício 7
- [] 7a)
- [] 7b)
- [] 7c) 
- [] 7d)
- [] 7e)
- [] 7f)

### Exercício 8
- [] 8a)
- [] 8b)
- [] 8c) 
- [] 8d)