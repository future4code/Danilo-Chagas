const colors = require('colors');
/* 1a) utilizando 'process.argv[n]' o qual 'n' é a posição
de cada argumento inserido na linha de comando no terminal
'node nomeDoArquivo.js argumento1 argumento2'
node = 0
nomeDoArquivo.js = 1
argumento1 = 2
argumento2 = 3*/

//1b)
const userName = process.argv[2] ? process.argv[2] : false
const userAge =  process.argv[3] ? Number(process.argv[3]) : false
// console.log(`Olá, ${userName}! Você tem ${userAge} anos`)


//1c)
// console.log(`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${userAge + 7} anos`)

//Desafio 1)
const inputsValidation = (name, age) => {
    const validation = {}
    validation.arg = !name || !age ? "São esperados 2 parametros: 1o Nome e o 2o Idade" : true
    validation.nameType = !isNaN(name) ? 'É esperado um nome em texto no 1o parametro' : true
    validation.ageType = isNaN(age) ? 'É esperado um número no 2o parametro' : true
    validation.nameValue = name === false ? 'Falta 1o parametro com nome' : true
    validation.ageValue = age === false ? 'Falta 2o parametro com idade' : true
    Object.values(validation).every(item => item === true) ?
        (console.log(`Olá, ${name}! Você tem ${age} anos`.black.bgWhite),
            console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7} anos`.black.bgWhite))
        :
        (console.log("Verificar os seguintes erros".bgRed),
        console.table(Object.values(validation).filter(item => item!==true)))
}
inputsValidation(userName, userAge)