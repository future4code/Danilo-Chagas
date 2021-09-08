import { Request, Response } from 'express'
import Ticket from '../entities/Ticket'
import selectAllTickets from '../service/selectAllTickets'

export default async function listAllTickets(req: Request, res: Response): Promise<any> {
    
    try {
        const result: Ticket[] = await selectAllTickets()
        result.length < 1 ?
            res.status(204).end()
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