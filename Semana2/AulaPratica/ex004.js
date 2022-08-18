// 4 - Crie um algoritmo que tem como entrada um número e imprime
// a sua tabuada do 1 ao 10.

const prompt = require('prompt-sync') ();
let num = prompt("Digite um número: ");

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}