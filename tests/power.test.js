const request = require('supertest');
const app = require('../app');
const exceptions = require ('../exeptionStrings');

describe('Test for FTL Ships API endpoints: generator', () => {

    it('Insert one ship with valid <health> value', async () => {

        const response = await request(app).post('/ships').send({
            health: 100
        });
        expect(response.statusCode).toEqual(201);

    });

    it('Get the created ship', async () => {

        const response = await request(app).get('/ships/0');

        expect(response.statusCode).toEqual(200);
        expect(response.body.generator).toHaveProperty("totalPower", 100)
        });

    it('Try to set weapon-power to a non existing spaceship', async () => {

        const response = await request(app).put('/ships/1').send({"weaponPower" : 15});

        expect(response.statusCode).toEqual(400);
        expect(response.body).toHaveProperty("error", exceptions.shipNotFound);

        });

    it('Try to set weapon-power above allowed maximum', async () => {

        const response = await request(app).put('/ships/0').send({"weaponPower" : 25});

        expect(response.statusCode).toEqual(400);
        let errString = response.body.error;

        expect(response.body).toHaveProperty("error");
        expect(errString).toContain(exceptions.weaponPowerOverload);
        });

    it('Try to set weapon-power below 0', async () => {

        const response = await request(app).put('/ships/0').send({"weaponPower" : -10});

        expect(response.statusCode).toEqual(400);
        let errString = response.body.error;

        expect(response.body).toHaveProperty("error");
        expect(errString).toContain(exceptions.powerMustBePositive);
        });

    it('Change power needed by weapon and check the numbers', async () => {

        const response = await request(app).put('/ships/0').send({"weaponPower" : 15});

        expect(response.statusCode).toEqual(200);
        expect(response.body.status).toHaveProperty("weapon-power-needed", 20);
        expect(response.body.status).toHaveProperty("power-consumed-by-weapon", 15);
        expect(response.body.status).toHaveProperty("power-not-in-use", 85);

        });

            
});