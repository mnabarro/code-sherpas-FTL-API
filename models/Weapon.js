const exceptions = require ('../exeptionStrings');
class Weapon {

    powerConsumed = 20
    powerNeeded = 20

    setPowerConsumed ( pwr ) {
        this.powerConsumed = pwr;
    }

    shoot ( toShip ) {

        if ( this.powerConsumed < this.powerNeeded) {
            throw new Error (exceptions.notEnoghPowerWeapon);
        }
        toShip.getsShooted();
    }
}


module.exports = Weapon;