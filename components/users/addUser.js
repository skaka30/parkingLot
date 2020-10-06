const userModels = require('../../models/User');

async function addUser(userData) {
    return new Promise((resolve, reject) => {
      console.log('userData', userData)
        const userModel = new userModels(userData);
        userModel.save((error, val) => {
          if(error) {
            console.log(error)
            return reject(error);
          } else {
            console.log(val)
            return resolve(val);
          }
        });
    });
}
module.exports = addUser;
