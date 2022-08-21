// 3 - [REFATORAÇÃO] Dado um array de números, faça um
// programa que imprima na tela somente os números positivos.
// OBS: Para melhorar a resolução desse problema, crie funções
// que também imprima os números negativos, os pares, os ímpares
// e realize a contagem decada um deles.
// Os valores de entrada serão:
// Array;

// Exemplo de Entrada:
// [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]
// -----------------
// [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255]

let values = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]

let positive = values.filter(num => num >= 0);

let negative = values.filter(num => num < 0);

let pair = values.filter(num => num % 2 == 0);

let odd = values.filter(num => num % 2 != 0);

console.log(`Números positivos: ${positive}`);
console.log(`Números negativos: ${negative}`);
console.log(`Números pares: ${pair}`);
console.log(`Números ímpares: ${odd}`);