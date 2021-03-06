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
    create_date DATE NOT NULL DEFAULT (CURRENT_DATE()),
    limit_date DATE NOT NULL,
    creator_user_id INT NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);

SELECT * FROM TodoListUser;
SELECT * FROM TodoListTask;

SELECT TodoListTask.id as taskId,
TodoListTask.title,
TodoListTask.description,
TodoListTask.limit_date as limitDate,
TodoListTask.status,
TodoListTask.creator_user_id as creatorUserId,
TodoListUser.nickname as creatorUserNickname
FROM TodoListTask
JOIN TodoListUser
ON creator_user_id = TodoListUser.id;
