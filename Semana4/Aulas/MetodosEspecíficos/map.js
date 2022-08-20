// Métodos Específicos de Array
// forEach
//  => map
// filter
// find
// every
// some
// sort
// reduce

// Exemplo 1
let values = [10, 5, 3, 7, 2, 6, 2];

const newValues = values.map((element, index, array) => {
    return element * 10;
    }
);
console.log(values);
console.log(newValues);

// Exemplo 2
let names = [
    "Barros",
    "João",
    "Beatriz",
    "Mariane",
    "Matheus",
    "Miguel",
    "Felipe",
]
const newNames = names.map(element => {
        return {
            name: element,
            cidade: "Porto Alegre"
        }
    }
)

console.log(names);
console.log(newNames);