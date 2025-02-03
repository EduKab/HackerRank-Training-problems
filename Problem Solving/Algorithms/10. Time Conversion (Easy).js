'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const dateString = s.toString();
    
    const time = dateString.substring(dateString.length - 2); 
    
    if(time === "AM"){
        if((dateString.substring(0, 2)) == "12"){
            return  "00" + dateString.substring(2, dateString.length - 2);
        }
        
        return dateString.substring(0, dateString.length - 2);
    }else{
        if((dateString.substring(0, 2)) == "12"){
            return  "12" + dateString.substring(2, dateString.length - 2);
        }
        
        const hour = parseInt(dateString.substring(0, 2)) + 12;
        
        return hour + "" + dateString.substring(2, dateString.length - 2);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}