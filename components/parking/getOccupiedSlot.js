const bookingSlotModels = require('../../models/BookParkingSlot');

async function getOccupiedSlot(data){
    return new Promise((resolve, reject) => {
      const startDate =new Date(new Date(data.bookDate).setUTCHours(0, 0, 0, 0)).toISOString();
      const endDate =new Date(new Date(data.bookDate).setUTCHours(23, 59, 59, 999)).toISOString();
  
      bookingSlotModels.find({bookDate: { $gte:`${startDate}`,  $lt: `${endDate}` } },
       {_id :1,  mobileNumber: 1, bookDate: 1}).exec(function(err, docs) {
          if(err){
            return reject(err);
          } else {
            return resolve(docs);
          }
        });
    });
}
module.exports = getOccupiedSlot;