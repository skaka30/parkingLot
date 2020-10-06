const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    mobileNumber:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('users', UserSchema);