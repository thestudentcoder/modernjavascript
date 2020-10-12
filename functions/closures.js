// Example of a closure
const myFunction = () => {
    const message = 'This is my message'
    const printMessage = () => {
        console.log(message);
    }
    return printMessage;
}

const myPrintMessage = myFunction();
myPrintMessage();

// myPrintMessage still has access to the message variable from the parent function.
// This is a closure.  A closure is the combination of a function with the lexiccal
// scope in which it was defined.  In this case, when pinrtMessage was defined it had
// access to message.  So it will always have access to message.

// other closur exampes
// using closures to creat a private variablee in JavaScript
// which is a variable that is accessible and modifieable through
// a speciffic set of rules

// create a function
const createCounter = () => {
    // store count
    let count = 0;

    // return a set of methods that will allow interactions with count
    // in very specific ways
    // returning an object with methods
    return {
        increment() {
            count++
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    }
}

// store the object that is returned in the variable counter
// the only way to increment count is to use the methods returned

// we can create a variable or set of variables that are only modifiable
// through the interface you provide
const counter = createCounter();

counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.get());

// More examples
// Adder

// a function that returns another function
// this uses closure and currying - transforming a single functions to a subset of functions that
// take multiple arguments
// useful when we want to generate functions with a base value
const createAdder = (a) => {
    return (b) => {
        return a + b;
    }
}

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(-90));

// Tipper

// 1. Create createTipper which takes in the base tip (.15 for 15% tip)
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate afew functions for different percentages
// 4. Use the generated functions to calculate tips and print them

const createTipper = (tip) => {
    return (amount) => {
        return tip * amount;
    }
}

// return a function that takes in an amount argument
const tip15 = createTipper(.15);
console.log(tip15(100));
