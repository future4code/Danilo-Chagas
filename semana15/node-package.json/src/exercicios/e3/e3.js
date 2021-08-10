const colors = require('colors');

const newTask = process.argv[2]

const taskList = [
    {tarefa: 'comprar leite vegetal'},
]

newTask ? taskList.push({tarefa: newTask}) : console.log(`Uma tarefa deve ser inserida no 1o parametro!`.bgRed.bold)


console.log(`Tarefa adicionada com sucesso!`.bgMagenta.bold)
console.table(taskList)