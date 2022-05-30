const request = require('supertest');
const app = require('../app');

describe('Test for FTL Ships API endpoints: generator', () => {

    it('Insert one ship with valid <health> value', async () => {

        const response = await request(app).post('/ships').send({
            health: 100
        });
        expect(response.statusCode).toEqual(201);

    });

    it('Get all ships', async () => {

        const response = await request(app).get('/ships');

        expect(response.statusCode).toEqual(200);

        expect(response.body.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    totalPower: 100
                })
            ])
        );
    });
});