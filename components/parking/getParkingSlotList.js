const parkingSlotModels = require('../../models/ParkingSlot');

async function getParkingSlotList(data = ''){
    return new Promise((resolve, reject) => {
      var filter = {};
      if (data) {
        filter.reservedType = data.isReservedType;
      }
      parkingSlotModels.find(filter).exec(function(err, docs) {
          if(err){
            return reject(err);
          } else {
            return resolve(docs);
          }
        });
    });
}
module.exports = getParkingSlotList;
