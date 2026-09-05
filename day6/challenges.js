// Linear Search Implementation

console.log('-----------------------------------')

function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == target) { return i;}
    }
    return -1;
}

console.log(linearSearch([0,5,1,4,2,8,4,13], 5))

console.log('-----------------------------------')

// Find Minimum Index

function Minimum(arr) {
    let tmp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (tmp > arr[i]) {
            tmp = arr[i]
        }
    }
    return tmp;
}
console.log(Minimum([1,0,-15,5,18,98,-2]))

console.log('-----------------------------------')

// Count Occurrences Search

function Occurs(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            count++
        }
    }
    return count;
}

console.log(Occurs([1, 2, 3, 4, 5, 8, 9, 1, 1, 1], 1))

console.log('-----------------------------------')

// Bubble Sort

function bubble(arr) {
    let tmp;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }

    return arr;
}

console.log(bubble([0,8,4,1,2,96,75,13]))

console.log('-----------------------------------')

// Selection Sort

function selection(arr) {
    let tmp;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr;
}

console.log(selection([0,8,4,1,2,96,75,13]))

console.log('-----------------------------------')

// Sort Strings

function sortString(arr) {
    let tmp

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if (arr[i].localeCompare(arr[j]) > 0) {
                tmp = arr[i]
                arr[i] = arr[j]
                arr[j] = tmp
            }
        }
    }
    return arr
}

console.log(sortString(['helle', 'a', 'z', 'Hello']))