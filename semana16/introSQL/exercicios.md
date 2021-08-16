#### 1a) 
- "id" possui o tipo VARCHAR(255) indicando que receberá valores em string e com máximo de 255 caracteres, além disso possui o tipo PRIMARY KEY indicando que esse campo deve ser utilizado como referência de identificação;
- "name" possui o tipo VARCHAR(255) indicando que receberá texto e NOT NULLL indicando que não pode ser um campo sem valor;
- "birth_date" tipo DATE indica que receberá formato de data e NOT NULL que deverá conter valor;
-  "gender" tipo VARCHAR(6) que receberá string de até 6 caracteres e NOT NULL que deverá conter valor.

#### 1b) 
- SHOW DATABASES resultou em 2 linhas de resultados, sendo: 1a linha - information_schema e 2a linha - o nome da minha base de dados;
- SHOW TABLES retornou as tabelas registradas na minha base de dados, sendo elas, 'actor' e 'meu_teste';


#### 1c) 
- DESCRIBE actor resultou em 5 linhas e 6 colunas, sendo que cada linha representa os campos existentes na minha tabela, e as colunas indicam as propriedades, sendo '#' a posição/, 'field' o nome do campo/coluna em si, 'type' o tipo do campo/coluna, 'null' se pode ser um campo nulo, 'key' qual o index da campo/coluna, 'Default' se há valor padrão para aquela coluna/campo e 'Extra' se há alguma informação extra sobre aquele campo;