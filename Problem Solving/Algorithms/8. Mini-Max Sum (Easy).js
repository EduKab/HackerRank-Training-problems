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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let minimo = 0;
    let maximo = 0;
    
    for(let cont = 0; cont < arr.length; cont++){
        let suma = 0;
        
        for(let cont2 = 0; cont2 < arr.length; cont2++){
            if(cont != cont2){
                suma += arr[cont2];
            }
        }
        
        if (minimo == 0){
            minimo = suma;
        }else{
            if (suma < minimo){
                minimo = suma;
            }
        }
        
        if (maximo == 0){
            maximo = suma;
        }else{
            if (suma > maximo){
                maximo = suma;
            }
        }
    }
    
    console.log(minimo + " " + maximo);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}