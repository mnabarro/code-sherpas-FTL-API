const exceptions = require('../exeptionStrings');
const {
    ships
} = require('./shipsController');

const shootsController = {
    shoot: (req, res) => {
        const fromShip = req.body.fromShip;
        const toShip = req.body.toShip;
        const toSpaceShip = ships.ships[toShip];
        
        try {
            if (typeof fromShip == 'undefined' || typeof toShip == 'undefined') {
                throw new Error(exceptions.shipsParamsRequired);
            }
    
            if (typeof ships.ships[fromShip] == 'undefined') {
                throw new Error(exceptions.fromShipNotFound);
            }
    
            if (typeof ships.ships[toShip] == 'undefined') {
                throw new Error(exceptions.toShipNotFound);
            }

            ships.ships[fromShip].shoot(toSpaceShip);
            
            return res.status(200).json({
                statusCode: 200,
                toShipHealth: toSpaceShip.getHealth()
    
            });

        } catch (err) {

            return res.status(400).json({
                statusCode: 400,
                error: err.message
            });
        }
    }
}

module.exports = shootsController;