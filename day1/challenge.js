// While Loop Counting

console.log('----------------------------------------')

let i = 1;
while (i <= 20) {
    console.log(i)
    i++
}

console.log('----------------------------------------')

// Sum of First 100 Numbers

let sum = 0;
for (i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)

console.log('----------------------------------------')

// Multiplication

for (i = 1; i <= 10; i++) {console.log(`5 x ${i} = ` + i * 5)}

console.log('----------------------------------------')

// FizzBuzz

for(i = 1; i <= 50; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    }
}

console.log('----------------------------------------')

// Count Vowels

let vowels = 0;
let phrase = 'Coding in House'
for(i = 0; i < phrase.length; i++) {
    switch ( phrase[i] ) {
        case 'a' :
            vowels+= 1
            break;
        case 'i' :
            vowels+= 1
            break;
        case 'e' :
            vowels+= 1
            break;
        case 'o' :
            vowels+= 1
            break;
        case 'u' :
            vowels+= 1
            break;
    }
}
console.log(vowels)

console.log('----------------------------------------')

// Square of Stars

let grid = "";
for (i = 1; i <= 5; i++) {
    for(let j = 1; j <= 5; j++) {
        grid += '*'
    }
    grid += '\n'
}
console.log(grid)

console.log('----------------------------------------')

// Prime Numbers

for (i = 2; i <= 50; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    } 
    if (isPrime) {console.log(i)}
}

console.log('----------------------------------------')

// Right-Angled Triangle

grid = "";
for(i = 5; i >= 0; i--) {
    for (j = i; j >= 0; j--) {
        grid+= '*'
    }
    grid += '\n'
}
console.log(grid)

console.log('----------------------------------------')

// Fibonacci Sequence

let fib1 = 0
let fib2 = 1
let count = 0
for (i = 1; i <= 10; i++) {
    console.log(fib1)
    count = fib1 + fib2;
    fib1 = fib2;
    fib2 = count
}

console.log('----------------------------------------')