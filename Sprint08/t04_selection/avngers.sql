USE ucode_web;

SELECT Heroes.id, Heroes.name WHERE SUM(Heroes_powers.power_points) AS points FROM Heroes
JOIN Powers ON Heroes_powers.hero_id = Heroes.id 
GROUP BY heroes.id
ORDER BY points DESC
LIMIT 1;


SELECT heroes.name, Heroes_powers.points FROM Heroes
JOIN Powers on Heroes_powers.hero_id = Heroes.id
WHERE Heroes_powers.points = (SELECT min(Heroes_powers.points) FROM Heroes_powers)
LIMIT 1;

SELECT Heroes_teams.hero_id, Heroes.name, Teams.name, SUM(Heroes_powers.points) AS points FROM Heroes
JOIN Powers ON Heroes_powers.hero_id = Heroes.id
JOIN Teams ON Heroes_teams.hero_id = Heroes.id
WHERE Teams.name = 'Avengers'
GROUP BY Heroes_teams.hero_id
ORDER BY points DESC;

SELECT Teams.name, SUM(Heroes_powers.points) AS points FROM Heroes
JOIN Powers ON Heroes_powers.hero_id = Heroes.id
JOIN Teams ON Heroes_teams.hero_id = Heroes.id
GROUP BY Teams.name
ORDER BY points;

