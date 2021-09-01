#### Exercício 1
- [x] 1a) [index.ts](./src/index.ts)
- [x] 1b) Não será possível, pois a chave é privada e não há nenhum método que o acesse
- [x] 1c) 1x, pois o constructor foi acionado somente 1x

#### Exercício 2
- [x] 2a) 1x, pois somente o constructor da classe Customer foi acionado
- [x] 2b) 1x, pois o constructor da classe User foi acionado através da classe Customer
 
#### Exercício 3
- [x] 3) Sim, seria possível imprimir a senha em <code>password</code> apenas com o <code>console.log(nomeDaInstancia)</code>, mas não diretamente com <code>console.log(nomeDaInstancia.***password***)</code> uma vez que é uma key privada, ou seja, a restrição é apenas para acesso direto dessa propriedade tanto pela classe pai quanto filho.

#### Exercício 4
- [x] 4) [index.ts](./src/index.ts) | [User.ts](./src/entities/User.ts)

#### Exercício 5
- [x] 5) [User.ts](./src/entities/User.ts)
    - ~~~~TypeScript
        public introduceYourself(): string {
        return `Olá, sou ${this.getName()}, bom dia!`}
        ~~~~
