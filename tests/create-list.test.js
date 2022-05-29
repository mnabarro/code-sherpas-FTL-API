const request = require ('supertest');
const app = require ('../app');

describe('Test for FTL Ships API endpoints: create, list', () => {
  
    it('Insert one ship with valid <health> value', async () => {
        
        const response = await request(app).post('/ships').send( {health: 100} );
        expect(response.statusCode).toEqual(201);
        
    });

    it('Insert one ship with <health> value below 0', async () => {
        
        const response = await request(app).post('/ships').send( {health: -1} );
        expect(response.statusCode).toEqual(400);
        
    });

    it('Insert one ship with no <health> value', async () => {
        
        const response = await request(app).post('/ships').send( {} );
        expect(response.statusCode).toEqual(400);
        
    });

    it('Insert one ship with <health> value above 100', async () => {
        
        const response = await request(app).post('/ships').send( {health: 101} );
        expect(response.statusCode).toEqual(400);
        
    });

    it('Get all ships', async () => {
        
        const response = await request(app).get('/ships');

        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('data');
        expect(response.body).toHaveProperty('count', 1);
        
    });
});
