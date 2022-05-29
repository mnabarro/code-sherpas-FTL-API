const SpaceShips = require("../models/SpaceShips");

const ships = new SpaceShips
const exceptions = require('../exeptionStrings');
const shipsController = {

    getAll: (req, res) => {
        res.json({
            count: ships.getCount(),
            data: ships.getAll().map((value, idx) => {
                return {
                    idx,
                    health: value.health
                }
            })
        });
    },

    create: (req, res) => {
        const health = req.body.health;

        if (typeof health == 'undefined') {
            return res.status(400).json({
                error: exceptions.healthIsMandatory
            });
        }

        try {
            ships.add(health);

            return res.status(201).json({
                StatusCode: 201
            })
        } catch (err) {
            return res.status(400).json({
                error: exceptions.outOfRange
            });

        }
    }
}

module.exports = {
    shipsController,
    ships
};