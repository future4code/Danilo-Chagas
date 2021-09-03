import connection from "./connection"
import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
      CREATE TABLE IF NOT EXISTS s18_users (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         age INT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS s18_products (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         price FLOAT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS s18_tickets (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         travel_from VARCHAR(255) NOT NULL,
         travel_to VARCHAR(255) NOT NULL,
         price FLOAT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS s18_purchases (
         id VARCHAR(255) PRIMARY KEY,
         item_type VARCHAR(255) NOT NULL,
         product_id VARCHAR(255) NULL,
         ticket_id VARCHAR(255) NULL,
         user_id VARCHAR(255) NOT NULL,
         quantity INT NOT NULL,
         total_value FLOAT NOT NULL,
         FOREIGN KEY (product_id) REFERENCES s18_products(id),
         FOREIGN KEY (ticket_id) REFERENCES s18_travels(id)
      );
   `)
   .then(() => { console.log("Created Tables") })
   .catch(printError)

const insertUsers = () => connection("s18_users")
   .insert(users)
   .then(() => { console.log("Created Users") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)