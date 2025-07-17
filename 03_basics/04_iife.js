// Immediactely Invoked Function Expressions (IIFE)

// named iife
(function chai(){
    console.log('DB CONNECTED');
})();


((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
})('abhi')


