import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors())

// app.get("/", (req, res) => { res.send("Hello from Express!") })

// app.get("/actors", async (req,res)=>{
//    try {
   
//    const result = await connection.raw( "SELECT * FROM actor")
   
//    const actors = result[0]
   
//    res.send(actors)
   
//    } catch (error) {
//    console.log(error);
   
//    res.status(500).send(error.sqlMessage || error.message)
//    }
//    }) 

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

/**/

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM actor WHERE id = '${id}'
  `)

	// return result[0][0]
   return result
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req , res) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal