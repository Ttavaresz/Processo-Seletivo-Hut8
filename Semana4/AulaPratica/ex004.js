// 4- [REFATORAÇÃO] Crie um algoritmo que tem como entrada um array
// de notas, e imprime no console a média aritmética dessas notas.
// OBS: Para melhorar a resolução desse problema, monte um programa 
// que retorna a média aritmética independente do tamanho do array.

// Exemplo Entrada:
// [6, 8, 7]

const grade = [6, 8, 7, 10];
let sum = 0;

let media = af => {
    grade.forEach(num => sum += num);
    return sum / grade.length;
}
console.log(media(grade));