// Métodos Específicos de Array
//  => forEach
// map
// filter
// find
// every
// some
// sort
// reduce


// Semelhante ao for

let names = [
    "Barros",
    "João",
    "Beatriz",
    "Mariane",
    "Matheus",
    "Miguel",
    "Felipe",
]

// forEach
// names.forEach((element, index) =>
//     console.log(`Indice: ${index} - Elemento ${element}`) 
// );

let value = names.forEach((element, index) => {
    console.log(`Indice: ${index} - Elemento ${element}`);
    names[index] = "X";
    }
);
console.log(names);
console.log(value);  // foreach sempre retorna undefined.