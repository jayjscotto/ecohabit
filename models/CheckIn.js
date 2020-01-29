const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheckInSchema = new Schema({
    // push points to an array
    // holds
    checkin: [
        {
            points: {
                type: Number
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

const CheckIn = mongoose.model('CheckIn', CheckInSchema);

module.exports = CheckIn;