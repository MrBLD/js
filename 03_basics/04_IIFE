// Immediately Invoked Function Expressions (IIFE):: to immediately execute
// we use iife to protect from pollution from global space::whatever we are declaring in fn gets polluted from global scope

// iife doesnt know when to end scope hence add a ';'

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed or simple
    console.log(`DB CONNECTED TWO ${name}`);
} )('Bhaskar')