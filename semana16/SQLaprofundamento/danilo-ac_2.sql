/*Importante 2: Lembre-se que para os exercícios de UPDATE e DELETE, o SQL exige que você desative os Safe Updates. Para fazer isso, rode o seguinte comando no seu Workbench: */
SET SQL_SAFE_UPDATES = 0;

/*1d)Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres*/
ALTER TABLE actor CHANGE gender gender VARCHAR(100);

/*2a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003*/
UPDATE actor
SET name = "Novo Nome", birth_date = "2021/08/17" WHERE id = 003;

/*2b) Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*/
UPDATE actor
SET name = "JULIANA PAES" WHERE name = "Juliana Paes";

UPDATE actor
SET name = "Juliana Paes" WHERE name = "JULIANA PAES";

/*2c) Escreva uma query que atualize todas as informações do ator com o id `005` */
UPDATE actor
SET name = "Novo nome2",
salary = 1000000,
birth_date = "2021/08/17",
gender = "female"
WHERE id = "005";

/*2d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*/
UPDATE actor
SET nome = "Fulano"
WHERE id = "080";

UPDATE actor
SET name = "Fulano"
WHERE id = "080";

/*3a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro*/
DELETE FROM actor WHERE name = "Fernanda Montenegro";
SELECT * FROM actor;

/*3b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00*/
DELETE FROM actor WHERE gender = "male" AND salary > "1000000";

/*4a) Escreva uma query que pegue o maior salário de todos os atores e atrizes*/
SELECT MAX(salary) FROM actor;

/*4b) Escreva uma query que pegue o menor salário das atrizes*/
SELECT MIN(salary) FROM actor WHERE gender = "female";

/*4c) Escreva uma query que pegue a quantidade de atrizes*/
SELECT COUNT(*) FROM actor WHERE gender = "female";

/*4d) Escreva uma query que pegue a soma de todos os salários*/
SELECT SUM(salary) FROM actor;

/*5a) Releia a última query. Teste-a. Explique o resultado com as suas palavras*/
SELECT COUNT(*), gender
FROM actor
GROUP BY gender;

/*5b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*/
SELECT id, name
FROM actor
ORDER BY name DESC;

/*5c) Faça uma query que retorne todos os atores ordenados pelo salário*/
SELECT *
FROM actor
ORDER BY salary ASC;

/*5d) Faça uma query que retorne os atores com os três maiores salarios*/
SELECT *
FROM actor
ORDER BY salary DESC
LIMIT 3;

/*5e) Faça uma query que retorne a média de salário por gênero*/
SELECT gender, AVG(salary)
FROM actor
GROUP BY gender;