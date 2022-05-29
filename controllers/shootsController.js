const exceptions = require('../exeptionStrings');
const { ships } = require('./shipsController');

const shootsController = {
    shoot : (req,res) => {
        const fromShip = req.body.fromShip;
        const toShip = req.body.toShip;

        if (typeof fromShip == 'undefined' || typeof toShip == 'undefined'){
            return res.status(400).json({error: exceptions.shipsParamsRequired});
        }
        
        if (typeof ships.ships[fromShip] == 'undefined') {
            return res.status(400).json({error: exceptions.fromShipNotFound});        
        }

        if (typeof ships.ships[toShip] == 'undefined') {
            return res.status(400).json({error: exceptions.toShipNotFound});        
        }

        //Read health and substracts 1
        const prevHealth = ships.ships[toShip].getHealth();
        ships.ships[toShip].setHealth(prevHealth -1);

        return res.status(200).json({statusCode : 200, toShip: ships.ships[toShip]});
    }
}

module.exports = shootsController;