const x = -3;
const y = 0;

let xb;
let yb;

if (x > 0) {
    xb = true;
} else {
    xb = false;
}

if (y > 0) {
    yb = true;
} else {
    yb = false;
}

const value = (xb || yb);

if (value == true) {
    console.log("Pelo menos um dos valores é positivo.");
} else {
    console.log("Nenhum dos valores é positivo.");
}