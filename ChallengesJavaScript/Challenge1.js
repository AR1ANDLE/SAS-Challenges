
function afficherPairs(n) {
    for (let i = 1 ; i <= n; i++) {   
        if (i % 2 == 0) {
            console.log(i)
        }
}}

afficherPairs(10)

console.log('----------------------------------------')

// CHallenge 2 : Compter les résultat pairs

function compterPairs(nbr1, nbr2) {
    let count = 0;
    for (let i = nbr1; i <= nbr2; i++) {
        if  ((nbr1 + nbr2 + i) % 2 == 0) {
            count += 1
        }
    }
    return count;
}

console.log(compterPairs(2, 6))

console.log('----------------------------------------')

// challenge 3 : triangle

function construireTriangle(taille) {
    for (i = 0; i < taille; i++) {
        let grid = '';
        for(j = 0; j <= i; j++) {
            grid += j
        }
        console.log(grid)
    }
}

construireTriangle(5)


console.log('-------------------------------------------')

// Calculatrice avec callback

function calculer(nbr1, nbr2, callback) {
    return callback(nbr1, nbr2)
}

function addition(a, b) {
    return a + b;
}
function multiplication(a, b) {
    return a * b;
}
function soustraction(a, b) {
    return a - b;
}

console.log(calculer(10, 5, soustraction))

console.log('-------------------------------------------')

calculer(10, 5, function(a, b) {
    return a - b;
})

calculer(10, 5, (a, b) => {
    return a - b
})