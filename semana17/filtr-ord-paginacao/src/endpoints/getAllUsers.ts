import { Request, Response } from "express"
import selectAllUsers from "../queries/selectAllUsers"
import { user } from "../types"

//E0
export async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await selectAllUsers()

      const formatedResult = result.map(toFormat)

      res.status(200).send(formatedResult)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}

export const toFormat = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type
   }
}