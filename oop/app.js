// product -> Object.prototype -> null
// literal object this is why there is no new operator or use of a constructor
const product = {
    name: 'Influence'
}

// hasOwnProperty
console.log(product.hasOwnProperty('name'));
// hasOwnProperty checks if object has a property on itself
// located in Object.prototype
console.log(product.hasOwnProperty('hasOwnProperty'));