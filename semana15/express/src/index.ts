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

   


    // const searchResult = countries.filter(item => {
    //     return req.query &&
    //     req.query.name ? item.name.toLowerCase().includes(String(req.query.name).toLowerCase()) : true
    //     &&
    //     req.query.capital ? item.capital.toLowerCase().includes(String(req.query.capital).toLowerCase()) : false
    //     &&
    //     req.query.continent ? item.continent.toLowerCase().toLocaleString().includes(String(req.query.continent).toLocaleString().toLowerCase()) : false
    // })
   
   
    const searchResult = countries.filter(item => {
        
        let finalResult: Array<boolean> = []

        function resultMount (result: boolean) {
            finalResult = [...finalResult, result]
        }

        req.query.name &&
        resultMount(item.name.toLowerCase().includes(String(req.query.name).toLowerCase()))

        req.query.capital &&
        resultMount(item.capital.toLowerCase().includes(String(req.query.capital).toLowerCase()))

        req.query.continent &&
        resultMount(item.continent.toLowerCase().includes(String(req.query.continent).toLowerCase()))
        
        return finalResult && item
    })

    res.status(200).send(searchResult)
})

app.listen(3003, () => {
    console.log("Servidor iniciado!")
})
