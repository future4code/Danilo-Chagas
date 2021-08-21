import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

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

const idGenerator = async () => {
   try {
      const lastNumber: number | any = await connection("TodoListUser")
         .max("id", { as: "res" })
      return lastNumber[0].res === null ? 1 : lastNumber[0].res + 1
   } catch {
      throw new Error()
   }
}

const createUser = async (name: any, nickname: any, email: any): Promise<any> => {
   const newId = await idGenerator()
   try {
      const result = await connection("TodoListUser")
         .insert({
            id: newId,
            name: name,
            nickname: nickname,
            email: email
         })
      return result
   } catch (err) {
      switch (err.code) {
         case "ER_DUP_ENTRY":
            throw new Object({ status: 409, message: "Email or nickname already registred" })
         default:
            throw new Object({ status: 500, message: "Unexpected error" })
      }
   }
}

function validateBody(body: any) {
   const expectedObject: Array<string> = ["name", "nickname", "email"]
   const errorTips: Array<any> = []
   const checkers: any = {
      isValidName: function (input: any) {
         if (input.trim().length > 0 && input.trim().length <= 255) {
            if (!isNaN(input) || input.split("").some((item: any) => Number(item))) {
               errorTips.push("Invalid name. Only letter is acceptable.")
               return false
            } else {
               return true
            }
         } else {
            errorTips.push("Name is empty or has more than 255 characters.")
            return false
         }
      },
      isValidNickName: function (input: any) {
         if (input.trim().length === 0 || input.trim().length > 255) {
            errorTips.push("Nickname is empty or it has more than 255 characters.")
            return false
         } else {
            return true
         }
      },
      isValidEmail: function (input: any) {
         if (!input.trim().length || input.trim().length > 255) {
            errorTips.push("Email is empty or it has more than 255 characters.")
            return false
         } else if (!input.includes("@") ? true
            : !input.split("@")[0] ? true
               : !input.split("@")[1].includes(".") ? true
                  : input.split("@")[1].split(".")[0].length > 0 &&
                     input.split("@")[1].split(".")[1].length > 0 ? false : true) {
            errorTips.push("Invalid email.")
            return false
         } else {
            return true
         }
      }
   }
   const expectedValues: any = {
      name: (input: any) => checkers.isValidName(input),
      nickname: (input: any) => checkers.isValidNickName(input),
      email: (input: any) => checkers.isValidEmail(input),
   }

   if (!body) {
      throw new Object({ status: 400, message: "Empty Body" })
   } else if (
      Object.keys(body).length !== expectedObject.length ||
      !Object.getOwnPropertyNames(body)
         .map((item: any) => expectedObject
            .includes(item)).every(item => item === true)
   ) {
      throw new Object({
         status: 406,
         message: "Some key is missing or invalid",
         tips: `Expected properties: ${expectedObject}`
      })
   } else if (
      !Object.getOwnPropertyNames(body)
         .map(item => { return expectedValues[item](body[item]) })
         .every(item => item === true)) {
      throw new Object({
         status: 406,
         message: "Invalid or missing value for some property",
         tips: errorTips
      })
   } else {
      return true
   }
}

app.post("/user", async (req: Request, res: Response) => {
   const { name, nickname, email }: String | any = req.body
   try {
      validateBody(req.body)
      try {
         const result = await createUser(name, nickname, email)
         res.status(200).send("Success to register new user").end()
      } catch (error) {
         res.status(error.status || 400).send(error.sqlMessage || error.message)
      }
   } catch (error) {
      res.status(error.status)
         .send({ message: error.message, error: error.tips })
         .end()
   }
})