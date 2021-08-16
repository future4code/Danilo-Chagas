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
        