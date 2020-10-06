const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParkingSlotSchema = new Schema({
    parkingNumber:{
        type:String,
        required: true
    },
    reservedType:{
        type:String,
        required: true
    },
    nearByLift:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('parkingslot', ParkingSlotSchema);