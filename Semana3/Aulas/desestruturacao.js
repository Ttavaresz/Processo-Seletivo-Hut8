// Desestruturação de Objetos
const user = {
    name: 'Lucas',
    age: 21,
    cpf: 02143,
    cnh: "AB",
    historico_escolar: {icc: 10, aed: 7, lf: 2}
}

// console.log(user.name);
// console.log(user.age);

// const {name, age} = user;
// console.log(name);
// console.log(age);

// const {historico_escolar: {icc}} = user;
// console.log(icc);

// // Desestruturação de Array
const names = ["Lucas", "Rafaela", "Aline", "João"];
// console.log(names[0]);

const [primeiroName, , terceiroName] = names;
// console.log(primeiroName);
// console.log(terceiroName);
// console.log(primeiroName + " " + terceiroName);
// console.log(`${primeiroName}, ${terceiroName}`);


// // Desestruturacao como parâmetro
// const getName = ({name}) => {
//     return name;  // Como tem um comando só, pode usar retorno implicito
// }

const getName = ({name}) => name;
// console.log(getName(user));

const getPrimeiraPosicao = ([primeira]) => primeira;
// console.log(getPrimeiraPosicao(names));

// TROCA DE VALORES POR MEIO DA DESESTRUTURAÇÃO
let valueOne = 50;
let valueTwo = 70;

// console.log("Valor 1: " + valueOne);
// console.log(`Valor 2: ${valueTwo}`);

[valueOne, valueTwo] = [valueTwo, valueOne];

// console.log("Valor 1: " + valueOne);
// console.log(`Valor 2: ${valueTwo}`);

// Mudar a variável para fazer a desestruturação
const {age: idade} = user;
console.log(idade);