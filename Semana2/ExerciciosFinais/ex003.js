// 3. Levando em consideração o array [6, 21, 9, 2, 50, 98, 1]
// crie uma função que mostra o maior numero da lista

let array = [6, 21, 9, 2, 50, 98, 1];
let larger;

function checkLarger() {
    larger = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > larger) {
        larger = array[i];
        }
    }
}

checkLarger();
console.log(`O ${larger} é maior número do array = [${array}].`);