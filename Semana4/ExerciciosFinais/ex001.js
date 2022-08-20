// 1. Através da string “Maria, Paulo, Moisés, Joel, Ana”,
// imprima todos os nomes um em cada linha no console

let string = "Maria, Paulo, Moisés, Joel, Ana";
let result = string.split(", ");
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}