'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    
    for(let cont = 0; cont < arr.length; cont++){
        if(arr[cont] > 0){
            positivos++;
        }else if(arr[cont] < 0){
            negativos++;
        }else{
            ceros++;
        }
    }
    
    const proportionPositivos = (positivos / arr.length).toFixed(6);
    const proportionNegativos = (negativos / arr.length).toFixed(6);
    const proportionCeros = (ceros / arr.length).toFixed(6);
    
    console.log((proportionPositivos + '\n' + proportionNegativos + '\n' + proportionCeros));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}