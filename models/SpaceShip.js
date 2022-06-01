const exceptions = require('../exeptionStrings');
const Weapon = require('./Weapon');
const Generator = require ('./Generator');

class SpaceShip {

    health = 0

    constructor(health) {

        this.weapon = new Weapon;
        this.generator = new Generator;
        this.setHealth(health);
    }

    setWeaponPowerConsumed ( pwr ) {
        if (pwr > this.weapon.powerNeeded) {
            throw new Error (exceptions.weaponPowerOverload + `: [${this.weapon.powerNeeded}].`);
        }

        this.weapon.setPowerConsumed( pwr );
        this.generator.setTotalRequiredPower( pwr )
    }   

    shoot( toShip ) {
    
        if (this.health < 1) {
            throw new Error(exceptions.shipCannotShoot);
        }

        this.weapon.shoot( toShip );
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