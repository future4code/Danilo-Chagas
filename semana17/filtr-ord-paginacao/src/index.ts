import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUserByName } from "./endpoints/getUserByName"
import { getUserByType } from "./endpoints/getUserByType"
import { getUserByNameOrTypeAndOrder } from "./endpoints/getUserByNameOrTypeAndOrder"

export const app = express()

app.use(express.json())
app.use(cors())

// //E0)
// app.get("/users", getAllUsers)

// //E1a)
// app.get("/users", getUserByName)

// //E1b)
// app.get("/users/:type", getUserByType)

// E2)
app.get("/users", getUserByNameOrTypeAndOrder)


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})