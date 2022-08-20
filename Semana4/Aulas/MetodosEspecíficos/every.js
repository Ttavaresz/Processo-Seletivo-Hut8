// Métodos Específicos de Array
// forEach
// map
// filter
// find
//  => every
// some
// sort
// reduce

// Exemplo 01 (pode usar para ver se todos os campos estao preenchidos)
// true se todos cumprirem o requisito e falso se nao
const users = [
    { name: "João", role: "Professor", id: 1 },
    { name: "Juca", role: "Estudante", id: 3 },
    { name: "Márcia", role: "Estudante", id: 4 },
    { name: "Pedro", role: "Estudante", id: 5 },
    { name: "Matheus", role: "Professor", id: 2 },
    { name: "Júlia", role: "Estudante", id: 6 },
]

const allUsers = users.every(elem => elem.role === "Professor");
console.log(allUsers);

const usersTwo = [
    { name: "João", role: "Professor", id: 1 },
    { name: "Juca", role: "Professor", id: 3 },
    { name: "Márcia", role: "Professor", id: 4 },
    { name: "Pedro", role: "Professor", id: 5 },
    { name: "Matheus", role: "Professor", id: 2 },
    { name: "Júlia", role: "Professor", id: 6 },
]

const allUsersTwo = usersTwo.every(elem => elem.role === "Professor");
console.log(allUsersTwo);