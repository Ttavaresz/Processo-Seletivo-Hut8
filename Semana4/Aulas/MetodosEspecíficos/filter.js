// Métodos Específicos de Array
// forEach
// map
//  => filter
// find
// every
// some
// sort
// reduce

// Exemplo 01
// Retorna o elemento buscado (TODOS)
const users = [
    { name: "João", role: "Professor" },
    { name: "Juca", role: "Estudante" },
    { name: "Márcia", role: "Estudante" },
    { name: "Pedro", role: "Professor" },
    { name: "Matheus", role: "Estudante" },
    { name: "Júlia", role: "Estudante" },
]

const newUsers = users.filter(user/*Pode ser o nome que quiser, element por exemplo*/ => user.role == "Professor");

const newUsersTwo = users.filter(user => user.role == "Estudante" && user.name[0] == "M");

console.log(newUsers);
console.log(newUsersTwo);

// Exemplo 02
const numbers = [-8, 12, 76, 100, -230, -7, 120];
const pairs = numbers.filter(num => num % 2 == 0);

console.log(pairs);
console.log(pairs.length);