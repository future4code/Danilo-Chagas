/*Exercícios de interpretação de código
1.a)
    Matheus Nachtergaele
    Virginia Cavendish
    { canal: 'Globo', horario: '14h' }


2.a)
    { nome: "Juca", idade: 3, raca: "SRD"}
    { nome: "Juba", idade: 3, raca: "SRD"}
    { nome: "Jubo", idade: 3, raca: "SRD"}


2.b)
    Copiará a propriedade (chaves e valores) do objeto referenciado


3.a)
    false
    undefined


3.b)
    O console.log contém a função "minhaFunção". Essa função recebe dois paremetros que gera um retorno na própria forma de acesso a um objeto, ou seja, chama objeto[propridade].
    No 1o console.log, imprime o valor "true", pois ele existe no objeto e chave referenciada.
    No 2o console.log, imprime undefined, pois, embora exista o objeto referenciado, não existe a chave com uma atribuição  de valor

*/

//Exercícios de escrita de código

//1.a
const nomeApelidos = {
nome: "Amanda",
apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

function geraFrase (inputObjeto) {
return console.log (`"Eu sou ${inputObjeto.nome}, mas pode me chamar de: ${inputObjeto.apelidos[0]}, ${inputObjeto.apelidos[1]} ou ${inputObjeto.apelidos[2]}"`)
}

geraFrase (nomeApelidos)


//1.b
const nomeApelidos2 = {
    ...nomeApelidos,
    apelidos: ["novo apelido 1","novo apelido 2","novo apelido 3"]
}

geraFrase(nomeApelidos2)


//2.a
const pessoa1 = {
	nome: "Bruno",
    idade: 23, 
	profissao: "Instrutor"
}

const pessoa2 = {
	nome: "Pedo",
    idade: 24, 
	profissao: "Monitor"
}

function retornaDados (objeto) {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

console.log(retornaDados(pessoa1))


//3.a
let carrinho = []


//3.b
const banana = {nome: "Banana", disponibilidade: true}
const maca = {nome: "Maçã", disponibilidade: true}
const laranja = {nome: "Laranja", disponibilidade: true}

//3.c
function insereItem (input) {
    carrinho ={...input}
    return carrinho
}

insereItem ([banana, maca, laranja])

//3.d
console.log(carrinho)



//DESAFIOS
//1.
function inputDados () {
 const inputNome = prompt ("Qual seu nome")
 const inputIdade = prompt ("Qual sua idade?")
 const inputProfissao = prompt ("Qual sua profissão")

 const objeto = {
     nome: inputNome,
     idade: Number(inputIdade),
     profissao: inputProfissao
    }

 return console.log (objeto,typeof objeto)
}

inputDados()


//2.
function filmes (input) {
    let listaFilme = {...input}
return console.log(`${listaFilme[0].nome} foi lançado antes de ${listaFilme[1].nome}? ${Number(listaFilme[0].ano)<Number(listaFilme[1].ano)}
${listaFilme[0].nome} foi lançado no mesmo ano de ${listaFilme[1].nome}? ${Number(listaFilme[0].ano)===Number(listaFilme[1].ano)}
`)
}

const filme1 = {ano:1999, nome: "Matrix"}
const filme2 = {ano:2010, nome: "Inception"}

filmes ([filme1, filme2])


//3.
function inverteValor (input) {
    const inverteDisp = {...input}
    inverteDisp.disponibilidade = !inverteDisp.disponibilidade

return console.log (inverteDisp)

}

inverteValor(banana)
