// 5- Escreva um programa para substituir os elementos
// pares pelo valor “X”.
// Exemplo de Entrada:
// [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127]
// Exemplo de Saída:
// [1, -7, -23, “X”, -19, 13, “X”, “X”, “X”, -153, -127]

const values = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127];

let pair = values.filter(num => num % 2 == 0);

console.log(pair);

let toReplace = values.forEach((num, index) => {
    return ((num % 2 == 0) ? values[index] = "X": ""); 
});
console.log(values);