-- Write your query here
SELECT 
  people.id AS person_id,
  people.birthdate,
  COALESCE(SUM(records.speed_delta), 0) AS total_speed_delta
FROM people
LEFT JOIN records
  ON people.id = records.person_id
GROUP BY people.id, people.birthdate
ORDER BY person_id ASC;