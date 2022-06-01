const exceptions = require("../exeptionStrings");

class Generator {

    constructor () {
        this.totalPower = 100
        this.powerNotInUse = 100
        this.totalRequiredPower = 0
    }

    setTotalRequiredPower( pwr ) {
        if ( pwr > this.totalPower ) {
            throw new Error (exceptions.outOfRange);
        }

        this.totalRequiredPower = pwr;
        this.powerNotInUse = this.totalPower - this.totalRequiredPower;
    }
}

module.exports = Generator;