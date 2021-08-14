import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from './accountData'
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
    let errorTips: Array<any> = []

    function validateBody() {
        const checkers: any = {
            isValidName: function (input: any) {
                if (input.trim().length > 0) {
                    if (!isNaN(input) || input.split("").some((item: any) => Number(item))) {
                        errorTips.push("Name is empty or isn't a text")
                        return false
                    } else {
                        return true
                    }
                } else {
                    return false
                }
            },
            isValidCPF: function (input: any) {
                if (![!isNaN(Number(input)),
                Number.isInteger(Number(input)),
                String(input).length === 11].every(item => item === true)) {
                    errorTips.push("CPF must be 11 digits and only numbers. If X digit, replace it for 0.")
                    return false
                } else if (
                    users.some(item => Number(item.cpf) === Number(input))
                ) {
                    errorTips.push("CPF already been registered.")
                    return false
                } else {
                    return true
                }
            },
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
                    if ((today - birthday) < 18) {
                        errorTips.push("Only users higher than 18 years old can be registred")
                        return false
                    } else { return true }
                }
            }
        }
        const expectedObject: Array<string> = ["name", "cpf", "birthday"]
        const expectedValues: any = {
            name: (input: any) => checkers.isValidName(input),
            birthday: (input: any) => checkers.isValidBirthday(input),
            cpf: (input: any) => checkers.isValidCPF(input),
        }

        if (!req.body) {
            errorsMsg = "Empty Body"
            return false
        } else if (
            Object.keys(req.body).length !== expectedObject.length ||
            !Object.getOwnPropertyNames(req.body)
                .map((item: any) => expectedObject
                    .includes(item)).every(item => item === true)
        ) {
            erroCode = 406
            errorsMsg = "Some property is missing or invalid"
            errorTips.push(`Expected properties: ${expectedObject}`)
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
            Object.assign(newUser, { ...req.body, id: Number(new Date()) })
            users.push(newUser)
            return res.status(200).send(newUser).end()
        }
    } catch {
        res.status(erroCode).send({ message: errorsMsg, error: errorTips }).end()
    }

})