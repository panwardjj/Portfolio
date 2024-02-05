CREATE TABLE tbleuser(
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    fullname varchar(255) NOT NULL,
    username varchar(255) NOT NULL,
    useremail varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    regdate timestamp NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE InnoDB DEFAULT CHARSET=utf8;
