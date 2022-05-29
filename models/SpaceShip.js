const exceptions = require('../exeptionStrings');

class SpaceShip {

    constructor ( health ) {

        this.setHealth(health);
    }

    getHealth () {
        return this.health;
    }

    setHealth ( health ){
        
        if (health > 100) {
            throw new Error( exceptions.outOfRange);
        }
        
        this.health = health;
        
    }
}

module.exports = SpaceShip;