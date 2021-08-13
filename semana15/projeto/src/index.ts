import express, {Request, Response} from 'express'
import cors from 'cors'
import { users } from './data'

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003,()=>{console.log(`Server is running at port 3003`)})

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users.map(user => user.name))
  })