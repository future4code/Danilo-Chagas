// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   // implemente sua lógica aqui
   const inputAltura = prompt('Insira a altura do retângulo.')
   const inputLargura = prompt('Insira a largura do retângulo.')
   console.log(Number(inputAltura)*Number(inputLargura))
}

//Exercício 2

function imprimeIdade() {
   // implemente sua lógica aqui
   const inputAnoAtual = prompt('Insira o ano atual.')
   const inputAnoNasc = prompt('Insira seu ano de nascimento.')
   console.log(Number(inputAnoAtual)-Number(inputAnoNasc))
}

//Exercício 3

function calculaIMC(peso, altura) {
   // implemente sua lógica aqui
   return peso/(altura*altura)
}

//Exercício 4

function imprimeInformacoesUsuario() {
   // implemente sua lógica aqui
   const inputNome = prompt('Qual o seu nome?')
   const inputIdade = prompt('Qual sua idade?')
   const inputEmail = prompt('Qual o seu e-mail?')
   console.log(`Meu nome é ${inputNome}, tenho ${inputIdade} anos, e o meu email é ${inputEmail}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
   // implemente sua lógica aqui
   const inputCor1 = prompt ('Qual sua primeira cor favorita?')
   const inputCor2 = prompt ('Qual sua segunda cor favorita?')
   const inputCor3 = prompt ('Qual sua terceira cor favorita?')
   console.log ([inputCor1,inputCor2,inputCor3])
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
   // implemente sua lógica aqui
   return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   // implemente sua lógica aqui
   return Number(custo)/Number(valorIngresso)
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return (string1.lenght === string2.lenght)
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
}