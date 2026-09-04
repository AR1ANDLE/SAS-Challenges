// String Pooling
function Capit(str) {
    let words = str.split(' ');
    let word = '';
    let res = "";
    for (let i = 0; i < words.length; i++) {
        // can't change string letter individually there for a switch to array is a must
        word = Array.from(words[i]) 
        // Array.from creates an array from a given string
        word[0] = word[0].toUpperCase()
        res += word.join('') + ' '
    }
    return res;
}
console.log(Capit('testing uppercase word'))

// Due to javascript optimization system if diffrent string variables have the same value
// it share an adress to the same value across both also string are immutable and cant be changed so this optimization works safely.
