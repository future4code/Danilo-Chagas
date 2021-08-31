import { Request, Response } from "express"
import selectByUserType from "../queries/selectByUserType"

//E1b)
export async function getUserByType(
    req: Request,
    res: Response
 ): Promise<void> {
 
    const name = req.params.type

    try {
       const result = await selectByUserType(name)
 
       res.status(200).send(result)
 
    } catch (error) {
       res.status(500).send("Internal server error")
    }
 }