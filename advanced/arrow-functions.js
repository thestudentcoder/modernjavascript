const square = (num) => Math.pow(num, 2);
console.log(square(3));

const people = [{
    name: 'Andrew',
    age: 27
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}];

const under30 = people.filter(person => person.age < 30);
console.log(under30);

// Challenge area
// Find the person with age 22
// Print the person's name
const age22 = people.filter(person => person.age === 22);
console.log(age22);

// Arrow function do not bind their this value

const car = {
    color: 'Red',
    getSummary: function () {
        return `The car is ${this.color}`;
    },
    getSummary2:  () => {
        // undefined
        return `The car is ${this.color}`;
    },
    getSummary3() {
        // alternative way of declaring methods
        return `The car is ${this.color}`;
    }
}

console.log(car.getSummary());
console.log(car.getSummary2());
console.log(car.getSummary3());

