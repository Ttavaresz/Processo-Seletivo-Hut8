// 5 - Dado um array de números, faça um programa que imprima
// na tela somente os números positivos.

let array = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];
let array1 = [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255];

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
    }
}

console.log("-----------------");

for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0) {
        console.log(array1[i]);
    }
}