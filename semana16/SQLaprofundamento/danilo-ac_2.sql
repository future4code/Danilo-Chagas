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

/*6a) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.*/
ALTER TABLE Filmes
ADD playing_limit_date DATE;

/*6b) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*/
ALTER TABLE Filmes
CHANGE rate rate FLOAT NOT NULL;
describe Filmes;

/*6c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*/
UPDATE Filmes
SET playing_limit_date = "2021-12-25" WHERE id = "001";

UPDATE Filmes
SET playing_limit_date = "2013-01-27" WHERE id = "002";

/*6d) Delete algum dos filmes, mas guarde o id.
Tente fazer uma query para atualizar a sinopse desse
filme que você acabou de deletar (usando o mesmo id).
Anote o resultado e explique.*/
DELETE from Filmes
WHERE id = "004";

SELECT * FROM Filmes;

UPDATE Filmes
SET synopsis = "teste"
WHERE id = "004";

/*7a) Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?*/
SELECT COUNT(*)
FROM Filmes
WHERE rate > 7.5;

/*7b) Qual a média das avaliações dos filmes?*/
SELECT AVG(rate)
FROM Filmes;

/*7c) Qual a quantidade de filmes em cartaz?*/
SELECT COUNT(*)
FROM Filmes
WHERE playing_limit_date > curdate();

/*7d) Qual a quantidade de filmes que ainda irão lançar?*/
SELECT COUNT(*)
FROM Filmes
WHERE launch_date > curdate();

/*7e) Qual a maior nota dos filmes?*/
SELECT MAX(rate)
FROM Filmes;
/*7f) Qual a menor nota dos filmes?*/
SELECT MIN(rate)
FROM Filmes;

/*8a) Retorne todos os filmes em ordem alfabética*/
SELECT title
FROM FILMES
ORDER BY title ASC;

/*8b) Retorne os 5 primerios filmes em ordem descrente alfabética*/

/*8c) Retorne os 3 filmes mais recentes em cartaz*/

/*8d) Retorne os 3 filmes melhor avalidos*/