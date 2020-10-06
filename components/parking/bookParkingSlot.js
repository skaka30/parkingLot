const parkingBookSlotModels = require('../../models/BookParkingSlot');

async function bookParkingSlot(parkingSlotData){
  return new Promise((resolve, reject) => {
      console.log('parkingSlotData', parkingSlotData);
      const parkingBookSlotModel = new parkingBookSlotModels(parkingSlotData);
      parkingBookSlotModel.save((error, val) => {
        if(error) {
          console.log(error)
          return reject(error);
        } else {
          return resolve(val);
        }
      });
  });
}

module.exports = bookParkingSlot

