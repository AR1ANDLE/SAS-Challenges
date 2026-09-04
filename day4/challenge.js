// Array Basics

colors = ['black', 'red', 'green']
colors.shift();
colors.push('Black')
console.log(colors)

// Array Sum

nums = [5, 8, 5, 1, 13]
sum = 0
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
}
console.log(sum)

// Element Existence

function check(arr, val) {
    let exist = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            exist = true
        }
    }
    return exist;
}
console.log(check([5,3,2,1], 3))

// Find Maximum

function Max(arr) {
    let largest;
    for ( let i = 0; i < arr.length; i++) {
        largest = arr[i]
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}
console.log(Max([1, 5, 78, 13, 97]))

// Remove Duplicates

function rDuplicates(arr) {
    let sorted = [];
    arr.sort((a,b) => a - b)
    for(let i  = 0; i < arr.length; i++) {
        if(arr[i] != arr[i + 1]) {
            sorted.push(arr[i])
        }
    }
    console.log(sorted)
}

rDuplicates([1,21,1,1,3,5,7,8,9,13])

// Custom Reverse

function revArray(arr) {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        reversed.unshift(arr[i])
    }
    return reversed;
}

console.log(revArray([1,2,3]))

// flatten 2d Array


function flatten(arr) {
    let flattend = [];
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            flattend.push(arr[i][j])
        }
    }
    return flattend
}
console.log(flatten([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

// Diagonal Sum
// Given a 3x3 2D array of numbers, calculate the sum of the primary diagonal (top-left to bottom-right).

function diagSum(arr) {
    let newArr = flatten(arr)
    let sum = 0
    let i = 0
    while(i < newArr.length) {
        sum += newArr[i]
        i += 4
    }
    return sum;
}

console.log(diagSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

// Matrix Transposition: Write a function that takes a 2D array and swaps its rows with its columns.

function arrSwap(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        const row = [];
        for(let j = 0; j < arr.length; j++) {
            row.push(arr[j][i])
        }
        newArr.push(row)
    }
    return newArr
}

console.log(arrSwap([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
