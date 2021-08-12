import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

//1
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users.map(user => user.name))
})

//2

const validTypes = [...new Set(users.map(item => item.type))].sort()

app.get("/users/search", (req: Request, res: Response) => {
  let erroCode: number = 400
  const receivedQuery = req.query.types
 
  try {

    if (String(Object.getOwnPropertyNames(req.query)).toLowerCase() !== "types") {
      erroCode = 400
      throw new Error("Invalid query or param")
    } else if (!isNaN(Number(receivedQuery))) {
      erroCode = 422
      throw new Error("Only string is valid")
    } else if (!validTypes.includes(String(receivedQuery).toLocaleUpperCase())) {
      erroCode = 400
      throw new Error("Invalid value for Query")
    } else {
      const result = users.filter(user => {
        return user.type === String(receivedQuery).toUpperCase().trim()
      })

      return res.status(200).send(result)
    }

  } catch (err) {
    res.status(erroCode).send({ message: err.message })
  }

})