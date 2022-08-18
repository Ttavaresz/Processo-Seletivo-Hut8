// 6 - Dado um array de números, mostre quantos valores são
// pares, quantos são ímpares, quantos são positivos e quantos
// são negativos.

let array = [-5,0,-3,-4,12];
let pair = 0, odd = 0, positive = 0, negative = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        pair++;
    }
    if (array[i] % 2 != 0) {
        odd++
    }
    if (array[i] > 0) {
        positive++;
    }
    if (array[i] < 0) {
        negative++;
    }
}

console.log(pair + " valor(es) são par(es)");
console.log(odd + " valor(es) são ímpar(es)");
console.log(positive + " valor(es) são positivo(s)");
console.log(negative + " valor(es) são negativo(s)");