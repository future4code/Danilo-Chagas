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
  return (string1.length === string2.length)
}

// Exercício 9

function retornaPrimeiroElemento(array) {
   // implemente sua lógica aqui
   return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
   // implemente sua lógica aqui
return array[(array.length-1)]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   // implemente sua lógica aqui
   let primeiraPosicao = array[0]
   let ultimaPosicao = array[array.length-1]
   let novoArray = array.slice()
   novoArray[0] = ultimaPosicao
   novoArray[array.length-1] = primeiraPosicao
   return novoArray
   }

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   // implemente sua lógica aqui
   return string1.toLowerCase().toString() === string2.toLowerCase().toString()
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
   const inputAnoAtual = prompt ("Insira o ano atual") 
   const inputNascimento = prompt ("Qual seu ano de nascimento?")
   const inputEmissao = prompt ("Qual o ano de emissão do seu RG?")
   const idade = Number(inputAnoAtual)-Number(inputNascimento) 
   const vigencia = Number(inputAnoAtual)-Number(inputEmissao)

   const validaFx1 = (idade<=20)&&(vigencia>=5)
   const validaFx2 = (20<idade<50)&&(vigencia>10)
   const validaFx3 = (idade>50)&&(vigencia>15)
   
   return console.log ((validaFx1||validaFx2||validaFx3))
   }
 
// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
   const inputAno = Number(ano)

   const multiplo400 = (inputAno%400)===0
   const multiplo100 = (inputAno%100)!==0
   const multiplo4 = (inputAno%4)===0
  
   return ((multiplo400)||((multiplo4&&true)&&(multiplo100&&true)))
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
   const input1 = prompt ("Você tem mais de 18 anos?")
   const input2 = prompt ("Você possui ensino médio completo?")
   const input3 = prompt ("Você possui disponibilidade exclusiva durante os horários do curso?")
   
   const checkInput1 = "sim"===(input1.toString().toLowerCase().trim())
   const checkInput2 = "sim"===(input2.toString().toLowerCase().trim())
   const checkInput3 = "sim"===(input3.toString().toLowerCase().trim())
 
   console.log (checkInput1&&checkInput2&&checkInput3)
}