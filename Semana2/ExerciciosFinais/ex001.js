// 1. Crie um algoritmo que tem como entrada um array de números e
// imprime no consolea soma dos elementos sendo cada um deles
// multiplicado pelo seu índice.
// Exemplo entrada: [5, 9, 10, 6]
// Exemplo Saída: 47

let elements = [5, 9, 10, 6];
let sum = 0

for (let i = 0; i < elements.length; i++) {
    elements[i] *= i;
    sum += (elements[i]);
}

console.log("Soma dos elementos " + elements + " multiplicados pelos índices = " + sum);