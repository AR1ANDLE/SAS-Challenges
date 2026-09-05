// Factory Function -- Returning new object each time

function creatPlayer(name) {
    return {
        name,
        health: 100,
        attack() {
            return (`${this.name} attacks!`)
        }
    }
}

const Moughit = creatPlayer('Moughit')

console.log(Moughit.name)

// Class -- blueprint for creating objects

class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
    
    }
    attack() {
        return `${this.name} attacked you!`
    }
}

const enemy = new Enemy("Devil")
console.log(enemy.attack())

// Factory Vs Class
// class : memory efficient , require 'new', relies on 'this', Not hoisted;
// factory : not memory efficient, don't require 'new', can neglect 'this' using function closure, Hoisted;

// Factory with multiple parameters

function createEnemy(name, health, ability, attackPower) {
    return {
        name,
        health,
        ability,
        attackPower,
        isAlive: true,

        attack(target) {
            return `${this.name} attacks ${target.name} dealing ${this.attackPower} damage!`
        },
        takeDamage(amount) {
            this.health -= amount
            if (this.health <= 0) {
                this.health = 0;
                this.isAlive = false;
                return `${this.name} has been defeated.`;
            }
            return `${this.name} has ${this.health} remaining`;

        }
    }
}

const goblin = createEnemy('Goblin', 100, 'Magic', 30)
console.log(goblin.name)
console.log(goblin.health)
console.log(goblin.ability)
console.log(goblin.attackPower)
console.log(goblin.attack(Moughit))
console.log(goblin.takeDamage(35))