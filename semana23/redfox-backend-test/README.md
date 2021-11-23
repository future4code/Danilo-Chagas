# REDFOX Backend TEST | POKEMON API

### Danilo Anthony Chagas

## Iniciar o projeto localmente
Requisitos mínimos: Node JS instalado
1. Na pasta raiz do projeto <code>api<code> , execute o script via CLI `npm install` e posteriormente `npm dev-start`
2. O projeto iniciará localmente em `http://localhost:3003`


## Documentação API
Documentação no postman [aqui](https://documenter.getpostman.com/view/16227218/UVJYKKSg).
Coleção com testes de sucesso e casos de falha:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/16227218-41eff5b2-35d0-4610-b9d7-89bcc6254578?action=collection%2Ffork&collection-url=entityId%3D16227218-41eff5b2-35d0-4610-b9d7-89bcc6254578%26entityType%3Dcollection%26workspaceId%3D68ac0672-2bf2-40f8-a03e-c77bc6f362eb)


### Endpoints

base url: localhost:3003/api/v0/pokemom

- Reader
    - [x] get | localhost:3003/api/v0/pokemom/availableDetails
    - [x] get | localhost:3003/api/v0/pokemom/
    - [x] get | localhost:3003/api/v0/pokemom/mainDetails
    - [x] get | localhost:3003/api/v0/pokemom/customDetails
- Create
    - [x] post | localhost:3003/api/v0/pokemom/create
- Update
    - [x] put | localhost:3003/api/v0/pokemom/create/update/:name
- Delete
    - [x] delete | localhost:3003/api/v0/pokemom/create/delete/:name

### Notas
 - Para os endpoints de Reader poderá ser utilizada query params de forma otimizada para filtrar os resultados assim como customizar os dados de exibição (ver documentação). Por exemplo poderá ser usada uma **query name=[like,%bul%] e/ou atk=[>,100] e/ou def=80**
 - Para o endpoint Create é obrigatório somente o nome, sendo que o resto será preenchido automaticamente. Caso os <code>atk</code>, <code>def</code> e/ou <code>sta</code> sejam  preenchidos, automaticamente será feito o cálculo de <code>totalStats</code>, <code>CP100L40</code> e <code>CP100L39</code>
 - Para o endpoint de Update, deverá ser informado o nome do pokemon em path params e os dados a serem editados no body. O nome poderá ser editado inclusive. Além disso, caso um dos itens <code>atk</code>, <code>def</code> e/ou <code>sta</code> sejam  preenchidos, automaticamente será recalculado <code>totalStats</code>, <code>CP100L40</code> e <code>CP100L39</code>.
 - Há `migration` para SQL e Firebase, contudo a integração está desenvolvida para SQL.
 
 ### Em desenvolvimento
- Projeto para rodar com docker compose para banco de dados e aplicação.
