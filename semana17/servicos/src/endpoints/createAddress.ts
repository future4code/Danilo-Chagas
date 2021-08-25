import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getAddress } from "../services/getAddress";
import { address } from "../types";

export default async function createAddress(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id } = req.params
      const { cep, complement, number } = req.body

      if (!id || !cep || !number) {
         res.statusCode = 422
         throw "'id' from user id, 'CEP' and 'number' are required values"
      }

      const formatedCEP: string = await cep.split("")
      .filter((item: any) => Number(item) || Number(item) === 0 && item)
      .join("")
      .toString()

      const {street, district, city, state} = await getAddress(formatedCEP)

      const newAddress: address = {
         cep: formatedCEP,
         street_name: street,
         number: number,
         complement: complement && complement,
         district,
         city,
         state,
         user_id: id
         }

      await connection('semana17aula51').insert(newAddress)

      res.status(201).send({msg: "Address registered", address: newAddress})

   } catch (error) {

      if (typeof error === "string") {

         res.send(error)
      } else {
         
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Failed to register Address. Try again")
      }

   }
}