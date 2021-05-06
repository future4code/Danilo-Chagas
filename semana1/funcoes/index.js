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
            A função receberá um input tipo string e em seguida passará para todos os caracteres para letra minúcula/ caixa baixa, confirmando (true ou false) se há "cenoura" no texto recebido

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
            // function imprimeSobreMim(){
            //     console.log ("Eu sou Danilo, tenho 33 anos, moro em Mauá e sou estudante")  
            // }

            // imprimeSobreMim()

        // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

        // Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

        // Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:
        // `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
            // function imprimeSobreAlguem(nome, idade, endereco, profissão){
            //     console.log (`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${endereco} e sou ${profissão.toLowerCase()}`)  
            // }
            // imprimeSobreAlguem(prompt ("Qual o seu nome?"), prompt ("Qual sua idade?"), prompt ("Qual cidade você mora?"), prompt ("Qual sua profissão?"))

// 2.  Escreva as funções explicadas abaixo:
        // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
        function operacaoSoma (numero1, numero2){
            soma = Number(numero1) + Number(numero2)
            return soma
        }

        console.log (operacaoSoma(1,1))


        // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.
        function comparaNumero (a,b){
            booleano = Number(a) >= Number(b)
            return booleano    
        }

        console.log (comparaNumero(1,1))

        // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
        let numeroPar = (a) => {
            booleanoPar 

        // d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
