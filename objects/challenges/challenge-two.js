// Create a function that returns an object that contains F, C, and K
// Takes in F and returns an object that returns all 3 values

const tempConvert = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    let kelvin = celsius + 459.67 * (5 / 9);

    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

let tempConvert1 = tempConvert(50);
let tempConvert2 = tempConvert(80);

console.log(tempConvert1);
console.log(tempConvert2);