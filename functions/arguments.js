// function with default values
let add = function (a = 0,b = 1) {
    return a + b;
}

let result = add();
console.log(result);

// template string to inject JavaScript variable using  ${ }
console.log(`Your tip is ${result} dollars.`);