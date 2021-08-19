CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
		comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

/*1b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*/
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

/*1c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query*/
INSERT INTO Rating ( id, comment, rate, movie_id )
VALUES(
"001",
"teste de comentário",
10,
"00c"
);

/*1d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*/
ALTER TABLE Movie
DROP COLUMN rating;

/*1e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*/
DELETE FROM Movie WHERE id = "001";
