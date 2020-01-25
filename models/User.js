const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	surveyResult: {
		// push points to an array
		// holds
		survey: [
			{
				points: {
					type: Number,
					required: true
				},
				date: {
					type: Date,
					default: Date.now
				}
			}
		]
	}
});
const User = mongoose.model('User', UserSchema);
module.exports = User;