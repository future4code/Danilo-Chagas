import { Request, Response } from "express";
import {connection} from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import insertUser from "../services/insertUser";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const {email, password } = req.body

      if (!email ||!password) {
         res.statusCode = 422
         throw new Error("Missing 'password' and/or 'email' keys")
      }

      if (password.length < 6) {
         res.statusCode = 422
         throw new Error("'password' must be iqual or longer than 6 characters")
      }

      if (email.includes("@")) {
         res.statusCode = 422
         throw new Error("Invalid 'email'")
      }

      const [user] = await connection('s19a55_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email already registered')
      }

      const id: string = new IdGenerator().generateId()

      const newUser: user = { id, email, password }

      await insertUser(newUser)

      /*-------   PAREI AQUI. FUNÇÃO DE INSERIR NOVO USUARIO NO SQL OK   -------*/
      
      const token:string = new Authenticator().generateToken({id})

      // Forma alternativa: 
         // const authenticator = new Authenticator()
         // const token:string = authenticator.generateToken({id})

      res.status(201).send({ newUser, token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.sqlMessage || error.message })
      }
   }
}