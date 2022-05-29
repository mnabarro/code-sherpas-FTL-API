const SpaceShip = require('./SpaceShip');

class SpaceShips {

    constructor () {
        this.ships = new Array;        
    }

    getAll () {
        return this.ships;
    }

    getCount () {
        return this.ships.length;
    }

    add ( health ) {
        const newShip = new SpaceShip( health );
        this.ships.push(newShip);
    }
}

module.exports = SpaceShips;
