const userModels = require('../../models/User');

async function getUsersDetails(mobileNumber){
    return new Promise((resolve, reject) => {
        console.log('mobileNumber', mobileNumber);
        var filter = {};
        filter.mobileNumber = mobileNumber;
        userModels.findOne(filter, {_id :1, name: 1, mobileNumber: 1, gender: 1, isStatus: 1}).exec(function(err, docs) {
          if(err){
            return reject(err);
          } else {
            return resolve(docs);
          }
        });
    });
}
module.exports = getUsersDetails;
