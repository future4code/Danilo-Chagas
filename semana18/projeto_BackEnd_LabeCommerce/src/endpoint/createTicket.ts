import { Request, Response } from 'express'
import Ticket from '../entities/Ticket'
import insertNewTicket from '../service/insertNewTicket'
import validationCreateTicket from './validation/validationCreateTicket'

const setNewTicket = (input: any): Ticket | any => {
    const newTicket = new Ticket(input.name.trim(),
        input.description.trim(),
        Number(input.price),
        input.origin.trim(),
        input.destination.trim())
    newTicket.setTicket()
    return newTicket
}

export default async function createTicket(req: Request, res: Response): Promise<any> {
    try {
        if (validationCreateTicket("new", req.body)) {
            const newTicket = setNewTicket(req.body)
            await insertNewTicket(newTicket)
            res.status(200)
                .send({
                    message: "Success to create new ticket",
                    ticket: newTicket
                })
                .end()
        }
    } catch (err: any) {
        res.status(err.code || 500)
            .send({
                message: err.message || "Something went wrong",
                error: err.tips || "Internal Error"
            })
    }
}