/*
DESCRIPTION: Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.

Enter your query here.
Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
*/
SELECT DISTINCT CITY 
FROM STATION 
WHERE (RIGHT(CITY, 1) = "A" OR RIGHT(CITY, 1) = "E" OR RIGHT(CITY, 1) = "I" 
    OR RIGHT(CITY, 1) = "O" OR RIGHT(CITY, 1) = "U");