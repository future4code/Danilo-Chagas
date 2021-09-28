import { Request, Response } from 'express'
import { createTaskBusiness } from "../../business/tasks/createTaskBusiness"

export default async function createTaksController(req: Request, res: Response) {
    try {
        const { title, description, deadline, authorId } = req.body

        await createTaskBusiness({ title, description, deadline, authorId })

        res.status(201).end()
    } catch (error: any) {
        res.statusMessage = error.message
        res.status(500).end()
    }
}