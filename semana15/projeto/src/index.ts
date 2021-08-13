import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './data'
import { User } from './types'

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => { console.log(`Server is running at port 3003`) })

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users.map(user => user.name))
})

app.post("/users", (req: Request, res: Response) => {

    const newUser: User | any = {}
    let erroCode = 400
    let errorsMsg = ""
    let errorTips = []

    function validateBody() {
        const expectedObject: Array<string> = ["name", "CPF", "birthday"]
        // const expectedUserType: Array<string> = ["admin", "normal"]
        const expectedValues: any = {
            isStringAndLength: function (input: any) { return isNaN(input) && input.trim().length > 0 },
            isNumberAndLength: function (input: any) { return !isNaN(input) && Number.isInteger(input) && String(input).length === 2 && String(input).length < 3 },
            isValidBirthday: function (input: any) {
                if (
                    !Date.parse(input.split("/").map((item: any) => {
                        return Number(item) > 0 && !isNaN(item) && item
                    }))
                ) {
                    errorTips.push("Birthday must YYYY/MM/DD formart")
                    return false
                } else {
                    const today = new Date().getFullYear() + new Date().getMonth() * 0.1
                    const birthday = new Date(input).getFullYear() + new Date(input).getMonth() * 0.1
                    if ( (today - birthday) < 18) {
                        errorTips.push("A new user age must be greather than 18 years")
                        return false
                    } else { return true}
                }
            },
            name: (input: any) => expectedValues.isStringAndLength(input),
            email: (input: any) => expectedValues.isStringAndLength(input),
            // type: (input: any) => expectedUserType.includes(input.toLowerCase()) && expectedValues.isStringAndLength(input),
            birthday: (input: any) => expectedValues.isValidBirthday(input),
        }

        if (!req.body) {
            errorsMsg = "Empty Body"
            return false
        } else if (
            Object.keys(req.body).length !== 4 ||
            !Object.getOwnPropertyNames(req.body)
                .map((item: any) => expectedObject
                    .includes(item)).every(item => item === true)
        ) {
            erroCode = 406
            errorsMsg = "Some property is invalid or missing"
            return false
        } else if (
            !Object.getOwnPropertyNames(req.body)
                .map(item => { return expectedValues[item](req.body[item]) })
                .every(item => item === true)) {
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

})