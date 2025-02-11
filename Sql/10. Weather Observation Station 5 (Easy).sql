/*
    DESCRIPTION: Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
    
Enter your query here.
Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
*/
SELECT * FROM (SELECT TOP 1 CITY, LEN(CITY) AS NoLetras 
FROM STATION 
ORDER BY NoLetras ASC, CITY ASC) AS Min
UNION
SELECT * FROM(SELECT TOP 1 CITY, LEN(CITY) AS NoLetras 
FROM STATION 
ORDER BY NoLetras DESC, CITY ASC) AS Max;