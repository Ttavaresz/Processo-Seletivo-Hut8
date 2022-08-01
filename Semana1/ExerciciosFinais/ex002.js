function checkCategory(age) {
    if (age >= 5 && age <= 7) {
        console.log("A categoria do jogador é Infantil A");
    } else if (age >= 8 && age <= 10) {
        console.log("A categoria do jogador é Infantil B");
    } else if (age >= 11 && age <= 13) {
        console.log("A categoria do jogador é Juvenil A");
    } else if (age >= 14 && age <= 17) {
        console.log("A categoria do jogador é Juvenil B");
    } else if (age >= 18) {
        console.log("A categoria do jogador é Adulto");
    } else {
        console.log("A idade não é permitida");
    }
}

const prompt = require('prompt-sync') ();

let age = prompt("Digite a idade do nadador: ");

checkCategory(age);