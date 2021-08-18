import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { AnyNaptrRecord } from "dns";

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

/* E x e r c í c i o   1 A*/

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


/* E x e r c í c i o   1 B*/

const searchByName = async (name: string): Promise<any> => {
   try {
      return await connection.raw(`SELECT * FROM actor WHERE name = "${name}"`)
   } catch {
      return false
   }
}

app.get("/actors/search/name/:name", async (req, res) => {
   try {

      const result = await searchByName(req.params?.name)

      const actors = result[0]

      res.send(actors).end()

   } catch (error) {
      console.log(error);

      res.status(500).send(error.sqlMessage || error.message)
   }
})

/* E x e r c í c i o   1 C*/

const countGender = async (gender: string): Promise<any> => {
   try {
      return await connection
   .raw(`SELECT COUNT(*) as "${gender} qty" FROM actor WHERE gender = "${gender}"`)
   } catch {
      return false
   }
}

app.get("/actors/search/gender/:gender", async (req, res) => {
   try {

      const result = await countGender(req.params?.gender)

      res.send(result[0][0])

   } catch (error) {
      console.log(error);

      res.status(500).send(error.sqlMessage || error.message)
   }
})

/* E x e r c í c i o   2 A*/

const updateSalary = async (id: string | any, salary: number | any): Promise<any> => {

   const response = await connection("actor")
      .update({
         salary: salary,
      })
      .where("id", id)

   return response
};

app.put("/actors/update/:id", async (req: Request, res: Response) => {

   const id: any = req.params?.id
   const salary: any = req.body?.salary

   try {
      const result: any = await updateSalary(id, salary)

      result ?
         res.status(200).send("sucess to update")
         : res.status(400).send("failed to update")

   } catch (error) {
      console.log(error);
      res.status(500).send(error.sqlMessage || error.message)
   }
})

/* E x e r c í c i o   2 B*/

const deleteActor = async (id: string): Promise<any> => {
   const response = await connection("actor").delete().where("id", id)
   return response
};

app.delete("/actors/delete/:id", async (req: Request, res: Response) => {
   const id: any = req.params?.id
   try {
      const result: any = await deleteActor(id)
      result ?
         res.status(200).send("sucess to delete")
         : res.status(400).send("failed to delete")
   } catch (error) {
      console.log(error);
      res.status(500).send(error.sqlMessage || error.message)
   }
})

/* E x e r c í c i o   2 C*/

const avgSalary = async (gender: string): Promise<any> => {
   const response = await connection("actor")
   .avg('salary as data')
   .where("gender","=",gender)
   return response[0]?.data
};

app.get("/actors/salary/:gender", async (req: Request, res: Response) => {
   const gender: any = req.params?.gender
   try {
      const result: any = await avgSalary(gender)
      result ?
         res.status(200).send(JSON.stringify(result))
         : res.status(400).send("failed to search")
   } catch (error) {
      console.log(error);
      res.status(500).send(error.sqlMessage || error.message)
   }
})

/* E x e r c í c i o   3 A*/

app.get("/actor/:id", async (req: Request, res: Response) => {
   try {
     const id = req.params.id;
     const actor = await getActorById(id);
 
     res.status(200).send(actor)
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });

 /* E x e r c í c i o   3 B*/
 app.get("/actor", async (req: Request, res: Response) => {
   
   const gender: string | any= req.query?.gender;

   try {
     const result = await countGender(gender);
 
     res.status(200).send(result[0])
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });