function numPar(value) {
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

const prompt = require('prompt-sync') ();

let value = prompt("Digite um valor inteiro: ");

console.log(numPar(value));