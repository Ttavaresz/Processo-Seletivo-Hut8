// Métodos de String:
// slice;
// substring;
// substr;
// replace;
// toUpperCase;
// toLowerCase;
// trim;
// padStart;
// padEnd;
// split.

// // slice (fatiar) 
// // inicio e fim (ultimo valor n pega)
// let name = "Lucas Dutra Tavares";
// let partOne = name.slice(0, 5); // Pega do 0 até o 5
// console.log(partOne);
// let partTwo = name.slice(0, -7); // Pega do 0 e n pega os ultimos 7 caractéres
// console.log(partTwo);

// // substring -- Pega entre dois valores setados no ()
// let name = "Lucas Dutra Tavares";
// let partOne = name.substring(0, 5);
// console.log(partOne);

// // substr -- inicio e a quantidade
// let name = "Lucas Dutra Tavares";
// let partOne = name.substr(0, 5);
// console.log(partOne); // olhar

// // replace (substituir) 
// let trabalho = "w3b d3v3lop3r";
// let result = trabalho.replace("3", "e"); // substitui a primeira ocorrencia
// console.log(result);
// let resultTwo = trabalho.replaceAll("3", "e"); // substitui tudo
// console.log(resultTwo);
// // Expressões regulares (Regex)
// //Com as Regex é possivel criar máscaras de formatação
// let frase = "Amanhã é dia das Mulheres, feliz dia das mulheres para vocês mulheres.";
// // let resultThree = frase.replace("mulheres", "meninas"); // Ignora o primeiro pq tem M maiusculo
// let resultThree = frase.replace(/mulheres/gi, "meninas"); // i = maiusculo e minusculo; g = para tudo(all)
// console.log(resultThree);

// // toUpperCase and toLowerCase
// let name = "LuCaS dUTra tAvAres";
// let upperLucas = name.toUpperCase();
// console.log(upperLucas);
// let lowerLucas = upperLucas.toLowerCase();
// console.log(lowerLucas);
// console.log(name[0].toUpperCase() + lowerLucas.slice(1));

// // trim (remove espaços do inicio(start) e final(end))
// let name = "         Lucas       Tavares        ";
// let changeOne = name.trim();
// console.log(changeOne);

// // padStart padEnd (inserir informações no final ou inicio de uma string)
// let name = "uca";
// // let changeName = name.padStart(4, "L");
// // console.log(changeName);
// // console.log(changeName.padEnd(5, "s"));
// // OU
// let changeName = name.padStart(name.length + 1, "L").padEnd(name.length + 2, "s");
// console.log(changeName);
// let changeText = changeName.padStart(changeName.length + "Meu nome é ".length, "Meu nome é ");
// console.log(changeText);


// split (quebra onde estiver o caractere que quer quebrar)
let name = "Lucas Dutra Tavares";
let result = name.split(" ");
console.log(result); // Printa [ 'Lucas', 'Dutra', 'Tavares' ]
let resultTwo = name.split("a");
console.log(resultTwo); // Printa [ 'Luc', 's Dutr', ' T', 'v', 'res' ]
