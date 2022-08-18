// 1- [REFATORAÇÃO] Pegue um valor de entrada e calculeo menor número
// denotas possíveis (cédulas) no qual o valor pode ser decomposto. As
// notas consideradas são de 100, 50, 20, 10, 5, 2 e 1.
// A seguir mostre o valor lido e a relação de notas necessárias.

const notas = [100, 50, 20, 10, 5, 2, 1]; 

const checkMoney = (value) => {
    console.log(value);
    let amount = 0;
    for(let i = 0; i < notas.length; i++) {
        amount = parseInt(value / notas[i]);
        value = value % notas[i];
        console.log(`${amount} nota(s) de R$ ${notas[i]},00`);
    }
}
console.log(checkMoney(576));