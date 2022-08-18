// 2. Crie uma função que recebe um objeto usuário e imprime se
// ele é maior de idade, utilize os conhecimentos da aula para
// melhorar o código.
// Exemplo Entrada:
//     { name: ‘Juca’, idade: 28 }
// Exemplo Saída:
//     Maior de idade

const user = {
    name: 'Lucas',
    age: 21
}

function checkAge({age}) {
    return (age < 18) ? 'menor de idade' : 'maior de idade';
} 

console.log(`O usuário ${user.name} é ${checkAge(user)}`);