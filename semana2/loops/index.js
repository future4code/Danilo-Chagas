/* Exercícios de interpretação de código

1)
    O código incrementa +1 na variavel 'valor' até que 'i' seja 4 e concomitante soma o proprio valor de i acumulado a cada ciclagem.
    1º ciclo | 0+0 = 0
    2º ciclo | 0+1 = 1
    3º ciclo | 1+2 = 3
    4º ciclo | 3+3 = 6
    5º ciclo | 6+4 = 10

    Será impresso:
    10  


2.a)
    19
    21
    23
    25
    27
    30


2.b)
    Sim, seria suficiente; Na condicional if, retirar '> 18', pois essa condição restringe a impressão somente para valores maiores de 18 do array 


3.c)
0
00
000
0000
*/


//Exercícios de escrita de código

//1.a)
const inputQt = Number(prompt("Quantos pets você tem?"))
if (inputQt === 0) {
    console.log("Que pena! Você pode adotar um pet!")

//1.b)
} else {
    const arrayPet = []
    let i = 0
    while (i < inputQt) {
        const inserePet = prompt(`Qual o nome do seu ${i+1}º pet?`)
        arrayPet.push(inserePet)
        i++
    }

//1.c)
    console.log(arrayPet)
}


//2)
const arrayOriginal = [1, 100, 200, 300, 400, 25]


//2.a)
for (cadaValor of arrayOriginal) {
    console.log(cadaValor)
}

//2.b)
for (cadaValor of arrayOriginal) {
    console.log(cadaValor / 10)
}

//2.c)
let arrayNumeroPar = []
for (cadaValor of arrayOriginal) {
    if (cadaValor%2 === 0) {
        arrayNumeroPar.push(cadaValor)
    }
}
console.log(arrayNumeroPar)

//2.d)
let arrayTexto = []
let i = 0

while (i < arrayOriginal.length) {
    novoItem = ` é: ${arrayOriginal[i]}`
    novoItem = `O elemento do index ${i}` + novoItem
    arrayTexto.push(novoItem)
    i++
}

console.log(arrayTexto)

//2.e) 19:08 | 20:07

function retornaMaiorMenorValor (arrayBase) {
    let numeroMax = 300
    for (numero of arrayBase) {
        if (numero > numeroMax) {
            numeroMax = numero
        }
    }
    let numeroMin = 25
    for (numero of arrayBase)
        if(numero < numeroMin) {
            numeroMin = numero
        }
    return console.log(`O maior número é ${numeroMax} e o menor é ${numeroMin}`)
}

retornaMaiorMenorValor(arrayOriginal)



//DESAFIOS

//1)

function chamaJogador1() {
    if (multiplayer === true) { //<<linha adicionada para DESAFIO 2 | Adequação da função iniciaç chamaJogador
        const inputNumero = Number(prompt("Jogador 1 | Insira qualquer número!"))
        input1 = inputNumero
        return inputNumero
    } else {// implementação para DESAFIO 2 | adequação da função para considerar a jogada pelo computador
        const inputNumeroMaquina = Math.floor((Math.random() * 100) + 1)
        input1 = inputNumeroMaquina
        return inputNumeroMaquina
    }
}

function chamaJogador2() {
    const inputChute = Number(prompt("Jogador 2 | Chute um número"))
    input2 = inputChute
    return console.log(`O número chutado foi: ${inputChute}`)
}

function perguntaMultiplayer() { // implementação para DESAFIO 2 | função para definir player 
    const respostaPlayer = Number(prompt(`Jogar contra o computador ou com uma pessoa? 
    Insira 1 para jogar contra o computador
    Insira 2 para jogar contra uma pessoa`))
    if (respostaPlayer === 2) {
        multiplayer = true
    } else {
        multiplayer = false
    }

}

let contaJogadas = 1
let input1
let input2
let multiplayer // implementação para DESAFIO 2 | variável de player definido


alert("Vamos jogar!")

perguntaMultiplayer()// implementação para DESAFIO 2 | chama função para definir player

console.log("Vamos jogar!")
chamaJogador1()
chamaJogador2()
if (input1 === input2) {
    console.log("Acertou!!")
    console.log(`O número de tentativas foi: 1! Parabéns!!!`)
} else {
    while (input2 !== input1) {
        if (input2 < input1) {
            console.log("Errou, é maior!")
        } else {
            console.log("Erro, é menor!")
        }
        contaJogadas++
        chamaJogador2()
    }
    console.log("Acertou!!")
    console.log(`O número de tentativas foi: ${contaJogadas}`)
}

//2)
/*A implementação foi adicionada no código acima. Considerando 1 função, 1 variavel, 1 adequação de função inicial.
Foi fácil inserir a implementação para jogar com a máquina, depois que quebrei a cabeça por horas para esquematizar o jogo inicial. Eu gostaria de implementar algumas validações caso o usuário escolhesse uma opção diferente e mais algumas interações caso o numero de jogadas começasse a ficar alto, mas de fato já está suficiente para atender o Desafio.
O que poderia ter sido feito para ficar mais fácil era eu ter entendido antes os fundamentos dos loops para construir mais rápido o código e não ter levado 4 horas para fazer.*/
