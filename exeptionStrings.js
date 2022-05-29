const exceptions = {
    outOfRange : '<health> initial value out of range ( 0, 100 ).',
    healthIsMandatory : '<health> parameter is required, ( 0, 100 ).',
    fromShipNotFound: 'The ship defined by <fromShip> not found in database.',
    toShipNotFound: 'The ship defined by <toShip> not found in database.',
    shipsParamsRequired : '<fromShip> and <toShip> parameters are required.',
}


module.exports = exceptions;