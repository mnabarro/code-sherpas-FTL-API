const exceptions = require('../exeptionStrings');
const Weapon = require('./Weapon');
const Generator = require ('./Generator');

class SpaceShip {

    totalConsumedPower = 0
    health = 0

    constructor(health) {

        this.weapon = new Weapon;
        this.generator = new Generator;
        this.setHealth(health);
    }

    getHealth() {
        return this.health;
    }

    setHealth(health) {

        if (health > 100 || health < 0) {
            throw new Error(exceptions.outOfRange);
        }

        this.health = health;
    }

    //Decreases this.health by 1 unit.
    getsShooted() {
        if (this.health > 0) {
            this.setHealth(this.getHealth() - 1);
        }
    }
}

module.exports = SpaceShip;