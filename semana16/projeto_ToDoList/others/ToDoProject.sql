CREATE TABLE TodoListUser (
	id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE TodoListTask (
	id INT NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id INT NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

SELECT * FROM TodoListUser;

SELECT id, nickname FROM TodoListUser where id = 2;

DELETE from TodoListUser where id = 3;

truncate table TodoListUser;

update TodoListUser
set name="ad", nickname="as"
where id = 3 ;