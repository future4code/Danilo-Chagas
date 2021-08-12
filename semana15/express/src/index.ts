import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries } from './data'
import { CONTINENTS, country } from './types'

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

app.get("/countries/:id", (req: Request, res: Response) => {
    const result = countries.find(
        (country) => { return country.id === Number(req.params.id) }
    )

    result ?
        res.status(200).send(result) :
        res.status(404).send("Not found")

})

app.get("/countries/search", (req: Request, res: Response) => {

    const expectedQueries: Array<string> = ["name", "capital", "continent"]
    const receivedQuery: Array<string> = Object.getOwnPropertyNames(req.query)
    const searchResult: Array<any> = []
    const inexistentQuery: Array<any> = []

    try {
        if (!receivedQuery.map((item: any) => expectedQueries
            .includes(item) ? true : (inexistentQuery.push(item), false))
            .every(item => item)) {
            throw new Error()
        }

        countries.filter(
            (item: { [key: string]: any }) => {
                const itemResult: Array<boolean> = []

                receivedQuery.forEach(element => {
                    itemResult.push(
                        item[element].toLowerCase().includes(String(req.query[element]).toLowerCase())
                    )
                })

                return itemResult.every(item => item === true) && searchResult.push(item)
            })
        res.status(200).send(searchResult)

    } catch {
        res.status(400).send({ 'Bad request by query': inexistentQuery })
    }

})

app.post("/countries/:id", (req: Request, res: Response) => {

    const expectedBody: Array<string> = ["name", "capital"]
    const receivedBody: Array<string> = Object.getOwnPropertyNames(req.body)
    const editedCountry: country = { id: 0, name: "", capital: "", continent: CONTINENTS.AFRICA }
    const invalidKeyObject: Array<any> = []
    const errorType: object = {}

    try {

        const countryID = countries.find((country) => {
            if (country.id === Number(req.params.id)) {
                Object.assign(editedCountry, country)
                return true
            }
        })

        if (!countryID) {
            throw Object.assign(errorType, { "invalidId": Number(req.params.id) })
        } else if (receivedBody.length === 0) {
            throw Object.assign(errorType, { "expectedKeys": expectedBody })
        } else if (
            !receivedBody.map((item: any) => expectedBody
                .includes(item) ? true : (invalidKeyObject.push(item), false))
                .every(item => item)) {
            throw Object.assign(errorType, { "invalidKey": invalidKeyObject })
        }

        for (let element in req.body) {
            if (!isNaN(req.body[element])) {
                throw Object.assign(errorType, { "invalidValueFor": element })
            } else if (req.body[element]) {
                Object.assign(editedCountry, {
                    [element]: req.body[element]
                })
            }
        }


        countries.splice(Number(req.params.id), 1, editedCountry)

        res.status(200).send(editedCountry)

    } catch {
        res.status(400).send(errorType)
    }

})

app.listen(3003, () => {
    console.log("Servidor iniciado!")
})