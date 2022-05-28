const SpaceShip = require('./SpaceShip');

class SpaceShips {

    constructor () {
        this.ships = new Array;
    }

    add ( health ) {
        const newShip = new SpaceShip( health );
        this.ships.push(newShip);
    }
}

module.exports = SpaceShips;
