// // join -- junta
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = fruits.join(" - ");
// console.log(result);

// // concat
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruitsTwo = ["Kiwi", "Lemon", "Melon"];
// let result = fruits.concat(fruitsTwo);
// console.log(result);

// // push
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi"); // Insere um elemento ao final do array
// console.log(fruits);

// // pop
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop(); // Retira o ultimo elemento do array
// console.log(fruits);
// console.log(fruits.pop()); // Printa o ultimo valor do array

// // shift
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift(); // Retira o primeiro elemento do array
// console.log(fruits); 
// console.log(fruits.shift()); // Printa o primeiro valor do array

// // unshift // semelhante ao push
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Pera");
// console.log(fruits);

// // slice
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// let result = fruits.slice(1); // retira o numero de strings desejado OU de um valor até outro
// console.log(result); // [ 'Orange', 'Apple', 'Mango' ]
// let resultTwo = fruits.slice(1, 3);
// console.log(resultTwo);  // [ 'Orange', 'Apple' ]

// // splice
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi"); // adiciona a partir do 2 e retira 1 valor do array
// console.log(fruits);

// reverse
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);