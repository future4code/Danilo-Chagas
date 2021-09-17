import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import SQLUserDatabase from './data/UserDatabase/SQLUserDatabase'
import UserController from './controllers/UserController/UserController'

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

const userController = new UserController()
app.post("/user/signup", (req: Request, res: Response) => userController.signup(req, res))
app.post("/user/login", (req: Request, res: Response) => userController.login(req, res))


// app.get("/", async (req, res) => {
//     try {
//         const sql = await new SQLUserDatabase().saveToDatabase({
//             id: "id0001",
//             name: "Teste",
//             email: "tes@email",
//             hashedPassword: "password hasheado"
//         })
//         console.log(sql)
//         res.send(sql).end()
//     } catch (err) {
//         console.error(err)
//         res.send("nok").end()

//     }

// })