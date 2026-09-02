// Greeting Function

const { callbackify } = require("node:util");

console.log('--------------------------------------------')

function greet(name) {
    console.log(`Hello, ${name}`)
}

greet('Moughit')

console.log('--------------------------------------------')

// Arrow Addition

const add = (a, b) =>  a + b;

console.log(add(1, 3))

console.log('--------------------------------------------')

// Square Function

function square(num) {
    return num**2;
}

console.log(square(5))

console.log('--------------------------------------------')

// Temperature Converter

function clesiusToFahrnheit(c) {
    return (c * 9/5) + 32;
}

console.log(clesiusToFahrnheit(38))

console.log('--------------------------------------------')

// String Emptiness Check

let isEmpty = (str) => {
    let empty = true;
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] == ' ' || str[i] == '')) {
                empty = false;
            }
        }
    return empty;
}
console.log(isEmpty(''))


console.log('--------------------------------------------')

// Factorial Calculator

function factorial(n) {
    if (n == 0) {return 1}
    let i = n - 1;
    while (i > 0) {
        n = n * i
        i--;
    }
    return n
}
console.log(factorial(7))

console.log('--------------------------------------------')

// Math Callback

const substract = (a, b) => a - b

function calculate(a, b, Operation) {
    return Operation(a, b);
}

console.log(calculate(6, 5, substract))
console.log('\n')
console.log(calculate(6, 5, add))

console.log('--------------------------------------------')

// Closure Intro

function createMultiplier(multiplier) {
    return (num) => num * multiplier
}
const six = createMultiplier(6)
console.log(six(15))

console.log('--------------------------------------------')

// Custom Filter Outline

function oddNum(num) {
    return num % 2 !== 0;
}

function filterOddNumbers(arr, Callback) {
        for (i = 0; i < arr.length; i++) {
            console.log(arr[i] + ' : ' + Callback(arr[i]))
        }
}
filterOddNumbers([3,4,56,72], oddNum)