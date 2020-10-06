const parkingSlotModels = require('../../models/ParkingSlot');


async function addParkingSlot(parkingSlotData){
    return new Promise((resolve, reject) => {
        const parkingSlotModel = new parkingSlotModels(parkingSlotData);
        parkingSlotModel.save((error, val) => {
          if(error) {
            console.log(error);
            return reject(error);
          } else {
            console.log(val);
            return resolve(val);
          }
        });
    });
}

module.exports = addParkingSlot

