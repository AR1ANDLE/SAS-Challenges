function isEmpty(str) {
    let empty = true
        for (let i = 0; i < str.length ; i++) {
            if (!(str[i] == '' || str[i] == ' ')) {
                empty = false
            }
        }
    return empty;
}
console.log(isEmpty('hello'))

////////////////////////////////////////////////

const add = (a, b) => {
    return a + b
}

const substract = (a, b) => {
    return a - b
}

function calculate(a, b, op) {
    return op(a, b)
}

console.log(calculate(5,6, substract))
console.log(calculate(5,6, add))

///////////////////////////////////////////////////

function createMultiplier(n) {
    return (num) => num * n
}

const double = createMultiplier(2)
console.log(double(5))

//////////////////////////////////////////////////

function isOdd(n) {
    return (n % 2 !== 0)
}

function filterOddNumbers(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} is odd : ${callback(arr[i])}`)
    }
}

filterOddNumbers([1,2,3,4,5,6,7,8,9], isOdd)