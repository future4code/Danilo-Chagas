import { Request, Response } from "express"
import selectAllUsersByOffset from "../queries/selectAllUsersByOffset"

//E3)
export async function getUsersByPagination(
   req: Request,
   res: Response
): Promise<void> {

   const { page } = req.query

   const limitPerView = 5
   
   const offset = limitPerView * (!page || Number(page) <= 0  ? 1 : Number(page) - 1)
    
   try {
      const result = await selectAllUsersByOffset(limitPerView,offset)

      res.status(200).send(result)

   } catch (error) {
      res.status(500).send("Internal server error")
   }
}