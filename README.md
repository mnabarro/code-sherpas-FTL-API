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
 - Feature #6: Each spaceship must have its own weapon, wich will be responsible for shooting to other ships when required.
 - Feature #7: We add a generator to spaceships created, with some new attributes ( totalPower, powerNotInUse, totalRequiredPower ).
 - Feature #8: Implements the power calculations required. See original specification for details.
 - Feature #9: The Game Master should be able to set power-consumed-by-weapon.

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
			"idx": 0,
			"health": 100,
			"totalPower": 100
		},
		{
			"idx": 1,
			"health": 90,
			"totalPower": 100
		}
	]
}
```

- #### Find a spaceship by its index
    **GET** http://localhost:3100/ships/:id 

```javascript
// Example response for GET http://localhost:3100/ships/0
{
	"health": 44,
	"weapon": {
		"powerConsumed": 20,
		"powerNeeded": 20
	},
	"generator": {
		"totalPower": 100,
		"powerNotInUse": 100,
		"totalRequiredPower": 0
	}
}

// Example response for GET http://localhost:3100/ships/3 (Not found)
{
	"error": "Ship not found in database."
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
	"toShipHealth": 43
}

// Response if "fromShip" <health> value = 0
{
	"statusCode": 400,
	"error": "<fromShip> needs health > 0 to be able to shoot."
}
```
- #### Set weapon consumed power
    **PUT** http://localhost:3100/ships/0 

	The only allowed parameter is "weaponPower". It must be between 0 and spaceships's weapon-power-needed value. Otherwise, it will not be proccesed.

```javascript
// Example PUT http://localhost:3100/ships with valid parameter
{
	"weaponPower" : 16
}

// Response
{
	"status": {
		"total-power": 100,
		"weapon-power-needed": 20,
		"power-consumed-by-weapon": 16,
		"power-not-in-use": 84
	}
}

// Response if "weaponPower" value < 0
{
	{
		"error": "Power value to asign must be equal or greater than 0."
	}
}

// Response if "weaponPower" value > weapon-power-needed
{
	"error": "Trying to set weapon's power above allowed maximum: [20]."
}
```
