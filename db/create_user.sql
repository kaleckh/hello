insert into users(is_admin, username, hash) values(false, $1, $2) returning username, id;