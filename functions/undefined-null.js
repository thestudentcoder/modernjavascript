// undefined is used to represent the absence of a value
// undefined is a reserved keyword
let name
console.log(name);

if (name === undefined) {
    console.log('name is undefined');
} else {
    console.log(name);
}

// undefined for function arguments
let square = function (num) {
    console.log(num)
}

square();