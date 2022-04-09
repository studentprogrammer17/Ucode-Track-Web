USE ucode_web;

SELECT Heroes.name FROM Heroes JOIN Teams ON Heroes.id == Heroes_teams.hero_id 
JOIN ON Races ON Races.id = Heroes.race_id 
WHERE Races.name != `human`  AND Heroes.name LIKE `%a%`
AND (Heroes.class_role = 'tankman' OR Heroes.class_role = 'healer') 
GROUP BY  heroes.id HAVING COUNT(teams.hero_id) >= 2
ORDER BY heroes.id DESC LIMIT 1;

