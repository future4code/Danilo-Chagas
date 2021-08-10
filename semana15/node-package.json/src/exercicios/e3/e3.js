const colors = require('colors');

const newTask = process.argv[2]

const taskList = [
    {tarefa: 'comprar leite vegetal'},
]

taskList.push({tarefa: newTask})

console.log(`Tarefa adicionada com sucesso!`.bgMagenta.bold)
console.table(taskList)