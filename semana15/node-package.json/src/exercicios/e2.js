const num1 = Number(process.argv[2]) 
const num2 = Number(process.argv[3]) 

const add = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2

console.log(`Soma: ${add}\nSubtração: ${sub}\nMultiplicação: ${mult}\nDivisão: ${div}`)