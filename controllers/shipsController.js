const SpaceShips = require("../models/SpaceShips");

const ships = new SpaceShips
const exceptions = require('../exeptionStrings');
const shipsController = {

    getAll: (req, res) => {

        let count = ships.getCount();
        let data = ships.getAll().map((value, idx) => {
            return {
                idx,
                health: value.health,
                totalPower: value.generator.totalPower
            };

        });

        return res.json({
            count,
            data
        });
    },

    findByPk(req, res) {
        let idx = req.params.id;
        let found = ships.findByPk(idx);

        if (typeof found == 'undefined') {
            return res.status(400).json({
                error: exceptions.shipNotFound
            });
        }
        return res.status(200).json(found);
    },


    setWeaponPower(req, res) {

        const pwr = req.body.weaponPower;
        const idx = req.params.id;

        try {
            if (parseInt(pwr) < 0) {
                throw new Error(exceptions.powerMustBePositive);
            }

            if (typeof ships.ships[idx] == 'undefined') {
                throw new Error(exceptions.shipNotFound);
            }

            ships.ships[idx].setWeaponPowerConsumed(pwr);
            const {
                weapon: {
                    powerNeeded
                },
                weapon: {
                    powerConsumed
                },
                generator: {
                    totalPower
                },
                generator: {
                    powerNotInUse
                }
            } = ships.ships[idx];

            const data = {
                "total-power": totalPower,
                "weapon-power-needed": powerNeeded,
                "power-consumed-by-weapon": powerConsumed,
                "power-not-in-use": powerNotInUse
            }

            return res.status(200).json({
                "status": data
            });

        } catch (err) {
            return res.status(400).json({
                error: err.message
            });
        }


        //console.log(`Set Weapon Power of spaceship ${idx} to : ${pwr}`);
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
                error: err.message
            });
        }
    },
}

module.exports = {
    shipsController,
    ships
};