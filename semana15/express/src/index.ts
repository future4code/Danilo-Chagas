import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries } from './data'

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/countries", (req: Request, res: Response) => {
    const result = countries.map(item => ({
        id: item.id,
        name: item.name
    }))

    res.status(200).send(result)
})

// app.get("/countries/:id", (req: Request, res: Response) => {
//     const result = countries.find(
//         (country) => { return country.id === Number(req.params.id) }
//     )

//     result ?
//         res.status(200).send(result) :
//         res.status(404).send("Not found")

// })

app.get("/countries/search", (req: Request, res: Response) => {

    const receivedQuery: Array<string> = Object.getOwnPropertyNames(req.query)
    const searchResult: Array<any> = []
    const inexistentQuery: Array<string> = []

    !receivedQuery
        .map((item: any) => ["name", "capital", "continent"].includes(item) ?
            true : (inexistentQuery.push(item), false))
        .every(item => item) ?

        res.status(400).send(Object(`Bad request by query: ${inexistentQuery}`)) :

        (countries.filter(
            (item: { [key: string]: any }) => {
                const itemResult: Array<boolean> = []

                receivedQuery.forEach(element => {
                    itemResult.push(
                        item[element].toLowerCase().includes(String(req.query[element]).toLowerCase())
                    )
                })

                return itemResult.every(item => item === true) && searchResult.push(item)
            })
            , res.status(200).send(searchResult))
})

app.listen(3003, () => {
    console.log("Servidor iniciado!")
})
