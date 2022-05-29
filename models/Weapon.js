const exceptions = require ('../exeptionStrings');
class Weapon {

    shoot ( toShip ) {
        toShip.getsShooted();
    }
}

module.exports = Weapon;