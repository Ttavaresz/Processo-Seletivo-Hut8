/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado, imprimindo o valor final no console.
Código Condição de pagamento :
1 - À vista em dinheiro ou cheque, recebe 10% de desconto
2 - À vista no cartão de crédito, recebe 15% de desconto
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Em três vezes, preço normal de etiqueta mais juros de 10%
*/

const prompt = require('prompt-sync') ();

let precoEtiqueta = parseInt(prompt("Digite o valor do produto: "));

console.log("\nEscolha a forma de pagamento:");
console.log("1 - À vista em dinheiro ou cheque, recebe 10% de desconto");
console.log("2 - À vista no cartão de crédito, recebe 15% de desconto");
console.log("3 - Em duas vezes, preço normal de etiqueta sem juros");
console.log("4 - Em três vezes, preço normal de etiqueta mais juros de 10%\n");

let payment = prompt("Digite a opção desejada: ");
switch (parseInt(payment)) {
    case 1:
        console.log("À vista em dinheiro ou cheque, recebe 10% de desconto");
        precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
        console.log("O valor final do produto é: " + precoFinal);
        break;
    case 2:
        console.log("À vista no cartão de crédito, recebe 15% de desconto");
        precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
        console.log("O valor final do produto é: " + precoFinal);
        break;
    case 3:
        console.log("Em duas vezes, preço normal de etiqueta sem juros");
        precoFinal = precoEtiqueta;
        console.log("O valor final do produto é: " + precoFinal);
        break;
    case 4:
        console.log("Em três vezes, preço normal de etiqueta mais juros de 10%");
        precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
        console.log("O valor final do produto é: " + precoFinal);
        break;
}