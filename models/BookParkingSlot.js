const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookParkingSlotSchema = new Schema({
    parkingSlotID:{
        type:String,
        required: true
    },
    mobileNumber:{
        type: String,
        required: true
    },
    carNumber:{
        type:String,
        required: true
    },
    isBooked:{
        type: String
    },
    bookDate:{
        type:Date,
        required: true
    },
    isReservedType:{
        type:String,
        required: true
    }
});
module.exports = mongoose.model('parkingbookingslot', BookParkingSlotSchema);