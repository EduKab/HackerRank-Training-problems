/*
DESCRIPTION: Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

Enter your query here.
Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
*/
SELECT DISTINCT CITY FROM STATION WHERE (LEFT(CITY, 1) = "A" OR LEFT(CITY, 1) = "E" OR LEFT(CITY, 1) = "I" OR LEFT(CITY, 1) = "O" OR LEFT(CITY, 1) = "U")
;