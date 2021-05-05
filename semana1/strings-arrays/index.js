/*
Exercícios de interpretação de código
1.  Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

let array
console.log('a. ', array)
//a. Undefined

array = null
console.log('b. ', array)
//b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//c. 11

let i = 0
console.log('d. ', array[i])
//d. 3

array[i+1] = 19
console.log('e. ', array)
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//f. 9


2.  Leia o código abaixo com atenção 
const frase = prompt("Digite uma frase")
console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//SUBI NUM ÔNIBUS EM MIRROCOS27

*/



//Exercícios de escrita de código

// 1.  Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//     O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

        // const nomeDoUsuario = prompt ("Insira o seu nome para cadastro")
        // const emailDoUsuario = prompt ("Insira seu e-mail para cadastro")

        // console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// 2.  Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
//     a) Imprima na tela o array completo
//     b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

        // //1.a)
        // const listaComida = [
        // "Arroz e Feijão",
        // "Pão de Cebola",
        // "Wade",
        // "Strogonoff Vegano",
        // "Feijoada Vegana"]

        // console.log (listaComida)

        // //1.b)
        // console.log (`Essas são minhas comidas preferidas:
        // 1. ${listaComida[0]}
        // 2. ${listaComida[1]}
        // 3. ${listaComida[2]}
        // 4. ${listaComida[3]}
        // 5. ${listaComida[4]}
        // `)

        // //1.c)
        // const comidaUsuario = prompt ("Qual sua comida preferida?")

        // let novaListaComida = [
        // listaComida[0],
        // comidaUsuario,
        // listaComida[2],
        // listaComida[3],
        // listaComida[4]
        // ]
        // //poderia ser utilizado splice com o 3º parametro para alterar o array novaLista, sendo:
        // // listaComida.splice(1,1,comidaUsuario)
        // // novaListaComida = listaComida


        // console.log (`Nova Lista:
        // 1. ${novaListaComida[0]}
        // 2. ${novaListaComida[1]}
        // 3. ${novaListaComida[2]}
        // 4. ${novaListaComida[3]}
        // 5. ${novaListaComida[4]}
        // `)


// 3. Faça um programa, seguindo os passos:
//     a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//     c) Imprima o array na tela
//     d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
//     e) Remova da lista o item de índice que o usuário escolheu.
//     f) Imprima o array na tela

        // //3.a)
        // let listaDeTarefas

        // //3.b)
        // const primeiraTarefa = prompt("Insira a primeira tarefa")
        // const segundaTarefa = prompt("Insira a segunda tarefa")
        // const terceiraTarefa = prompt("Insira a terceira tarefa")

        // listaDeTarefas = [primeiraTarefa,segundaTarefa,terceiraTarefa]

        // //3.c)
        // console.log (listaDeTarefas)

        // //3.d)
        // const tarefaRealizada = prompt(`Informe uma das tarefas realizadas pelo índice:
        // 0. ${listaDeTarefas[0]}
        // 1. ${listaDeTarefas[1]}
        // 2. ${listaDeTarefas[2]}`
        // )

        // //3.e)
        // listaDeTarefas.splice (tarefaRealizada,1)

        // //3.f)
        // console.log (listaDeTarefas)

// DESAFIOS

// 1.  Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

// 2.  Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
