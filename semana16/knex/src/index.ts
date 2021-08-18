import express from "express";
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

/* E x e r c í c i o  1*/

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
    SELECT * FROM actor WHERE id = '${id}'
  `)

   // return result[0][0] //com tratamento das infos recebidas em raw
   return result //sem tratamento das informações recebidas em raw
}

/* // Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
   .then(result => {
      console.log(result)
   })
   .catch(err => {
      console.log(err)
   });
*/

/* //Assim a chamada funciona fora dos endpoints com await
 (async () => {
   console.log(await getActorById("001") )
})() */


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req, res) => {
   try {
      const id = req.params.id

      console.log(await getActorById(id))

      res.end()
   } catch (error) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
   }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


/* E x e r c í c i o   2*/

app.get("/actors/search/name/:name", async (req, res) => {
   try {

      const result = await connection.raw(`SELECT * FROM actor WHERE name = "${req.params?.name}"`)

      const actors = result[0]

      res.send(actors)

   } catch (error) {
      console.log(error);

      res.status(500).send(error.sqlMessage || error.message)
   }
})

/* E x e r c í c i o   3*/

app.get("/actors/search/gender/:gender", async (req, res) => {
   try {

      const result = await connection
      .raw(`SELECT COUNT(*) as "${req.params?.gender} qty" FROM actor WHERE gender = "${req.params?.gender}"`)
     
      res.send(result[0][0])

   } catch (error) {
      console.log(error);

      res.status(500).send(error.sqlMessage || error.message)
   }
})