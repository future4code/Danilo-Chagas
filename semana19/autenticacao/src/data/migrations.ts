import { connection } from "./connection";
import users from './users.json'

const newTable = "s19a55_users"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS ${newTable} (
      id VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
   );
`).then(() => {
      console.log(`Created ${newTable} Table`)
   })
   .catch(printError)

const insertUsers = () => connection(newTable)
   .insert(users)
   .then(() => { console.log(`Created user(s) in ${newTable}`) })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)