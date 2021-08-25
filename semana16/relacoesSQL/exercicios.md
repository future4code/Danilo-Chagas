#### Exercício 1)
- [x] 1a)
    - chave estrangeira é um tipo de campo da tabela que faz referencia a outro campo de outra tabela, sendo que será somente possível preencher com um valor que existe nessa outra tabela;
- [x] 1b)
    - ~~~~sql
        INSERT INTO Rating ( id, comment, rate, movie_id )
        VALUES(
        "001",
        "teste de comentário filme 001",
        10,
        "001"
        ),(
        "002",
        "teste de comentário filme 002",
        9,
        "002"
        ),(
        "003",
        "teste de comentário filme 003",
        8,
        "003"
        ),(
        "004",
        "teste de comentário filme 004",
        7,
        "004"
        );
        ~~~~
- [x] 1c)
    - ~~~~
      Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`molina-2135959-danilo-chagas`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
        ~~~~
    - Como o valor de id não existe em Movie, a ação de inserção não foi realizada.
- [x] 1d)
    - ~~~~sql
        ALTER TABLE Movie
        DROP COLUMN rating;
        ~~~~
- [x] 1e)
    - ~~~sql
        Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`molina-2135959-danilo-chagas`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
        ~~~~
    - Sucede mensagem de erro e não executa ação, pois a linha que seria excluída em "Movie" tem a chave "id" referenciada em outra tabela (Rating)

#### Exercício 2)
- [x] 2a)
    - ~~~~sql
        CREATE TABLE MovieCast (
    |movie_id VARCHAR(255),
    |actor_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie(id),
        FOREIGN KEY (actor_id) REFERENCES Actor(id)
        );
        ~~~~
    - A tabela MovieCast possui 2 colunas que fazem referencias as colunas  das tabelas Movie e Actor, ou seja MovieCast só poderá armazernar dados que estão primeiramente contidos em Movie e Actor
- [x] 2b)
    - ~~~~sql
        INSERT INTO MovieCast ( movie_id, actor_id )
        VALUES(
        |"001",
        |"001"
        ),(
        |"001",
            "002"
        ),(
        |"002",
            "003"
        ),(
        |"003",
            "005"
        ),(
        |"004",
            "004"
        ),(
        |"004",
            "001"
        );
        ~~~~
- [x] 2c)
   - ~~~~sql
        INSERT INTO MovieCast ( movie_id, actor_id )
        VALUES("007","001");
        ~~~~
    - ~~~~sql
        Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`molina-2135959-danilo-chagas`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
        ~~~~
    - Não foi possível criar uma nova linha em MovieCast com um dos valores inexistentes para Movie, pois para inserir qlqr dado dentro de MovieCast, os valore precisam existir nas duas tabelas de referência, Movie e Actor.
- [x] 2d)
    - ~~~~sql
        DELETE FROM Actor
        WHERE id = "001";
        ~~~~

    - ~~~~sql
        Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`molina-2135959-danilo-chagas`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
        ~~~~
     - Não foi possível apagar a linha do Ator em  referenciado em Actor, pois ele é um valor dependido por actor_id na tabela MovieCast

#### Exercício 3)
- [x] 3a)
    - ~~~~sql
        SELECT * FROM Movie 
        INNER JOIN Rating ON Movie.id = Rating.movie_id;
        ~~~~
    - Essa query busca retornar um junção/intersecção (INNER JOIN) de Movie e Rating, sendo que o operador ON indica qual é o campo em comum que deve ser feita a buca desses dados. Caso seja encontrado um valor em comum entre as colunas 'id' de Movie e 'movie_id' de Rating, será feita uma junção das respectivas linhas dessas duas tabelas, bem como trazendo as colunas definadas logo no começo da query em SELECT .
- [x] 3b)
    - ~~~~sql
        SELECT Movie.title as "Title",
        Movie.id as "ID",
        Rating.rate as "Rate"
        FROM Movie
        INNER JOIN Rating
        ON Movie.id = Rating.movie_id;
        ~~~~
    - |Title|ID|Rate|
        |--|--|--|
        |Deus é Brasileiro|004|7|
        |Doce de mãe|002|9|
        |Dona Flor e Seus Dois Maridos|003|8|
        |Se Eu Fosse Você|001|10|



#### Exercícios 4)
- [x] 4a)
    - ~~~~sql
        SELECT Movie.title as "Title",
        Movie.id as "ID",
        Rating.rate as "Rate",
        Rating.comment as "Comments"
        FROM Movie
        LEFT JOIN Rating
        ON Movie.id = Rating.movie_id;
        ~~~~