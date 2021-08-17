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