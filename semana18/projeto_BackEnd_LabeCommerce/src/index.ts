import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import createUser from './endpoint/createUser'

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen( process.env.PORT || 3003, ()=>{
    if (server){
        const address = server.address() as AddressInfo
        console.log("\x1b[42m\x1b[34m%s\x1b[0m",`Server is running in localhost:${address.port}`)
    } else {
        console.error("\x1b[41m%s\x1b[0m",`Failure upon starting server`)
    }
})

app.post("/user/create", createUser)