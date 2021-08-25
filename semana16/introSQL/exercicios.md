### Exercício 1
- [x] 1a) 
    - "id" possui o tipo VARCHAR(255) indicando que receberá valores em string e com máximo de 255 caracteres, além disso possui o tipo PRIMARY KEY indicando que esse campo deve ser utilizado como referência de identificação;
    - "name" possui o tipo VARCHAR(255) indicando que receberá texto e NOT NULLL indicando que não pode ser um campo sem valor;
    - "birth_date" tipo DATE indica que receberá formato de data e NOT NULL que deverá conter valor;
    -  "gender" tipo VARCHAR(6) que receberá string de até 6 caracteres e NOT NULL que deverá conter valor.

- [x] 1b) 
    - SHOW DATABASES resultou em 2 linhas de resultados, sendo: 1a linha - information_schema e 2a linha - o nome da minha base de dados;
    - SHOW TABLES retornou as tabelas registradas na minha base de dados, sendo elas, 'actor' e 'meu_teste';


- [x] 1c) 
    - DESCRIBE actor resultou em 5 linhas e 6 colunas, sendo que cada linha representa os campos existentes na minha tabela, e as colunas indicam as propriedades, sendo '#' a posição/, 'field' o nome do campo/coluna em si, 'type' o tipo do campo/coluna, 'null' se pode ser um campo nulo, 'key' qual o index da campo/coluna, 'Default' se há valor padrão para aquela coluna/campo e 'Extra' se há alguma informação extra sobre aquele campo;
 
### Exercício 2
- [x] 2a)
    - OK, dados inseridos
- [x] 2b)
    - *" Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' ", Entrada duplicada '002' para a chave "Primária"*, se deu devido o valor '002' já existir para o campo/coluna de ID que por sua vez é uma chave primária, de referência/posição principal;
- [x] 2c)
    - *" Error Code: 1136. Column count doesn't match value count at row 1 ", Quantidade de coluna não correponde com a quantidade de valores na linha 1*, ou seja, inicialmente é esperado até 3 valores para serem inseridos, contudo uma quantidade diferente foi inserida para registro, nesse caso maior, e acabou resultando em negativa do sistema para registro na tabela.
- [x] 2d)
    - *" Error Code: 1364. Field 'name' doesn't have a default value ", Campo 'nome' não tem um valor padrão*, o campo 'name' não possui um valor gerado automaticamente no registro de uma nova linha na tabela 'actor', e esse campo em sua configutração inicial deve receber um valor em string de até 255 caracteres
- [x] 2e)
    - *" Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 ", Valor incorreto de data: '1950' para a coluna 'birth_date' na linha 1*, nese caso o campo indicado espera receber um valor em formato de data do SQL, que deve ser em string, e como foi passado um valor ser estar contido em "", foi interpretado como uma operação matemática de subtração, resultando em 1950, que por sua vez também não corresponde ao valor esperado no campo.
- [x] 2f)
    - OK; registros efetuados

### Exercício 3
- [x] 3a)
    - Query com condição *WHERE gender = "female"*
        ~~~~sql
        SELECT * from actor WHERE gender = "female";
        ~~~~
- [x] 3b)
    - Query com seleção do campo *salary* e condição *WHERE name = "Tony Ramos"*
        ~~~~sql
        SELECT salary from actor WHERE name = "Tony Ramos";
        ~~~~
- [x] 3c)
    - Query com condição *WHERE gender = "invalid* retornou vazio, pois, embora toda a sintaxe esteja correta, não foi encontrado o valor "invalid" no campo gender
        ~~~~sql
        SELECT * from actor WHERE gender = "invalid";
        ~~~~
- [x] 3d)
    - Query com condição *WHERE salary <= 500000* retornou 3 linhas:
    
        |id|name|salary|
        |--|--|--|
        |001|Tony Ramos|400000|
        |003|Fernanda Montenegro|300000|
        |004|Antônio Fagundes|400000|

        ~~~~sql
            SELECT id, name, salary from actor WHERE salary <= 500000;
        ~~~~
- [x] 3e)
    - *Error Code: 1054. Unknown column 'nome' in 'field list', Coluna 'nome' desconhecida em 'lista de campo'*, indica que 'nome' não é um valor presente em na lista de campos cadastrados. Para que tenhamos sucesso, precisamos corrigir o valor para 'name', pois este é um valor registrado na 'lista de campo' em nossa tabela.
    
        ~~~~sql
            SELECT id, name from actor WHERE id = "002";
        ~~~~

        resultado
        |id|name|
        |--|--|
        |002|Glória Pires|
        
### Exercício 4
- [x] 4a)
    - ~~~~sql
        SELECT * FROM Actor
        WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
        ~~~~
        Esta query busca o retorno de todos os campos da tabela Actor, onde o campo de nome contenha valores que comecem com A ou J e os salários acima de 300.000.
        O * indica que esperamos todos os campos registrados na tabela Actor
        WHERE indica que temos uma condição para esta busca
        Os argumentos contidos em *()* é a prioridade de busca, ou seja, o conjunto de argumentos contidos por ele devem ser resolvidos juntamente; após isso há o operador AND que indica que esse resultado deva ser concomitante as condições sequentes, sendo elas o salário maior que 300.000
- [x] 4b)
    - ~~~~sql
        SELECT * FROM Actor
        WHERE (name NOT LIKE "A%") AND salary > 350000
        ~~~~

        |id|name|salary|birth_date|gender|
        |--|--|--|--|--|
        |001|Tony Ramos|400000|1948-08-25|male|
        |002|Glória Pires|1200000|1963-08-23|female|
        |005|Juliana Paes|719333|1979-03-26|female|
- [x] 4c)
    - ~~~~sql
        SELECT * FROM actor
        WHERE (name LIKE "%G%" OR name LIKE "%g%");
        ~~~~
        |id|name|salary|birth_date|gender|
        |--|--|--|--|--|
        |002|Glória Pires|1200000|1963-08-23|female|
        |003|Fernanda Montenegro|300000|1929-10-19|female|
        |004|Antônio Fagundes|400000|1949-04-18|male|
- [x] 4d)
    - ~~~~sql
        SELECT * FROM actor
        WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND (salary BETWEEN 350000 AND 900000 );
        ~~~~

        |id|name|salary|birth_date|gender|
        |--|--|--|--|--|
        |001|Tony Ramos|400000|1948-08-25|male|
        |004|Antônio Fagundes|400000|1949-04-18|male|
        |005|Juliana Paes|719333|1979-03-26|female|

### Exercício 5
- [x] 5a)
    - ~~~~sql
        CREATE TABLE Filmes (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        synopsis TEXT NOT NULL,
        rate INT NOT NULL,
        launch_date DATE NOT NULL
        );
        ~~~~
- [x] 5b)
    - ~~~~sql
        INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
        VALUES("001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        7,
        "2006/01/06");
        ~~~~
- [x] 5c)
    - ~~~~sql
       INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
        VALUES("002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        10,
        "2012/12/27");
        ~~~~
- [x] 5d)
    - ~~~~sql
        INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
        VALUES("003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        8,
        "2017/11/02");
        ~~~~
- [x] 5e)
    - ~~~~sql
        INSERT INTO Filmes (id, title, synopsis, rate, launch_date)
        VALUES("004",
        "O Auto da Compadecida",
        "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
        10,
        "2000/09/15");
        ~~~~

### Exercício 6
- [x] 6a)
    - ~~~~sql
        SELECT id, title, rate from Filmes WHERE id = "004";
        ~~~~

        |id|title|rate|
        |--|--|--|
        |004|O Auto da Compadecida|10|
- [x] 6b)
    - ~~~~sql
        SELECT id, title, rate from Filmes WHERE title = "Se eu fosse você";
        ~~~~

        |id|title|synopsis|rate|launch_date|
        |--|--|--|--|--|
        |001|Se Eu Fosse Você|Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos|7|2006-01-06|
- [x] 6c)
    - ~~~~sql
        SELECT id, title, synopsis from Filmes WHERE rate >= 7;
        ~~~~

        |id|title|synopsis|
        |--|--|--|
        |001|Se Eu Fosse Você|Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos|
        |002|Doce de mãe|Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela|
        |003|Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.
        |004|O Auto da Compadecida|O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.|

### Exercícios 7
- [x] 7a)
    - ~~~~sql
        SELECT * from Filmes WHERE title LIKE "%vida%";
        ~~~~
        
        |id|title|synopsis|rate|launch_date|
        |--|--|--|--|--|
        |null|null|null|null|null|
- [x] 7b)
     - ~~~~sql
        SELECT * from Filmes WHERE title LIKE "%dona%" or synopsis LIKE "%dona%";
        ~~~~

        |id|title|synopsis|rate|launch_date|
        |--|--|--|--|--|
        |002|Doce de mãe|Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela|10|2012-12-27|
        |003|Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.|8|2017-11-02|
- [x] 7c)
     - ~~~~sql
        SELECT * from Filmes WHERE launch_date <= "2021-08-16";
        ~~~~

        |id|title|synopsis|rate|launch_date|
        |--|--|--|--|--|
        |001|Se Eu Fosse Você|Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos|7|2006-01-06|
        |002|Doce de mãe|Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela|10|2012-12-27|
        |003|Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.|8|2017-11-02|
        |004|O Auto da Compadecida|O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.|10|2000-09-15|
- [x] 7d)
     - ~~~~sql
        SELECT * from Filmes WHERE launch_date <= "2021-08-16" AND
        (title LIKE "%dona%" or synopsis LIKE "%dona%") AND
        rate >= 7;
        ~~~~
        
        |id|title|synopsis|rate|launch_date|
        |--|--|--|--|--|
        |002|Doce de mãe|Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela|10|2012-12-27|
        |003|Dona Flor e Seus Dois Maridos|Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.|8|2017-11-02|        