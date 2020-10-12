// Scope tree

// Global (name)
    // local
        // local
    // local

//

let name = 'Shepard';

if (true) {
    if (true) {
        // variable hiding
        let name = 'Bob';
        console.log(name);      // JavaScript will look for name in the local scope then go up the scope tree
                                // all the way up to the root of the scope tree
    }
}

if (true) {
    console.log(name);      // look in local first then propagate up the tree to the root
}