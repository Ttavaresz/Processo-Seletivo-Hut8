// 3 - Dado um array de nomes, faça um programa que imprima na
// tela todos os nomes (na mesma linha).

let array = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];
let print = ""

console.log(array);

for (let i = 0; i < array.length; i++) {
    print += array[i];
    if (i < array.length - 1) {
        print += ", "
    }
}

console.log(print);