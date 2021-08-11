import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries } from './data'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries/:id", (req: Request, res: Response) => {
    const result = countries.find(
        (country)=>{return country.id === Number(req.params.id)}
    )

    res.status(200).send(result)
})

app.listen(3003, ()=>{
    console.log("Servidor iniciado!")
})
