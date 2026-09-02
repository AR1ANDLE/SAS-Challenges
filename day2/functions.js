// Function Declaration

function sayHello(name) {
    return `Hellom ${name}`
}

// function expression named

const pst = function gmtToPst(x) {return (x + 8)}

// anonymous function expression
// function stored in a variable

const gmt = function (x) {return (x - 8)}

// arrow function
// short syntax of functions

const ksa = (x) => {x + 2}

// function constructor

const addition = new Function('x', 'y', "return x + y")

// Call back function

const add = (a, b) => {return a + b}
function Calcul(a, b, op) {
    return op(a, b);
}

// Function this
// ' this ' refers to the object that owns the method
// functions are object methods

const Moughit = {
    firstName: "AbdElmoughit",
    lastName: "Elmoutaouakkil",
    age : 21,
    fullName: function() {
        this.firstName + " " + this.lastName
    }

};

// function closure

// few notes :
// Global variables live long as they don't get delete until closing the app 
// or switching to another as for local variables gets deleted after the function finished

function createMultiplier(multiplier) {
    return (num) => num * multiplier
}
const eight = createMultiplier(6) // allow accessing variable from an outer function scope
console.log(eight(15))

// pass by value (Primitive datatypes)
// Number, String, Boolean, null, undefined, Symbol, BigInt

function age(num) {
   return num = 21; // creating a new copy of the variable
}
let year = 15;
age(year)
console.log(age(year)) // a new copy of the num
console.log(year) // original untouched

// pass by refrence (Objects)
// Object, Array, Function

function obj(o) {
    o.age = 21; // takes copy of the pointer to the memory location
}
let person = {name: 'Someone', age: '33'}

obj(person)
console.log(person.age) // Affected the original