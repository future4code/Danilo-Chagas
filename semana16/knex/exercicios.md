#### Exercício 1
- [x]1a)
      O resultado com *raw* retorna um array com as informações resumidas em forma de objeto, e sequentemente para cada coluna/campo existente da tabela, retornará suas características.
- [x]1b)
    ~~~~
    get localhost:3003/actors/search/name/Tony Ramos
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
    get localhost:3003/actors/search/gender/male
    ~~~~
    ~~~~TypeScript
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
    ~~~~

#### Exercício 2
- []2a)
- []2b)
- []2c)

#### Exercício 3
- []3a)
- []3b)

#### Exercício 4
- []4a)
- []4b)