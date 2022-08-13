// 2. Crie uma função que recebe um objeto usuário e imprime se
// ele é maior de idade, utilize os conhecimentos da aula para
// melhorar o código.
// Exemplo Entrada:
//     { name: ‘Juca’, idade: 28 }
// Exemplo Saída:
//     Maior de idade

const users = [
    {name: 'Lucas', age: 21},
    {name: 'Cleber', age: 34},
    {name: 'Camila', age: 17}
]

function checkAge({age}) {
    return (age < 18) ? 'menor de idade' : 'maior de idade';
} 

for(let i = 0; i < users.length; i++) {
    console.log(`O usuário ${users[i].name} é ${checkAge(users[i])}`)
}

// Não funcionou essa função que tentei fazer
// function showResult(users, checkAge) {
//     for(let i = 0; i < users.length; i++) {
//         return `O usuário ${users[i].name} é ${checkAge(users[i])}`
//     }
// }
// console.log(showResult());