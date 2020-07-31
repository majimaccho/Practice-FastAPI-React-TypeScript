CREATE TABLE groups (
	group_id SERIAL PRIMARY KEY,
	group_name VARCHAR(50),
	group_rank VARCHAR(50)
)

INSERT INTO groups VALUES
	(DEFAULT, 'A TEAM', 'Gold'),(DEFAULT, 'Snufkins', 'Silver'),(DEFAULT, 'Odd Apples', 'Bronze')

select * from groups;

CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(50),
	group_id int,
	CONSTRAINT fk_users
      FOREIGN KEY(group_id) 
	  REFERENCES groups(group_id)
	  ON DELETE CASCADE
)



INSERT INTO users VALUES 
	(DEFAULT, 'Kodama', 3), (DEFAULT, 'Hikari', 1), (DEFAULT, 'Alex', 2), (DEFAULT, 'HY', 1),
	(DEFAULT, 'Ohe', 3), (DEFAULT, 'Brah', 1), (DEFAULT, 'Mark', 2), (DEFAULT, 'Polly', 1),
	(DEFAULT, 'MQ', 3), (DEFAULT, 'Omeh', 1), (DEFAULT, 'Ghili', 2), (DEFAULT, 'George', 1),
	(DEFAULT, 'Popo', 3), (DEFAULT, 'Inq', 1), (DEFAULT, 'Viggala', 2), (DEFAULT, 'Boom', 1),
	(DEFAULT, 'Jida', 3), (DEFAULT, 'Dan', 1), (DEFAULT, 'Bom', 2), (DEFAULT, 'Sato', 1)
;

select * from users;

select users.user_id, users.user_name, groups.group_name, groups.group_rank from users 
left outer join groups
on (users.group_id = groups.group_id)

-- drop table users
-- drop table groups