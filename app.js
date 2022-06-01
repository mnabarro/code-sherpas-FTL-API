const express = require('express');
const SpaceShips = require('./models/SpaceShips');
const {
    shipsController, ships
} = require('./controllers/shipsController');
const shootsController = require('./controllers/shootsController');

const app = express();
app.use(express.json());

app.get('/ships', shipsController.getAll);
app.get('/ships/:id', shipsController.findByPk);

app.post('/ships', shipsController.create);
app.put('/ships/:id', shipsController.setWeaponPower);

app.post('/shoots', shootsController.shoot);

module.exports = app;