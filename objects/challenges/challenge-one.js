// Create a Person object and generate a string based on that object
const person = {
    firstName: 'John',
    lastName: 'Shepard',
    age: 27,
    location: 'The Normandy'
}
person.age++;
console.log(`${person.firstName} ${person.lastName}, ${person.age}, at ${person.location}`);