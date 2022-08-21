// 2- Dado um array de números, faça um programa que teste se este
// array contém um valor específico. Tanto o valor quanto o array
// serão valores deentrada.
// Exemplo de Entrada:
// [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]
//  9

// Exemplo de Saída:
// O valor foi encontrado no Array.

let values = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127];
let find = -15253;

// if (values.find(num => num === find)) {
//     console.log("O valor foi encontrado.");
// } else {
//     console.log("O valor não foi encontrado.");
// }

if (values.some(num => num === find)) {
    console.log("O valor foi encontrado.");
} else {
    console.log("O valor não foi encontrado.");
}