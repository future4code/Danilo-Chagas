import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";

export default async function editUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      // Validação do token:
      const token = req.headers.authorization
      
      const tokenData = new Authenticator().getTokenData(token)
      
      if(!tokenData){
         res.statusCode = 401
         throw new Error("Não autorizado")
      }
      
      // Validação dos novos dados cadastrais:
      const { name, nickname } = req.body

      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      // Alteração do banco
      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id})

      res.end()

   } catch (error) {

      console.log(error.message)

      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}