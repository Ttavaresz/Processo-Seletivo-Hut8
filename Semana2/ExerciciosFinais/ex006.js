// 6. Crie uma função chamada rockPaperScissorsWinner e recebe dois valores como parâmetro.
// Esses dois valores podem ser:
// ● 0: tesoura
// ● 1: papel
// ● 2: pedra
// Construa um algoritmo que recebe esses valores randomicamente e printa na tela qual
// usuário ganhou, se o usuário 1 ou usuário 2

function rockPaperScissorsWinner(player1, player2) {
    if (player1 == player2) {
        return "Empate!"
    }

    if(player1 == 0 && player2 == 1) {
        return "Player 1 ganhou!"
    } else if (player1 == 0 && player2 == 2) {
        return "Player 2 ganhou!"
    } else if (player1 == 1 && player2 == 0) {
        return "Player 2 ganhou!"
    } else if (player1 == 1 && player2 == 2) {
        return "Player 1 ganhou!"
    } else if (player1 == 2 && player2 == 0) {
        return "Player 1 ganhou!"
    } else if (player1 == 2 && player2 == 1) {
        return "Player 2 ganhou!"
    }
}

let player1 = Math.floor(Math.random() * 3);
let player2 = Math.floor(Math.random() * 3);

if (player1 == 0) {
    console.log("Jogador 1 colocou tesoura");
} else if (player1 == 1) {
    console.log("Jogador 1 colocou papel");
} else if (player1 == 2) {
    console.log("Jogador 1 colocou pedra");
}
if (player2 == 0) {
    console.log("Jogador 2 colocou tesoura");
} else if (player2 == 1) {
    console.log("Jogador 2 colocou papel");
} else if (player2 == 2) {
    console.log("Jogador 2 colocou pedra");
}

console.log(rockPaperScissorsWinner(player1, player2));