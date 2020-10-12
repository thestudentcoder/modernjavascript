// Prototypal inheritance
// myPerson -> Person.prototype -> Object.prototype -> null

// new style of class definition
class PersonClass {
    constructor (firstName, lastName, age, likes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }
    getBio () {
        let bio = `${this.firstName} is ${this.age}`
        // this is bound by function, but is not bound in arrow function
        this.likes.forEach((like) => bio += ` ${this.firstName} likes ${like}. `)
        return bio;
    }
    // the word set followed by the name of the property
    // fullName doesn't rexist, but is a computed property
    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// subclasses using extends
class Employee extends PersonClass {
    constructor(firstName, lastName, id) {
        super(firstName, lastName);
        this.id = id;
    }
    get() {
        // overridden method
        return `Employee id; ${this.id}`;
    }
}

const myPerson = new PersonClass('Jon', 'Shepard', 27, ['N7', 'Normandy']);
console.log(myPerson);
console.log(myPerson.getBio());

const myEmployee = new Employee('Bob', 'Smith', 12345);
// use fullName setter
myEmployee.fullName = 'Jon Smith';
console.log(myEmployee);
console.log(myEmployee.fullName);


// old way

// constructor function
const Person = function (firstName, lastName, age, likes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
}

// prototypal inheritance
// objects shared a prototype
// if you want your objects and instances to share a method define it in the prototype
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}`
    // this is bound by function, but is not bound in arrow function
    this.likes.forEach((like) => bio += ` ${this.firstName} likes ${like}. `)
    return bio;
}
const me = new Person('Alexis', 'Turner', 27, ['biking', 'teaching']);
// shadowing a method
me.getBio = function () {
    return 'this is fake';
}
console.log(me.getBio());

// add a property (static data)
// doesn't serve much purpose
Person.prototype.location = 'Thailand';
console.log(me.location);

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
}

me.setName('Alexis Turner');
console.log(me);



