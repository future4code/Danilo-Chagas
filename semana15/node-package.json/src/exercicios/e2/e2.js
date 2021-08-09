const num1 = process.argv[2] ? Number(process.argv[2]) : false
const num2 = process.argv[3] ? Number(process.argv[3]) : false

const add = num1 + num2
const sub = num1 - num2
const mult = num1 * num2
const div = num1 / num2

// console.log(`Soma: ${add}\nSubtração: ${sub}\nMultiplicação: ${mult}\nDivisão: ${div}`)

//Desafio 1)
const inputsValidation = (n1, n2) => {
    const validation = {}
    validation.arg = n1 || n2 ? "São esperados 2 parametros. Está faltando um" : true
    validation.n1Value = n1 === '' || n1 === false || !isNaN(n1)? 'É esperado um número no 1o parametro' : true
    validation.n2Value = n2 === '' || n2 === false || !isNaN(n2)? 'É esperado um número no 2o parametro' : true
    Object.values(validation).every(item => item === true) ?
        console.log(`${n1} e ${n2}`)
        :
        (console.log("Verificar os seguintes erros"),
        console.table(Object.values(validation).filter(item => item!==true)))
}
inputsValidation(num1, num2)