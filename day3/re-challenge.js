let str = "coding in the library"

console.log(str.length)
console.log(str.toUpperCase())

///////////////////////////////////////////////

function firstLast(str) {
    console.log(str[0])
    console.log(str[str.length - 1])
}

firstLast(str)

///////////////////////////////////////////////

str = 'I love apples'
console.log(str.replace('apples', 'bananas'))

///////////////////////////////////////////////

function palindrome(str) {
    return str === str.split('').reverse().join('')
}

console.log(palindrome('Mom'))

///////////////////////////////////////////////

function strRev(str) {
    let reverse = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse;
}

///////////////////////////////////////////////

function countChar(str, char) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count += 1;
        }
    }
    return count;
}

///////////////////////////////////////////////

function capitalize(str) {
    let words = str.split(' ') // spliting the string 
    let word = '' // empty var where we will store the chars
    let res = "" // final result
    for (let i  = 0; i < words.length; i++) { // loop through each word
        word = Array.from(words[i]) // making an array from chars
        word[0] = word[0].toUpperCase() // uppercase the firt character of each word
        res += word.join('') + ' ' // turning the char array back to str with join and spaces in between
    }
    return res;
}
console.log(capitalize('hello world this is a test for capital'))

////////////////////////////////////////////////

function strCompress(str){
    let res = "";
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]){
            count++;
        } else {
            res += str[i] + count
        }
    }
    return res;
}

strCompress('aaabbbbbcccc')

////////////////////////////////////////////////

function isAnagram(str1, str2) {
    return str1.toUpperCase().split('').sort().join('') == str2.toUpperCase().split('').sort().join('')
}

console.log(isAnagram('Silent', 'listen'))

////////////////////////////////////////////////

function toCappital(str) {
    let words = str.split(' ')
    let word = ''
    let res = "";

    for(let i = 0; i < words.length; i++) {
        word = Array.from(words[i])
        word[0] = word[0].toUpperCase();
        res += word.join('') + ' '
    }
    console.log(res)
}

toCappital('Helloworld how is this not capital')

////////////////////////////////////////////////

function capLetter(str) {
    let words = str.toLowerCase().split(' ');
    let word = '';
    let res = '';
    let i = 0;

    while(i < words.length) {
        word = Array.from(words[i])
        word[0] = word[0].toUpperCase()
        res += word.join('') + ' '
        i++
    }
    return res;
}

console.log(capLetter('mouGhit is my Name'))