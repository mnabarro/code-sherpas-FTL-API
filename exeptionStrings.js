const exceptions = {
    outOfRange : '<health> initial value out of range ( 0, 100 ).',
    healthIsMandatory : '<health> parameter is required, ( 0, 100 ).',
    fromShipNotFound: 'The ship defined by <fromShip> not found in database.',
    toShipNotFound: 'The ship defined by <toShip> not found in database.',
    shipsParamsRequired : '<fromShip> and <toShip> parameters are required.',
    shipCannotShoot : '<fromShip> needs health > 0 to be able to shoot.',
    notEnoghPowerWeapon : "Weapon doesn't have enough power to shoot.",
    weaponPowerOverload : "Trying to set weapon's power above allowed maximum",
    shipNotFound: 'Ship not found in database.',
    powerMustBePositive: 'Power value to asign must be equal or greater than 0.'
}


module.exports = exceptions;