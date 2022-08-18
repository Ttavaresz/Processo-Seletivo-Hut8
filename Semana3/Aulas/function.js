// // Função para somar 2 valores
// function soma(value1, value2) {
//     return value1 + value2;
// }

// console.log(soma(10, 9));

// //Função anônima (Anônima porque não possui nome)
// const sum = function (value1, value2) {
//     return value1 + value2;
// } 

// console.log(sum);
// console.log(sum(10, 11));

// // Arrow function
// const somar = (valueOne, valueTwo) => {
//     return valueOne + valueTwo;
// }

// // Arrow function com retorno iplícito
// const somar = (valueOne, valueTwo) => valueOne + valueTwo;

// console.log(somar(13, 12));

// exemplo de uso
const maiorIdade = (idade) => idade >= 18;

if(maiorIdade(17)) { // Com 17 da falso, então vai para o else, se for 18 ou maior, fica no if mesmo
    console.log("É maior de idade");
} else {
    console.log("Não é maior de idade");
}

// Retornar uma função
// Pouco utilizado no momento, fará mais sentido quando começar o React
function somaa(number1) {
    return function (number2) {
        return number1 + number2;
    }
}
console.log(somaa(14)(27));