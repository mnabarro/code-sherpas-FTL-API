const exceptions = require('../exeptionStrings');
const {
    ships
} = require('./shipsController');

const shootsController = {
    shoot: (req, res) => {
        const fromShip = req.body.fromShip;
        const toShip = req.body.toShip;

        if (typeof fromShip == 'undefined' || typeof toShip == 'undefined') {
            return res.status(400).json({
                error: exceptions.shipsParamsRequired
            });
        }

        if (typeof ships.ships[fromShip] == 'undefined') {
            return res.status(400).json({
                error: exceptions.fromShipNotFound
            });
        }

        if (typeof ships.ships[toShip] == 'undefined') {
            return res.status(400).json({
                error: exceptions.toShipNotFound
            });
        }

        //Read health from both spaceships.
        const toShipHealth = ships.ships[toShip].getHealth();

        const toSpaceShip = ships.ships[toShip];

        const fromShipHealth = ships.ships[fromShip].getHealth();

        // <fromShip> must have health > 0 to shoot.
        if (fromShipHealth < 1) {
            return res.status(400).json({
                statusCode: 400,
                error: exceptions.shipCannotShoot
            });
        }

        //<toShip>'s health cannot get below 0. 
        if (toShipHealth > 0) {
            ships.ships[fromShip].weapon.shoot(toSpaceShip);
        }

        return res.status(200).json({
            statusCode: 200,
            toShipHealth: toSpaceShip.getHealth()
        });
    }
}

module.exports = shootsController;