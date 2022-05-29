const SpaceShips = require("../models/SpaceShips");

const ships = new SpaceShips

const shipsController = {

    getAll : (req, res) => {
        res.json({ count: ships.getCount(), data: ships.getAll() });
    },
    
    create : (req, res) => {
        const health = req.body.health;

        if (typeof health == 'undefined') {
            return res.status(400).json({error: exceptions.healthIsMandatory});
        }
        
        try {
            ships.add(health);
            
            return res.status(201).json( {StatusCode : 201} )
        }
        catch ( err ) {
            return res.status(400).json({error: exceptions.outOfRange});
    
        }
    }
}

module.exports = {shipsController, ships};