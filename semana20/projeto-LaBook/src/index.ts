import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import UserController from './controllers/UserController/UserController'
import PostController from './controllers/PostController/PostController'

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

const postController = new PostController
app.post("/post", (req: Request, res: Response) => postController.createPost(req, res))
app.get("/post/:postId", (req: Request, res: Response) => postController.getPostbyId(req, res))