// 3- [REFATORAÇÃO] Dado um array de nomes, faça um programa
// que imprima na tela todos os nomes (na mesma linha).
// Os valores de entrada serão:
//     Array;
// Exemplo de Entrada:
//     ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata']
// Exemplo de Saída:
//     Angela, Rosa, Ticiana, Carla, Renata

const names = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];
let print = "";

for (let i = 0; i < names.length; i++) {
    print += names[i];
    if (i < names.length - 2) {
        print += ", "
    } else if (i < names.length - 1) {
        print += " e "
    }
}
console.log(`${print}`);