// Loops with for

for (let i = 1; i <= 5; i++) { // number of iteration is known
    console.log(`For loop number : ${i}`) // code block
}

console.log('--------------------------------------------')

// Nested for

for (i = 1; i <= 5; i++) {
    for(j = 5; j > i; j--) {
        console.log('The results are : ' + (j - i))
    }
}

console.log('--------------------------------------------')

// Break 

for (i = 0;;i++) {
    console.log(i)
    if (i === 5) {break}
}

console.log('--------------------------------------------')

// labeled break

loop1 : for (i = 1; ;i++) {
    loop2 : for(j = 1; ;j++){
        console.log(i * j)
        if (i * j == 25) {
            console.log()
            break loop1;
        }
    }
}

console.log('--------------------------------------------')

// continue

for (i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}

console.log('--------------------------------------------')

// labeled continue

loop4 : for (i = 2; i <= 50; i++) {
    let status = true;
    loop3 : for (j = 2; j < i; j++) {
        if (j % 2 == 0) {
            continue loop3;
        }
        console.log(j + ' ' + i)
    }
}

console.log('--------------------------------------------')

// key diffrences : 
// for loops used mainly when u know exactly the number of iteration needed
// labeled break / continue allow you to control the flow of the loop precisely.

