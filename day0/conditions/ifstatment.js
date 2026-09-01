// Conditions with if


let name = "Moughit", age = 21


// if statement
if (name == "Moughit" && age == 21) 
{
    console.log(true)
} else {
    console.log(false)
}

// ternary operator
name == "Moughit" && age == 21 ? console.log(true) : console.log(false)

// nested if
if (name == "Moughit") {
    if (age == 21) {
        console.log(true)
    }
} else {
    console.log(false)
}

// else if
if (name == "Moughit") {
    if (age == 21) {
        console.log(true)
    } else if (age >= 21) {
        console.log("Lower")
    } else if (age <= 21) {
        console.log("Higher")
    } else {
        console.log(false)
    }
}