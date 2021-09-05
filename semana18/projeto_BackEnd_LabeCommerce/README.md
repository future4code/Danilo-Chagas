## Structure Taks
- [x] Usuário
    - [x] BD
    - [x] class User
        - [x] nome
        - [x] e-mail
        - [x] idade
        - [x] gere um identificador único (id).

- [x] Produto
    - [x] BD
    - [x] class Product
        - [x] identificador único do produto
        - [x] nome
        - [x] descrição
        - [x] preço.

- [x] Passagens
    - [x] BD
    - [x] class `Ticket`
        - [x] extends `Product`.
            - [x] identificador único do produto
            - [x] nome
            - [x] descrição
            - [x] preço
        - [x] implements `TravelInfo` 
            - [x] origem
            - [x] destino

- [] Compras
    - [x] BD
    - [x] class `Purchase`
        - [x] identificador único do produto
        - [x] identificador único do usuário
        - [x] quantidade de itens daquele produto que foi comprada,
        - [x] valor total da compra. 

## Endpoint Tasks
- [x] **1. Criar um usuário**
    - [x] **método: `post`**
    - [x] name, email e age, passados por **body params**. O id deve ser gerado pela própria aplicação, e precisa ser uma **string**.
    - [x] Deve inserir o **User** no banco de dados
    - [x] O User criado deve ser inserido a partir de uma nova instância de **User**

- [] **2. Criar um produto**
    - [x] **método: `post`**
    - [x] name, description e price, passados por **body params**. O id deve ser gerado pela própria aplicação, e precisa ser uma **string**
    - [x] Deve inserir o **Product** no banco de dados
    - [x] O produto criado deve ser inserido a partir de uma nova instância de **Product**

- [x] **3. Listar todos os usuários**
    - [x] **método: `get`**
    - [x] Sem parâmetros
    - [x] Deve trazer uma lista de todos os **usuários** cadastrados no banco
    - [x] Precisa **obrigatóriamente** devolver um array da Classe **User**

- [] **4. Listar todos os produtos**
    - [] **método: `get`**
    - [] Sem parâmetros;
    - [] Deve trazer uma lista de todos os **produtos** cadastrados no banco;

- [] **5. Criar uma viagem**
    - [] **método: `post`**
    - [] `name`, `description`, `price`, `origin` e `destination` passados por **body params**. O id deve ser gerado pela própria aplicação, e precisa ser uma **string**.
    - [] Deve inserir a classe criada a partir de **Product** no banco de dados
    - [] O produto criado deve ser inserido a partir de uma nova instância da classe criada a partir de **Product**

- [] **6. Listar todas as viagens**
    - [] **método: `get`**
    - [] Sem parâmetros;
    - [] Deve trazer uma lista de todos as **viagens** cadastrados no banco;
    - [] Precisa **obrigatóriamente** devolver um array da Classe Polimórfica criada a partir de **Product**

- [] **7. Criar uma compra**
    - [] método: `post`
- user_id, product_id, quantity passados por **body params**. purchase_id e total_price devem ser gerados pela aplicação
- Deve inserir a **Purchase** no banco de dados
- O produto criado deve ser inserido a partir de uma nova instância de **Purchase**

- [] **8. Altere o endpoint de busca de todos os produtos, para que receba uma ordenação por preço. A ordenação deve ser feita por *queryParams***

- [] **9. Altere a classe **User** para que ela receba um *array de Purchases* como um de seus atributos. O array deve começar vazio.**

- [] **10. Listar todas as compras**
    - [] **método: `get`**
    - [] Sem parâmetros;
    - [] Deve trazer uma lista de todos as **compras** cadastrados no banco;
    - [] Precisa **obrigatóriamente** devolver um array da classe **Purchase**

- [] **11. Listar todoas as compras de um usuário**
    - [] **método: `get`**
    - [] Id do usuário, recebido por **path params**;
    - [] Deve trazer uma lista de todos as **compras** do usuário que tenha aquele id no banco;
    - [] Precisa **obrigatóriamente** devolver um array da classe **Purchase**

- [] **12. Altere o endpoint de listar todos os usuários, para que ele também busque as *compras* do usuário.**