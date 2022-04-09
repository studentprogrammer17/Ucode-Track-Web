USE ucode_web;

SELECT Heroes.name, Teams.name FROM Heroes
LEFT OUTER JOIN Teams,Heroes_teams ON Heroes.id = Heroes_teams.hero_id 
IF(Heroes.id != Heroes_teams.hero_id, NULL, "TRUE");

SELECT Heroes.name, Powers.name FROM Heroes
LEFT OUTER JOIN Powers,Heroes_powers ON Heroes.id = Heroes_powers.hero_id 

SELECT Heroes.name, Powers.name, Teams.name FROM Heroes
INNER JOIN Teams,Heroes_teams ON Heroes.id = Heroes_teams.hero_id 
INNER JOIN Powers,Heroes_powers ON Heroes.id = Heroes_powers.hero_id 

