/*
Exercícios de interpretação de código
1.   Leia o código abaixo
        function minhaFuncao(variavel) {
            return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))

        a) O que vai ser impresso no console?
        b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?

            1. a) Resposta: 10 50
            1. b) Resposta: Seria calculado e resultaria 10 e 50, contudo não seria impresso/ não apareceria nada

2.  Leia o código abaixo
        let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
            return texto.toLowerCase().includes("cenoura")
        }

        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)

        a. Explique o que essa função faz e qual é sua utilidade
        b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
             i.   Eu gosto de cenoura
             ii.  CENOURA é bom pra vista
             iii. Cenouras crescem na terra

        2. a) Resposta:
            A função receberá um input tipo string e em seguida passará para todos os caracteres para letra minúscula/ caixa baixa, confirmando (true ou false) se há "cenoura" no texto recebido

        2. b) Resposta:
            i.  true
            ii. true
            iii.true
*/



//Exercícios de escrita de código

// 1.  Escreva as funções explicadas abaixo:
        // a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
        // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante." 

        // Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

        // 1.a) Resolução //rev.1 adequado conforme resolução de exercício
        // const nome = 'Danilo'
        // const idade = '33'
        // const cidade = 'Mauá'
        // const estudante = 'sou estudante'

        //     function imprimeSobreMim(){
        //         console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}`)  
        //     }

        //     imprimeSobreMim()

        // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
        // Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
        // Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
        // `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`

        // 1.b) Resolução
            // function imprimeSobreAlguem(nome, idade, endereco, profissão){
            //     console.log (`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${endereco} e sou ${profissão.toLowerCase()}`)  
            // }
            // imprimeSobreAlguem(prompt ("Qual o seu nome?"), prompt ("Qual sua idade?"), prompt ("Qual cidade você mora?"), prompt ("Qual sua profissão?"))

// 2.  Escreva as funções explicadas abaixo:
        // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
       
        // 2.a) Resolução
        // function operacaoSoma (numero1, numero2){
        //     soma = Number(numero1) + Number(numero2)
        //     return soma
        // }

        // console.log (operacaoSoma(1,1))


        // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

        // 2.b) Resolução
        // function comparaNumero (a,b){
        //     booleano = Number(a) >= Number(b)
        //     return booleano    
        // }

        // console.log (comparaNumero(1,1))

        // // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

        // 2.c) Resolução
        // let numeroPar = (numeroParaVerificar) => {
        //     booleanoPar = (0===(Number(numeroParaVerificar)%2))
        //     return booleanoPar
        // }

        // console.log (numeroPar(4))


        // d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

        // 2.d) Resolução
//         function imprimir (input) {
//             const tamanho = input.length
//             const caixaAlta = input.toString().toUpperCase()
//         console.log (`Tamanho: ${tamanho} caracter(es)
// Texto em caixa alta: "${caixaAlta}"`)
//         }

//        let frase = prompt ("Insira uma mensagem!")

//        imprimir(frase)


// 3.  Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
        // Números inseridos: 30 e 3
        // Soma: 33
        // Diferença: 27
        // Multiplicação: 90
        // Divisão: 10

// function funcaoSoma (numeroRecebido1, numebroRecebido2) {
//     operacaoSoma = numeroRecebido1 + numebroRecebido2
//     return operacaoSoma
// }

// function funcaoSubtracao (numeroRecebido1, numeroRecebido2) {
//     operacaoSubtracao = numeroRecebido1 - numeroRecebido2
//     return operacaoSubtracao
// }

// function funcaoMultiplicacao (numeroRecebido1, numeroRecebido2) {
//     operacaoMultiplicacao = numeroRecebido1 * numeroRecebido2
//     return operacaoMultiplicacao
// }

// function funcaoDivisao (numeroRecebido1, numeroRecebido2) {
//     operacaoDivisao = numeroRecebido1/numeroRecebido2
//     return operacaoDivisao
// }

// const inputDoUsuario1 = Number(prompt ("Insira um número!"))
// const inputDoUsuario2 = Number(prompt ("Insita outro número!"))

// console.log(`Números inseridos: ${inputDoUsuario1} e ${inputDoUsuario2}
// Soma: ${funcaoSoma(inputDoUsuario1,inputDoUsuario2)}
// Diferença: ${funcaoSubtracao (inputDoUsuario1, inputDoUsuario2)}
// Multiplicação: ${funcaoMultiplicacao (inputDoUsuario1, inputDoUsuario2)}
// Divisão: ${funcaoDivisao (inputDoUsuario1, inputDoUsuario2)}
// `)

// // 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
// // A. Escreva uma arrow function que recebe um parâmetro e imprime no console esse parâmetro

// const imprimi = (valor) => {
//     console.log(valor)
// }

// // B. Escreva outra arrow function que recebe dois valores como parâmetros mas nenhum retorno. Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

// const soma = (num1, num2) => {
//      return Number(num1 + num2)
// }

// imprimi(soma(1,1))

// // 2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console. 

const teorema = (cateto1, cateto2) => {
    let resultado = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2, 2))
    return resultado
}

console.log(teorema(2,4))