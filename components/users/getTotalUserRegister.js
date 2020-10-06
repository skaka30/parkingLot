const userModels = require('../../models/User');

async function getTotalUserRegister(){
    return new Promise((resolve, reject) => {
        userModels.count().exec(function(err, docs) {
          if(err){
            return reject(err);
          } else {
            return resolve(docs);
          }
        });
    });
}
module.exports = getTotalUserRegister;
