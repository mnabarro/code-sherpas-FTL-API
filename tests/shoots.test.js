const request = require('supertest');
const app = require('../app');

describe('Test for FTL Ships API endpoints: shoots', () => {

    it('Insert one ship with valid <health> value', async () => {

        const response = await request(app).post('/ships').send({
            health: 1
        });
        expect(response.statusCode).toEqual(201);

    });

    it('Insert one ship with valid <health> value', async () => {

        const response = await request(app).post('/ships').send({
            health: 2
        });
        expect(response.statusCode).toEqual(201);

    });

    it('Shoots from spaceship[1] to spacechip[0]', async () => {

        const response = await request(app).post('/shoots').send({
            fromShip: 1,
            toShip: 0
        });
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('toShipHealth', 0);
    });

    // spaceship[0] can't shoot because its health = 0.
    it('Shoots from spaceship[0] to spacechip[1]', async () => {

        const response = await request(app).post('/shoots').send({
            fromShip: 0,
            toShip: 1
        });
        expect(response.statusCode).toEqual(400);
    });

});