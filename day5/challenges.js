// Car Object


// with factory function
function carObject(brand, model, year) {
    return {
        brand,
        model,
        year,

        info() {
            return `This car is a ${this.brand} ${this.model}`
        }
    }
}

console.log('--------------------------------------------------')

// with class

class Car {
    constructor(brand, model, year) {
        this.brand = brand,
        this.model = model,
        this.year = year
    }
    info() {
        return `This car is a ${this.brand} ${this.model}`
    }
}

const Porsche = carObject('Porsche', 'GT3RS', 2021)
const Porsche911 = new Car('Porsche', 'GT3RS', 2021)
const BMW = new Car('BMW', 'M4', 2024)

console.log(Porsche.info())
console.log(Porsche)
console.log(Porsche911.info())

console.log('--------------------------------------------------')

// Object Mutation

class User {
    constructor (name, age) {
        this.name = name,
        this.age = age
    };
    isActive =  true
}

const Moughit = new User('Moughit', 21)
const Mohamed = new User('Mohamed', 235)
const Ali = new User('Ali', 19)
const Nacer = new User('Nacer', 33)

console.log(Moughit.isActive)

console.log('--------------------------------------------------')

// Key/Value Iteration

arr = [Porsche, Porsche911, BMW]

for (info in arr) {
    console.log(arr[info])
}

console.log('--------------------------------------------------')

// oldest Person

persons = [Moughit, Ali, Nacer, Mohamed]

function findOldest(arr) {
    let oldest = 0;
    for (person in arr) {
        if (arr[person].age > oldest) {
            oldest = arr[person].age
        }
    }
    return oldest
}
console.log(findOldest(persons))

console.log('--------------------------------------------------')

// In-Stock Filter

function inStock(products) {
    let stocked = [];
    for(product in products) {
        if (products[product].inStock == true) {
            stocked.push(products[product])
        }
    }
    return stocked
}

class products {
    constructor (name, price, inStock) {
        this.name = name,
        this.price = price,
        this.inStock = inStock
    }
}

const milk = new products('milk', '10dh', true)
const tea = new products('tea', '20dh', false)
const coffe = new products('coffe', '70dh', true)
const juice = new products('juice', '100dh', true)

let forSale = [milk, tea, coffe, juice]

console.log(inStock(forSale))

console.log('--------------------------------------------------')

// Cart Total

class inCart {
    constructor ( price, quantity) {
        this.price = price,
        this.quantity = quantity
    }
}

const pc = new inCart(4000, 3)
const phone = new inCart(100, 35)
const cable = new inCart(12, 31)

let Cart = [pc, phone, cable]

function totalCart(products) {
    let total = 0
    for (product in products) {
        total += products[product].quantity * products[product].price
    }
    return total
}

console.log(totalCart(Cart))

console.log('--------------------------------------------------')

// Group Department

class Employees {
    constructor(name, departement) {
        this.name = name,
        this.departement = departement
    }
}

const samir = new Employees('Samir', 'finance')
const omar = new Employees('Omar', 'HR')
const ahmed = new Employees('Ahmed', 'finance')

let employees = [samir, omar, ahmed]

function sortDepartement(employees) {
    let group = [];
    for (let employee in employees) {
        let departement = employees[employee].departement
        if (!group[departement]) {
            group[departement] = []
        }
        group[departement].push(employees[employee])
    }
    return group
}

console.log(sortDepartement(employees))

console.log('--------------------------------------------------')

// Merge profiles

class BasicInfo {
    constructor (name, lastname, phoneNumber) {
        this.name = name
        this.lastname = lastname
        this.phoneNumber = phoneNumber
    }
}

class contactInfo {
    constructor (name, lastname, phoneNumber) {
        this.name = name
        this.lastname = lastname
        this.phoneNumber = phoneNumber
    }
}

// function mergeObject(obj1, obj2) {
//     for()
// }