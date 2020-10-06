# Parking Lot System 

System using Node with Express Server, MongoDB

## Features

- Express
- REST API

## Requirements

- [node & npm](https://nodejs.org/en/)

## Installation

- `git clone https://github.com/skaka30/parkingLot.git`
- `cd parkingLot`
- `npm install`
- `npm run dev`
- optional: include _.env_ in your _.gitignore_

### GET Routes

- visit http://localhost:5500/version
  - /parking/getParkingSlotList
  - /parking/getOccupiedSlot/2020-10-21
  - /parking/getAvailableSlot/2020-10-21
  - /parking/addParkingSlot
  - /parking/bookSlot

### Beyond GET Routes

#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/v1/parking/getParkingSlotList
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{
    "status": {
        "code": 200,
        "message": "success"
    },
    "data": {
        "totalParkingSlot": [
            {
                "_id": "5f7cd5188e7a3912694a67f7",
                "parkingNumber": "m5",
                "nearByLift": "1",
                "reservedType": "1",
                "__v": 0
            }
        ]
    }
}`
