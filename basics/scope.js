// lexical scoping (static scope)
// global scope - defined outside of all code blocks
// local scope

let varOne = 'varOne';

if (true) {
    console.log(varOne);
    // varTwo is local within this block
    let varTwo = 'varTwo';
    console.log(varTwo);
}

