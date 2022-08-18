// 1. Crie uma função que recebe uma string (com quatro possibilidades:
// “soma”,“subtrai”, “divide”, “multiplica”) e dois números. A função deve 
// retornar a operação realizada informada pela string nos dois números.
// Exemplo Entrada:
//     myFunction(‘soma’)(3)(5)
// Exemplo Saída:
//     8

const myFunction = (choiceOp) => {
    return (choiceOp === 'soma') ? 
        function sum (numOne) {
            return function (numTwo) {
                return numOne + numTwo;
            }
        } : (choiceOp === 'subtrai') ?
        function subtract (numOne) {
            return function (numTwo) {
                return numOne - numTwo;
            }
        } : (choiceOp === 'divide') ?
        function divide (numOne) {
            return function (numTwo) {
                return numOne / numTwo;
            }
        } : (choiceOp === 'multiplica') ?
        function multiplica (numOne) {
            return function (numTwo) {
                return numOne * numTwo;
            }
        } : 'Opção inválida';
}

console.log(myFunction('soma')(3)(5));