// 4. Crie uma função que conte quantas palavras existem na frase que
// for passada como parâmetro (dica: utilizem o método split de string)

function wordCounter(text) {
    const word = text.split(" ");
    return word.length;
}

let text = "Ola mundo, estou testando o contador de palavras";

console.log(`A frase tem ${wordCounter(text)} palavras`);