const express = require('express');
const exceptions = require('./exeptionStrings');
const SpaceShips = require('./SpaceShips');


const app = express();
app.use(express.json());

const ships = new SpaceShips;

app.get('/ships', (req, res) => {
    res.json({count: ships.ships.length, data: ships.ships});
});

app.post('/ships', (req, res) => {
    const health = req.body.health;

    if (!health) {
        return res.status(400).json({error: exceptions.healthIsMandatory});
    }
    
    try {
        ships.add(health);
        
        return res.status(201).json( {StatusCode : 201} )
    }
    catch ( err ) {
        return res.status(400).json({error: exceptions.outOfRange});

    }
});

module.exports= app;