// Length & Uppercase

let phrase = 'coding in Youcode'

console.log(phrase.length)
console.log(phrase.toUpperCase())

// First & Last Char

function firstLast(str) {
    console.log(str.at(0))
    console.log(str.at(-1))
}

firstLast('Moughit')

// Word Replacer 

phrase = 'I love apples'

console.log(phrase.replace('apples', 'bananas'))

// Palindrome Check

function isPalindrome(str) {
    console.log(`False : "${str}" is not the same as "${str.split('').reverse().join('')}"`)
    return str == str.split('').reverse().join('')
}

console.log(isPalindrome('hello'))

// String Reversal

function rev(str) {
    let revStr = '';
    if (str.length > 0) {
        for(let i = str.length - 1; i >= 0; i--) {
            revStr += str[i]
        }
    }
    return revStr;
}

console.log(rev("hello"))

// Character Counter

function countChar(str, char) {
    let charCount = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == char) {
            charCount += 1
        }
    }
    return charCount
}

console.log(countChar('bbbbb', 'b'))

// Capitalize Words

function Capit(str) {
    let words = str.split(' ');
    let word = '';
    let res = "";
    for (let i = 0; i < words.length; i++) {
        word = Array.from(words[i])
        word[0] = word[0].toUpperCase()
        res += word.join('') + ' '
    }
    return res
}
console.log(Capit('testing uppercase word'))

// String Compressor

function strCompress(str){
    let res = "";
    let count = 1;
    for(i = 0; i <= str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        }
        else{
            res += str[i] + count
        }
    }
    console.log(res)
    count = 1;
}

strCompress('rrrrr')

// Anagram Checker

function anaCheck(str1, str2) {
    const srt1 = str1.split("").sort().join('');
    const srt2 = str2.split("").sort().join('');
    return srt1 == srt2
}
console.log(anaCheck('listen', 'silent'))

