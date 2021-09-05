import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import createUser from './endpoint/createUser'
import createProduct from './endpoint/createProduct'
import listAllUsers from './endpoint/listAllUsers'
import listAllProducts from './endpoint/listAllProducts'
import createTicket from './endpoint/createTicket'
import listAllTickets from './endpoint/listAllTickets'



const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log("\x1b[42m\x1b[34m%s\x1b[0m", `Server is running in localhost:${address.port}`)
    } else {
        console.error("\x1b[41m%s\x1b[0m", `Failure upon starting server`)
    }
})

app.post("/user/create", createUser) //1. Criar um Usuário
app.post("/product/create", createProduct) // 2. Criar um Produto
app.get("/user", listAllUsers) //3. Listar todos os usuários
app.get("/product", listAllProducts) //4. Listar todos os produtos
app.post("/ticket/create", createTicket) //5. Criar uma viagem
app.get("/ticket", listAllTickets) //6. Listar todos as viagens