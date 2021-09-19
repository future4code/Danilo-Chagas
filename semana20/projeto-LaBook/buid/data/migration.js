"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const printError = (error) => { console.log(error.sqlMessage || error.message); };
const createTables = () => connection_1.default
    .raw(`
   CREATE TABLE IF NOT EXISTS s20_labook_users (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
    );
  
  CREATE TABLE IF NOT EXISTS s20_labook_passwords (
    user_id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_password VARCHAR(64) NOT NULL,
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_users (id)
    );
  
  CREATE TABLE IF NOT EXISTS s20_labook_posts (
    id VARCHAR(36) PRIMARY KEY UNIQUE NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    description TEXT(2000) NOT NULL,
    create_date NUMERIC(13) NOT NULL,
    img_link LONGTEXT NOT NULL,
    postType enum('normal','evento') NOT NULL,
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_users (id)
    );

  CREATE TABLE IF NOT EXISTS s20_labook_likes (
    post_id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36) NOT NULL,
        FOREIGN KEY (post_id)
        REFERENCES s20_labook_posts (id),
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_users (id)
    );
    

  CREATE TABLE IF NOT EXISTS s20_labook_comments (
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    post_id VARCHAR(36) NOT NULL,
    comment TEXT(2000) NOT NULL,
        FOREIGN KEY (user_id)
        REFERENCES s20_labook_users (id),
        FOREIGN KEY (post_id)
        REFERENCES s20_labook_posts (id)
    );
    
  CREATE TABLE IF NOT EXISTS s20_labook_friendships (
    user_1 VARCHAR(36) PRIMARY KEY NOT NULL,
    user_2 VARCHAR(36) NOT NULL,
        FOREIGN KEY (user_1)
        REFERENCES s20_labook_users (id),
        FOREIGN KEY (user_2)
        REFERENCES s20_labook_users (id)
      );

   `)
    .then(() => { console.log("Created Tables"); })
    .catch(printError);
const closeConnection = () => { connection_1.default.destroy(); };
createTables()
    .finally(closeConnection);
//# sourceMappingURL=migration.js.map