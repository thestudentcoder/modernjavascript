const tipCalculator = function (tip = .2, total) {
    return tip * total;
}

let result = tipCalculator(.10, 100);
console.log(result);