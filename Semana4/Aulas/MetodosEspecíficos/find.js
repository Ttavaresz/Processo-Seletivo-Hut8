// Métodos Específicos de Array
// forEach
// map
// filter
//  => find
// every
// some
// sort
// reduce

// Exemplo 01 
// Retorna o elemento buscado APENAS 1
let values = [10, 5, 3, 7, 2, 6, 2];
let busca = 10;

const response = values.find(element => element ===busca);
console.log(response);
// return (response != undefined) ? console.log(`O elemento ${response} foi encontrado`) : console.log("O elemento nao foi encontrado");
if (response != undefined) {
    console.log(`O elemento ${response} foi encontrado`);
} else {
    console.log("O elemento nao foi encontrado");
}

// Exemplo 02
const users = [
    { name: "João", role: "Professor", id: 1 },
    { name: "Juca", role: "Estudante", id: 3 },
    { name: "Márcia", role: "Estudante", id: 4 },
    { name: "Pedro", role: "Estudante", id: 5 },
    { name: "Matheus", role: "Professor", id: 2 },
    { name: "Júlia", role: "Estudante", id: 6 },
]

console.log(users.find(elem => elem.id === 3)) // Encontra apenas o primeiro e PARA