import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { validateBody } from "./functions";
import { createUser , getUserById } from "./queryBuilder";

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => { res.send("Hello!") })

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

app.post("/user", async (req: Request, res: Response) => {
   const { name, nickname, email }: String | any = req.body
   try {
      validateBody(req.body)
      try {
         const result = await createUser(name, nickname, email)
         res.status(201).send(["Success to register new user",result]).end()
      } catch (error) {
         res.status(error.status || 400).send(error.sqlMessage || error.message)
      }
   } catch (error) {
      res.status(error.status)
         .send({ message: error.message, error: error.tips })
         .end()
   }
})

app.get("/user/:id", async (req: Request, res: Response) => {

   try{
      const result = await getUserById(req.params.id)
      res.status(200).send(result).end()
   } catch (error) {
      res.status(error.status)
      .send({ message: error.message, error: error.tips })
      .end()
   }

})