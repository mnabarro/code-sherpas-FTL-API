class SpaceShip {

    constructor ( health ) {

        this.setHealth(health);
    }

    getHealth () {
        return this.health;
    }

    setHealth ( health ){
        
        if (health > 100) {
            throw new Error('Health out of range');
        }
        
        this.health = health;
        
    }
}

module.exports = SpaceShip;