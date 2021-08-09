const operationType = process.argv[2]
const num1 = process.argv[3] ? Number(process.argv[3]) : false
const num2 = process.argv[4] ? Number(process.argv[4]) : false

const opResult = {
    "add": num1+num2,
    "sub": num1-num2,
    "mult": num1*num2,
    "div": num1/num2,
}


// console.log(`Soma: ${add}\nSubtração: ${sub}\nMultiplicação: ${mult}\nDivisão: ${div}`)

//Desafio 1)

const inputsValidation = (op, n1, n2) => {
    const validation = {}
    validation.args = op!==false && n1!==false && n2!==false ? true : "São esperados 3 parametros para a operação"
    validation.operationType = Object.getOwnPropertyNames(opResult).some(item => op===item) ? true : `É esperada uma dessas operações: ${Object.getOwnPropertyNames(opResult)}`
    validation.n1Value = n1 === '' || n1 === false || isNaN(n1)? 'É esperado um número no 2o parametro' : true
    validation.n2Value = n2 === '' || n2 === false || isNaN(n2)? 'É esperado um número no 3o parametro' : true
    Object.values(validation).every(item => item === true) ?
        console.log(`Resultado: ${opResult[op]}`)
        :
        (console.log("Verificar os seguintes erros"),
        console.table(Object.values(validation).filter(item => item!==true)))
}
inputsValidation(operationType, num1, num2)