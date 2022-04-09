USE ucode_web;

CREATE TABLE IF NOT EXISTS Heroes
(
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(20) NOT NULL UNIQUE,
    description varchar(100) NOT NULL,
    class_role ENUM(`tank`,`healer`,`dps`) NOT NULL
);
