# Code Sherpas FTL API project

## Comments on the project
This project is based on specs and rules provided by a Game Master of "Faster Than Light" game. It aims to provide an API wich simulates simplified gaming experience, according to requirements of the customer.

## How to run test suite
Open a terminal window. Chdir to the project's folder, run: 

#### *npm test*

Test suite will include one test for each endpoint of this API.
 - Feature #1: Create a ship
 - Feature #2: List all ships
 - Feature #3: Shoots from A spaceship to B spaceship. 
 	
	 B spaceship health decreases by 1 with each shoot received.
 
 - Feature #4: "health" paramenter cannot be negative.
 - Feature #5: Spaceships with "health" = 0 can't shoot.

## Running the app
Open a terminal window. Chdir to the project's folder

### Directly with npm ( Needs Node installed )
Run:
#### *npm start*

## Endopoint description:
*Assuming the project is running as delivered*

- #### Create a new ship
    **POST** http://localhost:3100/ships

    The only parameter to set is "health". If no value is provided, the request is discarded an the server responses with a 400 error.

    If you try to create a ship with health values out of range ( 0, 100 ), the request is discarded an the server responses with a 400 error.

    If there's any problem with the request. i.e corrupted or malfomed JSON, the API responses with an 400 error code and a short description of the problem.
	
```javascript
// Example response for POST to http://localhost:3100/ships with a health value of 99.
{
	"status": "201 Created",
}
```

```javascript
// Example response for POST to http://localhost:3100/ships with health > 100.
{
	"error": "<health> initial value out of range ( Should be less than 100 )"
}
```
- #### List all ships
    **GET** http://localhost:3100/ships 

```javascript
// Example response for GET http://localhost:3100/ships
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

- #### Shoots
    **POST** http://localhost:3100/shoots 

	We check if the ships (fromShip and toShip) exists in database. Both are required parameters. Requests without either of them will be rejected with a 400 error.
	 
	Also you will get an error if parameters are present but there is no spaceship for that index in our database-array.

	If the "fromShip" has a health value = 0, it can't shoot. The API responses with a 400 status and a description of error.

```javascript
// Example POST http://localhost:3100/shoots with valid parameters
{
	"fromShip": 0,
	"toShip": 2
}

// Response
{
	"statusCode": 200,
	"toShip": {
		"health": 43
	}
}

// Response if "fromShip" <health> value = 0
{
	"statusCode": 400,
	"error": "<fromShip> needs health > 0 to be able to shoot."
}
```
