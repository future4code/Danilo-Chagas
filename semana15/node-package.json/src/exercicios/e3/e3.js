const colors = require('colors');

const newTask = process.argv[2]

const taskList = [
    { tarefa: 'comprar leite vegetal' },
]
const msgErr = !newTask && console.log(`Uma tarefa deve ser inserida no 1o parametro!`.bgRed.bold)

newTask ? (
    taskList.push({ tarefa: newTask }),
    console.log(`Tarefa adicionada com sucesso!`.bgMagenta.bold),
    console.table(taskList))
    :
    msgErr


//Desafio3
const fs = require('fs')
const path = require('path')
const appRoot = process.cwd()
let newFile
const msgSucess = newTask && 
    console.log(`Tarefa adicionada com sucesso!(Lista Persistente)`.bgCyan.bold)

!newTask ? msgErr :
    !appRoot.includes("node-package.json/src/exercicios/e3") ?

        (
            newFile = JSON.parse(fs.readFileSync(path.resolve('src/exercicios/e3/', 'tasks.json'))),
            newFile.tarefas.push(newTask),
            fs.writeFileSync(path.resolve('src/exercicios/e3/', 'tasks.json'), JSON.stringify(newFile, null, '\t')),
            msgSucess,
            console.table(newFile.tarefas)
        )
        :
        (
            newFile = JSON.parse(fs.readFileSync(path.resolve('./tasks.json'))),
            newFile.tarefas.push(newTask),
            fs.writeFileSync(path.resolve('./tasks.json'), JSON.stringify(newFile, null, '\t')),
            msgSucess,
            console.table(newFile.tarefas)
        )