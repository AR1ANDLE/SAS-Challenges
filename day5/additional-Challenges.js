// Count even and odd numbers

let numbers = [4, 7, 2, 9, 10, 13]

function countOddEven(arr) {
    let pair = 0
    let impair = 0
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {pair += 1}
        else (impair += 1)
    }
console.log(pair, impair)
}

countOddEven(numbers)

console.log('----------------------------------------------')

// Find largest

function findLargest(arr) {
    let max = arr[0]
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}

console.log(findLargest(numbers))

console.log('----------------------------------------------')

// Count a character inside a string 

let text = 'Javascriptaaa'

function countChar(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === char) {count++}
    }
    return count
}

console.log(countChar(text, 'a'))

console.log('----------------------------------------------')

// Reverse a String Manually

function rev(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev;
}

console.log(rev('Hello'))

console.log('----------------------------------------------')

// Count Vowels

function vowels(str) {
    let vow = ['a', 'e', 'u', 'i', 'o'] 
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vow.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(vowels('HEllo World'))

console.log('----------------------------------------------')

// Detect a Palindrome

function isPalindrome(str) {
    let res = 'Palindrome'

    for (let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
            res = 'Not Palindrome'
            break;
        }
    }
    return res;
}

console.log(isPalindrome('Level'))

console.log('----------------------------------------------')

// Second Largest Number

function fetchSecond(arr, max) {
    let secondMax = arr[arr.length-1]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i]
        }
    }
    return secondMax;
}


function secondLarge(arr, callback) {
    let max = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return callback(arr, max)
}

console.log(secondLarge([1,52,57,89,874,12,5,90], fetchSecond))

console.log('----------------------------------------------')

// Remove Duplicates Manually

let nums = [1, 2, 2, 3, 1, 4, 3];
