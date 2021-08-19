#### Exercício 1)
- [x]1a)
    - chave estrangeira é um tipo de campo da tabela que faz referencia a outro campo de outra tabela, sendo que será somente possível preencher com um valor que existe nessa outra tabela;
- [x]1b)
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
- [x]1c)
    - ~~~~
      Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`molina-2135959-danilo-chagas`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
        ~~~~
    - Como o valor de id não existe em Movie, a ação de inserção não foi realizada.

- [x]1d)
    - ~~~~sql
        ALTER TABLE Movie
        DROP COLUMN rating;
        ~~~~
- [x]1e)
    - ~~~sql
        Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`molina-2135959-danilo-chagas`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
        ~~~~
    - Sucede mensagem de erro e não executa ação, pois a linha que seria excluída em "Movie" tem a chave "id" referenciada em outra tabela (Rating)

#### Exercício 2)
- []2a)
- []2b)
- []2c)
- []2d)

#### Exercícios 3)
- []3a)
- []3b)