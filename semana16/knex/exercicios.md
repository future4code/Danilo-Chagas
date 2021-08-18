#### Exercício 1
- [x]1a)
      O resultado com *raw* retorna um array com as informações resumidas em forma de objeto, e sequentemente para cada coluna/campo existente da tabela, retornará suas características.
- [x]1b)
    ~~~~
     request:
        method: get
        uri: localhost:3003/actors/search/name/Tony Ramos
    ~~~~
    ~~~~TypeScript
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
    ~~~~
- [x]1c)
    ~~~~
    request:
        method: get
        uri: localhost:3003/actors/search/gender/male
    ~~~~
    ~~~~TypeScript

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
    ~~~~

#### Exercício 2
- [x]2a)
    ~~~~
    request:
        method: put
        uri: localhost:3003/actors/update/001

    body:
    {"salary": 500000}
    ~~~~
    
    ~~~~TypeScript
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
    ~~~~
- [x]2b)
    ~~~~
    request:
        method: delete
        uri: localhost:3003/actors/delete/005
    ~~~~
    ~~~~TypeScript
    const deleteActor = async (id: string): Promise<any> => {
       const response = await connection("actor").delete().where("id", id)
       return response
    };
    
    app.put("/actors/delete/:id", async (req: Request, res: Response) => {
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
    ~~~~
- [x]2c)
    ~~~~
    request:
        method: get
        uri: localhost:3003/actors/salary/female
    ~~~~
    ~~~~TypeScript
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
    ~~~~

#### Exercício 3
- []3a)
- []3b)

#### Exercício 4
- []4a)
- []4b)