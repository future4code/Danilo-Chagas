/*  Revisão 1 | Correção
Respostas | Exercícios de interpretação de código

1.  10 05
    Correção:
    Primeiro console: 10
    Segundo console: 10 05

2.  10 10 10
    Correção:
    Irá acontecer um erro, pois a variável c não foi definida/declarada (let c)
    Se fosse declarada o resultado seria 10 10 10

3.  Cacula quanto se recebe por hora, apos usuário dar os inputs em p e t
    Sugestão
    Alterar "p" para qtHorasDia
    Alterar "t" para precoDia

*/

//Respostas | Exercício de escrita de código
//1. Construa um programa, seguindo os seguintes passos:
    //a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    let nome
    //b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    let idade
    //c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    console.log (typeof nome, typeof idade)
    //d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
        //d)Resposta: retorno Undefined porque não foi atribuído um valor
    //e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    nome = prompt("Qual é o seu nome?")
    idade = prompt("Qual é a sua idade?")
    idade = Number(idade)
    console.log (nome, idade)
    //f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    console.log (typeof nome, typeof idade)
        //f)Resposta: Uma vez que os valores foram atribuídos, os tipos das variavéis podem ser identificados 
    //g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
        console.log ("Olá", nome, ", você tem ", idade," anos.")

/*2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável.
    Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    a) Crie três novas variáveis, contendo as respostas
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    Você está usando uma roupa azul hoje? - SIM */
   
    let roupasFrio = prompt("Você está usando roupas de frio hoje? Sim ou Não?")
    let botas = prompt("Você está usando botas hoje? Sim ou Não?")
    let luvas = prompt("Você está usando luvas hoje? Sim ou Não?")

    console.log ("Você está usando roupas de frio hoje? - ", roupasFrio)
    console.log ("Você está usando botas hoje? - ", botas)
    console.log ("Você está usando luvas hoje? - ", luvas)
    
    //outra forma conforme gabarito
    // const pergunta1 = "Você está usando roupas de frio hoje?";
    // const pergunta2 = "Você está usando botas hoje?";
    // const pergunta3 = "Você está usando luvas hoje?";
   
    // const resposta1 = prompt(pergunta1);
    // const resposta2 = prompt(pergunta2);
    // const resposta3 = prompt(pergunta3);
    
    // console.log(pergunta1, "-", resposta1)
    // console.log(pergunta2, "-", resposta2)
    // console.log(pergunta3, "-", resposta3)

 /*3. Dadas duas variáveis a e b com valores diferentes, troque o conteúdo delas sem atribuir
diretamente os valores!
// valores iniciais:
let a = 10
let b = 25

// valores finais:
a = 25
b = 10
*/

let a = 10
let b = 25
let c = 2.5
a = a*c
b = b/c

console.log (a, b)

    //outra forma conforme gabarito
    // let a = 10
    // let b = 25
    // let c

    // c = a // c = 10
    // a = b // a = 25
    // b = c // b = 10

    // console.log("a", a)
    // console.log("b", b)



/*DESAFIO
Faça um programa que receba dois números do usuário e faça as seguintes operações,
imprimindo os resultados no console da seguinte forma:
1. O primeiro número somado ao segundo número resulta em: x.
2. O primeiro número multiplicado pelo segundo número resulta em: y.
*/
let numero1 = prompt("Insira um número")
let numero2 = prompt("Insira um outro número")

numero1 = Number(numero1)
numero2 = Number(numero2)

console.log ("O primeiro número (", numero1, ") somado ao segundo número (", numero2, ") resulta em: ", numero1+numero2)
console.log ("O primeiro número (", numero1, ") multiplicado pelo segundo número (", numero2, ") resulta em: ", numero1*numero2)

    //outra forma conforme gabarito
    // const num1 = prompt("Insira o primeiro número");
    // const num2 = prompt("Insira o segundo número");
    
    // console.log("Soma:", Number(num1) + Number(num2))
    // console.log("Multiplicação:", Number(num1) * Number(num2))