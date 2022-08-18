// 7 - Escreva um programa que tenha como entrada um valor.
// Este valor é aquantidade de linhas de saída que serão
// apresentadas na execução do programa.

let lines = 7;
let cont = 1;

for (let i = 0; i < lines; i++) {
    console.log(cont + (cont++) + (cont++) + " PUM");
}