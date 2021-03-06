import connection from "./connection"
// import users from "./users.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export const createTables = () => connection
   .raw(`
   CREATE TABLE IF NOT EXISTS s20_labook_test_users (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
    );
  
  CREATE TABLE IF NOT EXISTS s20_labook_test_passwords (
    user_id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_password VARCHAR(64) NOT NULL,
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_test_users (id)
    );
  
  CREATE TABLE IF NOT EXISTS s20_labook_test_posts (
    id VARCHAR(36) PRIMARY KEY UNIQUE NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    description TEXT(2000) NOT NULL,
    create_date NUMERIC(13) NOT NULL,
    img_link LONGTEXT NOT NULL,
    postType enum('normal','evento') NOT NULL,
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_test_users (id)
    );

  CREATE TABLE IF NOT EXISTS s20_labook_test_likes (
    post_id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36) NOT NULL,
        FOREIGN KEY (post_id)
        REFERENCES s20_labook_test_posts (id),
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_test_users (id)
    );
    

  CREATE TABLE IF NOT EXISTS s20_labook_test_comments (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    post_id VARCHAR(36) NOT NULL,
    comment TEXT(2000) NOT NULL,
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_test_users (id),
        FOREIGN KEY (post_id)
        REFERENCES s20_labook_test_posts (id)
    );
    
  CREATE TABLE IF NOT EXISTS s20_labook_test_friendships (
    user_1 VARCHAR(36) PRIMARY KEY NOT NULL,
    user_2 VARCHAR(36) NOT NULL,
        FOREIGN KEY (user_1)
        REFERENCES s20_labook_test_users (id),
        FOREIGN KEY (user_2)
        REFERENCES s20_labook_test_users (id)
      );

   `)
   .then(() => { console.log("Created Tables") })
   .catch(printError)

// const insertUsers = () => connection("s18_users")
//    .insert(users)
//    .then(() => { console.log("Created Users") })
//    .catch(printError)

// const insertProducts = () => connection("s18_products")
//    .insert(users)
//    .then(() => { console.log("Created Products") })
//    .catch(printError)

export const closeConnection = () => { connection.destroy() }

createTables()
//    .then(insertUsers)
//    .then(insertProducts)
   .finally(closeConnection)