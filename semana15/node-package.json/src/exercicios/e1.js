/* 1a) utilizando 'process.argv[n]' o qual 'n' é a posição
de cada argumento inserido na linha de comando no terminal
'node nomeDoArquivo.js argumento1 argumento2'
node = 0
nomeDoArquivo.js = 1
argumento1 = 2
argumento2 = 3*/

//1b)
const userName = String(process.argv[2])
const userAge = Number(process.argv[3])
console.log(`Olá, ${userName}! Você tem ${userAge} anos`)

//1c)
console.log(`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${userAge+7} anos`)