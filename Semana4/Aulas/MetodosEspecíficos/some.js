// Métodos Específicos de Array
// forEach
// map
// filter
// find
// every
//  => some
// sort
// reduce

// Exemplo 01 (Percorre até retornar um booleano correspondente)
const users = [
    { name: "João", role: "Professor", id: 1 },
    { name: "Juca", role: "Estudante", id: 3 },
    { name: "Márcia", role: "Estudante", id: 4 },
    { name: "Pedro", role: "Estudante", id: 5 },
    { name: "Matheus", role: "Professor", id: 2 },
    { name: "Júlia", role: "Estudante", id: 6 },
]

const usersExist = users.some(element => element.role === "Estudante");
console.log(usersExist);