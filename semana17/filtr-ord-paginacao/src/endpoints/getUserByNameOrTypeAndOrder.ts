import { Request, Response } from "express"
import selectByUserNameOrTypeAndOrder from "../queries/selectByUserNameOrTypeAndOrder"

//E2)
export async function getUserByNameOrTypeAndOrder(
   req: Request,
   res: Response
): Promise<void> {

   const { name, type, order } = req.query

   let whereClause: any = {}

   name ? whereClause.name = name : false
   type ? whereClause.type = type : false

   const orderClause = order || "email"

   try {
      const result = await selectByUserNameOrTypeAndOrder(whereClause,orderClause)

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}