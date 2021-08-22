CREATE TABLE TodoListUser (
	id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

SELECT * FROM TodoListUser;

DELETE from TodoListUser where id = 6
and id = 5
and id = 4
and id = 3
and id = 2
and id = 1;