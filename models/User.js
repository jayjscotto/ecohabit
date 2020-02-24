const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
	userName: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: false
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	zipCode: {
		type: String,
		required: true,
		min: [ 5, 'Zip Code must be 5 Digits long' ],
		// max: 5
	},
	dailyCheck: {
		type: Boolean,
		default: false
	},
	checkIns: [{
		type: Schema.Types.ObjectId,
		ref: 'CheckIn'
	}],
});

UserSchema.pre('save', function(next) {
	const user = this;
	if (this.isModified('password') || this.isNew) {
		bcrypt.genSalt(10, function(err, salt) {
			if (err) {
				return next(err);
			}
			bcrypt.hash(user.password, salt, null, function(err, hash) {
				if (err) {
					return next(err);
				}
				user.password = hash;
				next();
			});
		});
	} else {
		return next();
	}
});

UserSchema.methods.comparePassword = function(passw, cb) {
	bcrypt.compare(passw, this.password, function(err, isMatch) {
		if (err) {
			return cb(err);
		}
		cb(null, isMatch);
	});
};

module.exports = mongoose.model('User', UserSchema);
