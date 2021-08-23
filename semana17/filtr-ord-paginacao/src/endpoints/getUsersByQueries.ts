import { Request, Response } from "express"
import selectUserByClauses from "../queries/selectUserByClauses"

//E4)
export async function getUsersByQueries(
   req: Request,
   res: Response
): Promise<void> {

   const { name, type, order , page } = req.query

   let whereClause: any = {}

   name ? whereClause.name = name : false
   type ? whereClause.type = type : false

   const orderClause = order || "name"

   const limitPerView = 5
   const offset = limitPerView * (!page || Number(page) <= 1  ? 0 : Number(page) - 1)
        
   try {
      const result = await selectUserByClauses(whereClause, orderClause, limitPerView,offset)

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}