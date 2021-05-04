//Exercícios de interpretação de código
/*
1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
   
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)

    1. Resposta:
    a. false
    b. false
    c. true
    d. boolean

2. Seu colega se aproxima de você falando que o código dele não funciona como devia.
    Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
    
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

    2. Resposta:
    Retornará XY, onde X é um valor inserido em primeiroNumero e Y um valor inserido no segundoNumero;
    sem realizar a operação matemática, pois prompt retorna valores tipo string.

3. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja,
    de fato, a soma dos dois números.

    3.Reposta:
    inserir Number() para primeiroNumero e segundoNumero; então:

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma)



*/

//Exercícios de escrita de código
// 1. Faça um programa que:
//     a) Pergunte a idade do usuário
//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?",
//        seguido pela resposta (`true` ou `false`)
//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

        const idadeUsuario = prompt ("Qual a sua idade?")
        const idadeAmigx = prompt ("Qual é a idade do seu melhor amigo?")

        const resultado = Number(idadeUsuario) > Number(idadeAmigx)

        console.log("Sua idade é maior do que a do seu melhor amigo? - ", resultado )
        console.log("Diferença de idade = ", Number(idadeUsuario - Number(idadeAmigx)) )

// 2. Faça um programa que:
//     a) Peça ao usuário que insira um número **par**
//     b) Imprima na console **o resto da divisão** desse número por 2.
//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

        const numeroUsuario = prompt("Insira um número par")

        console.log("resto da divisão", Number(numeroUsuario)%2)

        // 2.c) Resposta: um Dividendo Inteiro par dividido pela metade, divisor 2, não terá Resto, ou seja, Resto 0
        // 2.d) Resposta: um Dividendo Inteiro ímpar dividido pela metade, divisor 2, terá sempre Resto 1


// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
//     a) A idade do usuário em meses
//     b) A idade do usuário em dias
//     c) A idade do usuário em horas

        let idade = prompt ("Quantos anos você tem?")
        idade = Number(idade)

        const idadeMeses = idade*12
        const idadeDias = idade*365
        const idadeHoras = idadeDias*24

        console.log ("Idade em Meses: ", idadeMeses, "\n", "Idade em Dias: ", idadeDias, "\n", "Idade em Horas: ", idadeHoras)

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
//     O primeiro numero é maior que segundo? 
//     O primeiro numero é igual ao segundo? 
//     O primeiro numero é divisível pelo segundo? 
//     O segundo numero é divisível pelo primeiro? 

        let a = prompt ("Insira um número!")
        let b = prompt ("Insira outro número!")

        a = Number(a)
        b = Number (b)

        const resposta1 = a > b
        const resposta2 = a === b
        const resposta3 = (a%b) === 0
        const resposta4 =  (b%a) === 0

        console.log ("O primeiro numero é maior que segundo? - ", resposta1)
        console.log ("O primeiro numero é igual ao segundo? - ", resposta2)
        console.log ("O primeiro numero é divisível pelo segundo? - ", resposta3)
        console.log ("O segundo numero é divisível pelo primeiro? - ", resposta4)


// DESAFIOS
// Todos os exercícios aqui são de escrita de código! 

//     1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de
//      temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
     
//      Graus Fahrenheit(°F) para Kelvin(K)
//      (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15

//      Graus Celsius(°C) para Graus Fahrenheit (°C)
//      (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

//         a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
//         b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
//         c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
//         d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

let inputF
let inputC
let inputK

inputF = 77

let calculoKelvinFahrenheit = ((inputF - 32)*(5/9) + 273.15)

//1. a) Resposta: 
console.log (inputF,"°F =", calculoKelvinFahrenheit, "K")

//1. b) Resposta: 
inputC = 80

let calculoFahrenheitCelsius = inputC * (9/5) + 32  

console.log (inputC, "°C =", calculoFahrenheitCelsius ,"°F")


//1. c) Resposta: 
inputC = 30

calculoFahrenheitCelsius = inputC * (9/5) + 32 

inputF = calculoFahrenheitCelsius

calculoKelvinFahrenheit = ((inputF - 32)*(5/9) + 273.15)

console.log (inputC, "°C =", calculoFahrenheitCelsius ,"°F", "\n", inputF, "°F =", calculoKelvinFahrenheit, "K")

//1. d) Resposta: 

inputC = prompt ("Insira uma temperatura em Celsius")

calculoFahrenheitCelsius = inputC * (9/5) + 32 

inputF = calculoFahrenheitCelsius

calculoKelvinFahrenheit = ((inputF - 32)*(5/9) + 273.15)

console.log (inputC, "°C =", calculoFahrenheitCelsius ,"°F =", calculoKelvinFahrenheit, "K")



