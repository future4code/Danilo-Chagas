import { Request, Response } from 'express'
import User from '../entities/User'
import selectAllUsers from '../service/selectAllUsers'

export default async function listAllUsers(req: Request, res: Response): Promise<any> {
    
    try {
        const result: User[] = await selectAllUsers()
        result ?
            res.status(200).send("No users to list").end()
            : res.status(200).send(result).end()

    } catch (err: any) {
        res.status(err.code || 500)
            .send({
                message: err.message || "Something went wrong",
                error: err.tips || "Internal Error"
            })
            .end()
    }
}