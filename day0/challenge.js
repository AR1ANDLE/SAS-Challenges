// Age logger

let age = 21;
console.log(`You are ${age} years old.`)

// Temperature Check

let temperature = 30;
temperature > 30 ? console.log("It's hot outside!") : console.log("The weather is nice.")

// Even or Odd

let number = 50;

if (number % 2 == 0) {
    console.log("The number is even.")
} else {
    console.log("The number is odd.")
}

// Grading System

let score = 90

if (score >= 90) {console.log("A")}
else if (score >= 80) {console.log("B")}
else if (score >= 70) {console.log("C")}
else {console.log("F")}

// Max of Three

let a = 10
let b = 60
let c = 30
console.log(Math.max(a, b, c))

// Leap year checker

let year = 2018;

if (year % 4 == 0 && year % 4 != 0 || year % 400 == 0) {
    console.log(true)
} else {
    console.log(false)
}

// Basic calculator

let num1 = 50
let num2 = 47
let op = ""

switch (op) {
    case '+' :
        console.log(num1 + num2)
        break;
    case '-' :
        console.log(num1 - num2)
        break;
    case '+' :
        console.log(num1 + num2)
        break;
    case '-' :
        console.log(num1 - num2)
        break;
    case '/' :
        console.log(num1 / num2)
        break;
    case '*' :
        console.log(num1 * num2)
        break;
    default:
        console.log("Enter a valid operator")
}

// Valid Triangle

let arch = 16;
let beta = 18;
let base = 38;

if (arch + beta + base == 180 && arch > 0 && beta > 0 && base > 0) {
    console.log("Valid Triangle")
} else {
    console.log("Not a Triangle")
}

// BMI Calculator

let weight = 58
let height = 177
let BMI = weight / (height * height)

if (BMI < 18.5) {console.log('Underweight')}
if (BMI >= 18.5 && BMI <= 24.9) {console.log('normal')}
if (BMI >= 25) {console.log('Overweight')}