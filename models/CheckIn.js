const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheckInSchema = new Schema({
    // push points to an array
    // holds
    user_id: {
        type: String,
    },
    userAnswer: {
         type: Array,
         required: true
    },
    totalPoints: {
        type: Number,
        required: true 
    },
    date: {
		type: Date,
		default: Date.now
	}    
})

const CheckIn = mongoose.model('CheckIn', CheckInSchema);

module.exports = CheckIn;