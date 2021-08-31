import { Request, Response } from "express"
import selectByUserName from "../queries/selectByUserName"
import { toFormat } from "./getAllUsers"

//E1a)
export async function getUserByName(
    req: Request,
    res: Response
 ): Promise<void> {
 
    const name = req.query.name

    try {
       const result = await selectByUserName(name)
 
       res.status(200).send(result)
 
    } catch (error) {
       res.status(500).send("Internal server error")
    }
 }