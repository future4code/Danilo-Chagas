
/*Exercícios de interpretação de código

1.a)
    O código recebe um input de número pelo usuário e verifica se é par/tem resto 0, sendo verdadeiro informa que passou no teste ou sendo falso informa que não passou no teste.
    
1.b)
    Números inteiros pares ou cuja divisão por 2 resulte com resto 0.

1.c)
    Números inteiros ímpares, números decimais ou aqueles cuja divisão por 2 resulte com resto acima de 0.

2.a)
    O código recebe um input com o nome da fruta e retorna o valor correspondente contido na condicional switch case.

2.b)
    O preço da fruta Maçã é R$ 2.25

2.c)
    O preço da fruta Maçã é R$ 2.25
    //A execução do código não vai sair do bloco e vai seguir até encontar o primeira valor que tenha break ou até chegar no fim da chave, no caso em questão, default com valor 5.

3.a)
    A variável está solicitando um input de número pelo usuário e converte o input em número uma vez que inputs pelo prompt retorna tipo String.
3.b)
    Esse número passou no teste //para numero 10: 
    numero -10 não apareceria mensagem ou ação, pois não foi definida ação para casos false na condicional if

3.c)
    Terá um erro da última linha pedindo impressão da variavél mensagem, pois ela está no escopo local do bloco condicional if e não pode ser acessada. No console informará que a variavel mensagem é undefined.
    */


//Exercícios de escrita de código

//1.a)
    const inputUsuario = Number(prompt("Qual sua idade?"))

//1.b) Já definido em 1.a com Number

//1.c)
    if (inputUsuario >= 18) {
        console.log("Você pode dirigir")
    } else {
        console.log("Você não pode dirigir")
    }


//2)
    const inputAluno = prompt(`Qual Período você estuda?
Insira M para o período matutino;
Insira V para vespertino;
Insira N para noturno.`).toLowerCase()

    if (inputAluno === "m") {
        console.log("Bom dia!")
    } else if (inputAluno === "v") {
        console.log("Boa tarde!")
    } else {
        console.log ("Boa noite!")
    }


//3)
    switch (inputAluno) {
        case "m":
            console.log ("Bom dia!")
            break
        case "v":
            console.log ("Boa tarde!")
            break
        default:
            console.log ("Boa noite!")
            break
    }


//4)
const inputGenero = prompt("Qual o gênero do filme que você vai assistir?").toLowerCase().trim()
const inputPreco = Number(prompt("Quanto custa o ingresso?").trim()) 

if ( inputGenero==="fantasia" && inputPreco<15) {
    //console.log("Bom filme!") retirado para atender Desafio 1
    console.log(`Bom filme!
${insereLanche ()}`) //inserido para atender Desafio 1
} else {
    console.log("Escolha outro :(")
}



//DESAFIOS

//1)
function insereLanche () {
    const inputLanchinho = prompt("Qual lanchinho você vai comprar? Pipoca, chocolate, doce ...?").toLowerCase().trim()
     switch (inputLanchinho) {
        case "chocolate":
        case "doce":
        case "salgadinho":
        case "doritos":
        case "frango":
            return `Apreveite o seu ${inputLanchinho}!`
           // break;
        case "pipoca":
        case "maçã":
        case "banana":
        case "farofa":
            return `Apreveite a sua ${inputLanchinho}!`
            //break;
        default:
            return 'Aproveite o seu lanchinho!'
       //break;
    }
}


//2)

const inputNome = prompt("Qual o seu nome?").trim()

const inputTipo = prompt(`Insira o tipo de jogo.
Insira DO para jogo doméstico;
Insira IN para jogo internacional.`).toLowerCase().trim()

const inputEtapa = prompt(`Insira a etapa.
Insira SF para semi-final;
Insira DT para decisão de terceiro lugar;
Insira FI para final.`).toLowerCase().trim()

const inputCategoria = Number(prompt(`Insira a categoria
Insira 1 para Categoria 1
Insira 2 para Categoria 2
Insira 3 para Categoria 3
Insira 4 para Categoria 4`))

const inputQtIngressos = Number(prompt("Insira a quantidade de ingressos desejada"))


const tabelaGeral = {
    tipoJogo: ["Internacional", "Doméstico"],
    etapaJogo: ["Semifinais", "Decisão do 3º Lugar", "Final"],
    categorias: [1, 2, 3, 4],
    valoresSF: [1320, 880, 550, 220],
    valoresDT: [660, 440, 330, 170],
    valoresFI: [1980, 1320, 880, 330]
}

function calculaValorUnitario(etapaJogo, indiceCategoria) {
    if (etapaJogo === "sf") {
        return (tabelaGeral.valoresSF[indiceCategoria - 1] / multiplicador()).toFixed()
    } else if (etapaJogo === "dt") {
        return (tabelaGeral.valoresDT[indiceCategoria - 1] / multiplicador()).toFixed()
    } else {
        return (tabelaGeral.valoresFI[indiceCategoria - 1] / multiplicador()).toFixed()
    }
}

function multiplicador() {
    if (inputTipo === "do") {
        return 1
    } else {
        return 4.10
    }
}

const indexTipoJogo = () => {
    if (inputTipo === "in") {
        return 0
    } else {
        return 1
    }
}

const indexEtapaJogo = () => {
    if (inputEtapa === "sf") {
        return 0
    } else if (inputEtapa === "dt") {
        return 1
    } else {
        return 2
    }
}

const textoIngresso = () => {
    if (inputQtIngressos > 1) {
        return 'ingressos'
    } else {
        return 'ingresso'
    }
}

const textoMoeda = () => {
    if (inputTipo === "in") {
        return 'U$'
    } else {
        return 'R$'
    }
}

console.log(`---Dados da compra---
Nome do Cliente: ${inputNome}
Tipo do jogo: ${tabelaGeral.tipoJogo[indexTipoJogo()]}
Etapa do jogo: ${tabelaGeral.etapaJogo[indexEtapaJogo()]}
Categoria: ${inputCategoria}
Quantidade de Ingressos: ${inputQtIngressos} ${textoIngresso()}
---Valores---
Valor do ingresso: ${textoMoeda() + calculaValorUnitario(inputEtapa, inputCategoria)}
Valor total: ${textoMoeda() + calculaValorUnitario(inputEtapa, inputCategoria) * inputQtIngressos}
`)