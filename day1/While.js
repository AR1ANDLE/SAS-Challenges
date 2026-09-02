// Loops with while

let i = 0; // assign a variable to take control of the loop

while (i < 10) // condition that breaks the loops once it becomes false 
{
    console.log(i) // code block
    i++; // variable incrementation
}

console.log('--------------------------------------------')

// loops with do...while

i = 0; // reseting the variable value before starting the new loop

do {
    console.log(`Counting : ${i}`) // do the code block before checking the condition
    i++; // incrementation
} while (i < 10) // condition that breaks the loop when it's false

console.log('--------------------------------------------')

// Key Diffrences

// do...while loop run the code block at least once. (Exit controlled)
// do...while loop have always at least one iteration