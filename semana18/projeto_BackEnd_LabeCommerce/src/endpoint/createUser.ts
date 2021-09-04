import { Request, Response } from 'express'
import User from '../entities/User'
import insertNewUser from '../service/insertNewUser'
import validationCreateUser from './validation/validationCreateUser'

const setNewUser = (input: User): User | any => {
    const newUser = new User(input.name.trim(), input.email.trim(), input.age)
    newUser.setUser()
    return newUser
}

export default async function createUser(req: Request, res: Response): Promise<any> {
    try {
        if (validationCreateUser("new", req.body)) {
            const newUser = setNewUser(req.body)
            await insertNewUser(newUser)
            res.status(200)
                .send({
                    message: "Success to create new user",
                    user: newUser
                })
                .end()
        }
    } catch (err: any) {
        res.status(err.code || 500).send({
            message: err.message,
            error: err.tips || err
        })
    }
}