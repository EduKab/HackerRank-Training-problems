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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    if(n > 0 && n <= 100){
        for(let cont = 1; cont <= n; cont++){
            let cadena = "";
            const noEspacios = n - cont;
            
            for(let cont2 = 1; cont2 <= noEspacios; cont2++){
                cadena = cadena.concat(" ");
            }
            
            for(let cont2 = 1; cont2 <= cont; cont2++){
                cadena = cadena.concat("#");
            }
            
            console.log(cadena);
        }
    }else{
      console.log("Ingresa un valor entre 1 y 100");  
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}