function rockPaperScissorsWinner(player1, player2) {
    if (player1 == player2) {
        return "Empate!"
    }

    return (player1 == 0 && player2 == 1 ||
        player1 == 1 && player2 == 2 ||
        player1 == 2 && player2 == 0 ?
        'Player 1 ganhou!' : 'Player 2 ganhou!'
    )
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