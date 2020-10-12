const products = [];
const product = products[0];

// Truthy - values that resolve to true in a boolean context
// Falsy - values that resolve to false in a boolean context
// Falsy values - false, 0, empty string, null, undefined

if (product !== undefined) {
    console.log('product found');
} else {
    console.log('product not found');
}

// js will try and convert this to a boolean value
if ('resting') {
    console.log('product found');
} else {
    console.log('product not found');
}