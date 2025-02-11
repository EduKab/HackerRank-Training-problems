/*
DESCRIPTION: Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.

Enter your query here.
Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
*/
SELECT DISTINCT CITY
FROM STATION
WHERE RIGHT(CITY, 1) NOT IN ('A', 'E', 'I', 'O', 'U');