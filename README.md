# Code Sherpas FTL API project

## Comments on the project
This project is based on specs and rules provided by a Game Master of "Faster Than Light" game. It aims to provide an API wich simulates simplified gaming experience, according to requirements of the customer.

## How to run test suite
Open a terminal window. Chdir to the project's folder, run: 

#### *npm test*

Test suite will include one test for each endpoint of this API.
 - Feature #1: Create a ship
 - Feature #2: List all ships
 
## Running the app
Open a terminal window. Chdir to the project's folder

### Directly with npm ( Needs Node installed )
Run:
#### *npm start*

## Endopoint description:
*Assuming the project is running as delivered*

- #### Create a new ship
    **POST** http://localhost:3100/api/ships

    The only parameter to set is "health". If no value is provided, the request is discarded an the server responses with a 400 error.

    If you try to create a ship with health values out of range ( health is > 100 ), the request is discarded an the server responses with a 400 error.

    If there's any problem with the request. i.e corrupted or malfomed JSON, the API responses with an 400 error code and a short description of the problem.
	
```javascript
// Example response for POST to http://localhost:3100/ships with a health value of 99.
{
	"status": "201 Created",
}
```

```javascript
// Example response for POST to http://localhost:3100/api/ships with health > 100.
{
	"error": "<health> initial value out of range ( Should be less than 100 )"
}
```
- #### List all ships
    **GET** http://localhost:3100/ships 

```javascript
// Example response for GET http://localhost:3100/api/ships
{
	"count": 2,
	"data": [
		{
			"health": 100
		},
		{
			"health": 90
		}
	]
}
```
