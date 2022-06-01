const SpaceShip = require('./SpaceShip');

class SpaceShips {

    constructor() {
        this.ships = new Array;
    }
    getAll() {
        return this.ships;
    }

    findByPk ( id ) {
        return this.ships[id];
    }
    
    getCount() {
        return this.ships.length;
    }

    add(health) {
        const newShip = new SpaceShip(health);
        this.ships.push(newShip);
    }
}

module.exports = SpaceShips;