### Herança
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

### Polimorfismo
#### Exercício 1
- [x] 1a) No objeto <code>billing</code>, foi possível imprimir com <code>console.log</code> todas propriedades com valores estáticos enquanto que a propriedade que contém uma função, ou seja,  <code>billing.**calculateBill**</code> só pode ter o seu valor/resultado impresso quando chamada em um <code>console.log</code> como uma função propriamente, ou seja, <code>billing.**calculateBill()**</code>

#### Exercício 2
- [x] 2a)
    ~~~~ bash
     Cannot create an instance of an abstract class
    ~~~~
- [x] 2b) Criando uma classe que acessa Place: [GettingAbstractClass](./src/entities/GettingAbstractClass.ts). Dessa forma acessamos as propriedades e métodos que não sejam privados de Place.

- #### Exercício 3
- [x] 3) [Classe Industry](./src/entities/Industry.ts), [Classe Residence](./src/entities/Residence.ts), [Classe Commerce](./src/entities/Commerce.ts)

#### Exercício 4
- [x] 4) [Classe ResidentialClient](./src/entities/ResidentialClient.ts)
- [x] 4a) Uma vez implementada a interface <code>Client</code>, são obrigatórios os métodos/funções e propriedades contidos nela, ou seja, <code>name</code> | <code>registrationNumber</code> | <code>consumedEnergy</code> | <code>calculateBill()</code>. Da mesma forma quando extendemos a classe <code>Residence</code> foram aplicadas as propriedades <code>residentsQuantity</code> e <code>cep</code>, sendo esses dois últimos herdada da classe <code>Place</code>.
A propriedade <code>CPF</code> é da própria classe <code>ResidentialClient</code> e foi criado um método <code>getCPF()</code>.

#### Exercício 5
- [x] 5) [Classe CommercialClient](./src/entities/CommercialClient.ts)
- [x] 5a) ambas possuem a propriedade <code>CEP</code>, pois ambas sub-herdam de <code>Place</code> através das suas classes pai <code>ResidentialClient</code> ou <code>CommercialClient</code> 
- [x] 5b) propriedade <code>CNPJ</code> e <code>floorQuantity</code>, bem como os métodos <code>getCnpj()</code> e <code>calculateBill()</code> que tem o fator 0,53

#### Exercício 6
- [x] 6) [Classe IndustrialClient](./src/entities/IndustrialClient.ts)
- [x] 6a) Deve ser filha de <code>Insdustry</code>, pois sua propriedadade <code>machinesQuantity</code> é aplicável e necessária para realizar o método <code>calculateBill()</code
- [x] 6b) Deve implementar <code>Client</code>, pois possui as propriedades <code>name</code> e o método <code>calculateBill()</code>
- [x] 6c) Seria uma forma de garantir a integridade da instancia, sem que haja exposição ao risco de reatribuir algum valor.