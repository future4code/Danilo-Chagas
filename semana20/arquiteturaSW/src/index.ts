import { app } from "./app"
import { signup } from './endpoints_old/signup'
import createTaskController from './controller/tasks/createTaskController'
import { getTaskById } from './endpoints_old/getTaskById'
import { login } from './endpoints_old/login'

app.post('/user/signup', signup)
app.post('/user/login', login)

app.put('/task', createTaskController) //em aula
app.get('/task/:id', getTaskById)

