USE ucode_web;

CREATE TABLE IF NOT EXISTS Powers 
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name varchar(20) NOT NULL,
    type ENUM(`attack`,`defense`) NOT NULL
);

CREATE TABLE IF NOT EXISTS Heroes_powers 
(
    hero_id int PRIMARY KEY NOT NULL,
    power_id int PRIMARY KEY NOT NULL,
    power_points int NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES Heroes (Id),
    FOREIGN KEY (power_id) REFERENCES Powers (Id)
);

INSERT INTO Heroes (race_id int NOT NULL);

CREATE TABLE IF NOT EXISTS Races
(
    id int PRIMARY KEY NOT NULL,
    name varchar(20) NOT NULL,
    FOREIGN KEY (id) REFERENCES Heroes (race_id)
);

CREATE TABLE IF NOT EXISTS Teams
(
    id int AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name varchar(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS Heroes_teams
(
    hero_id int PRIMARY KEY NOT NULL,
    team_id int PRIMARY KEY NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES Heroes (Id),
    FOREIGN KEY (team_id) REFERENCES Teams (Id)
);

