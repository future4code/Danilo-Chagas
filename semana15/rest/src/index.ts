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

//2 (adaptado no exercício 3)

const validTypes: Array<string> = [...new Set(users.map(item => item.type))].sort()
/*
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
*/

//3

app.get("/users/search", (req: Request, res: Response) => {

  const expectedQueries: Array<string> = ["name", "type"]
  const receivedQuery: Array<string> = Object.getOwnPropertyNames(req.query)
  const searchResult: Array<any> = []
  const invalidQuery: Array<any> = []
  let errorCode: number = 400

  try {

    if (!receivedQuery.map((item: any) => expectedQueries
      .includes(item) ? true : (invalidQuery.push(item), false))
      .every(item => item)) {
      throw new Error("Invalid Query")
    }

    users.filter(
      (item: { [key: string]: any }) => {
        const itemResult: Array<boolean> = []

        receivedQuery.forEach(element => {
          itemResult.push(
            item[element].toLowerCase().includes(String(req.query[element]).toLowerCase())
          )
        })

        return itemResult.every(item => item === true) && searchResult.push(item)
      })

    if (searchResult.length === 0) {
      errorCode = 404
      throw new Error("No Search Result")
    } else {
      res.status(200).send(searchResult)
    }

  } catch (err) {
    res.status(errorCode).send({ message: `${err.message} ${invalidQuery}` })
  }

})

//E4
app.post("/users", (req: Request, res: Response) => {

  const newUser: User | any = {}
  let erroCode = 400
  let errorsMsg = ""

  function validateBody() {
    const expectedObject: Array<string> = ["name", "email", "type", "age"]
    const expectedUserType: Array<string> = ["admin", "normal"]
    const expectedValues: any = {
      isStringAndLength: function (input: any) { return isNaN(input) && input.trim().length > 0 },
      isNumberAndLength: function (input: any) { return !isNaN(input) && Number.isInteger(input) && String(input).length === 2 && String(input).length < 3},
      name: (input: any) => expectedValues.isStringAndLength(input),
      email: (input: any) => expectedValues.isStringAndLength(input),
      type: (input: any) => expectedUserType.includes(input.toLowerCase()) && expectedValues.isStringAndLength(input),
      age: (input: any) => expectedValues.isNumberAndLength(input),
    }     

    if (!req.body) {
      errorsMsg = "Empty Body"
      return false
    } else if (
      Object.keys(req.body).length !== 4 || 
      !Object.getOwnPropertyNames(req.body)
      .map((item: any) => expectedObject
      .includes(item)).every(item=> item===true)
      ) {
      erroCode = 406
      errorsMsg = "Some property is invalid or missing"
      return false
    } else if (
      !Object.getOwnPropertyNames(req.body)
      .map(item => {return expectedValues[item](req.body[item])})
      .every(item=> item===true)) {
      erroCode = 406
      errorsMsg = "Invalid or missing value for some property"
      return false
    } else {
      return true
    }
  }

  try {
    if (!validateBody()) {
      throw new Error()
    } else {
      Object.assign(newUser, req.body)
      Object.assign(newUser, { id: new Date() })
      users.push(newUser)
      return res.status(200).send(newUser).end()
    }
  } catch {
    res.status(erroCode).send({ messagem: errorsMsg }).end()
  }

}
)