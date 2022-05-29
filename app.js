const express = require('express');
const SpaceShips = require('./models/SpaceShips');
const {
    shipsController
} = require('./controllers/shipsController');
const shootsController = require('./controllers/shootsController');

const app = express();
app.use(express.json());

app.get('/ships', shipsController.getAll);

app.post('/ships', shipsController.create);

app.post('/shoots', shootsController.shoot);

module.exports = app;