const mongoose = require('mongoose');
const db = require('../models');
const passport = require('passport');
require('../config/passport')(passport);

// function to get JSON web token
const getToken = (headers) => {
	if (headers && headers.authorization) {
		const parted = headers.authorization.split(' ');
		if (parted.length === 2) {
			return parted[1];
		} else {
			return null;
		}
	} else {
		return null;
	}
};

module.exports = {
	userUpdate: function(req, res) {
		const token = getToken(req.headers);
		if (token) {
			console.log(req.body);
			db.User
				.findByIdAndUpdate(
					{ _id: req.body._id },
					{
						$set: {
							userName: req.body.userName,
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							zipCode: req.body.zipCode
						}
					}
				)
				.then((data) => res.json(data));
		} else {
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
		}
	},

	// takes in user id checkin results
	// saves new check-in document in db check-in collection
	userSubmitDaily: function(req, res) {
		const token = getToken(req.headers);

		if (token) {
			const checkIn = {
				user_id: req.body.user_id,
				userAnswers: req.body.userAnswers,
				totalPoints: req.body.totalPoints,
				Date: Date.now()
			};

			
			return db.CheckIn.create(checkIn).then((created) => db.User.findOneAndUpdate( 
				{_id: req.body.user_id}, 
				{ $push: { checkIns: created }, $set: { dailyCheck: true }  },
				{ new: true }))
		} else {
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
		}
	},

	// get state of boolean dailyCheck
	getDailyCheck: function(req, res) {
		// check to see if user has token
		const token = getToken(req.headers);
		if (token) {
			//find user based on submitted id
			db.User.find({ _id: req.body._id }).then(results => res.json(results))
		} else {
			// else return error
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
		}
	},

	// gets check-in results for data visualization
	getCheckInResults: function(req, res) {
		const token = getToken(req.headers);
		// console.log(req.user);
		if (token) {
			db.User.find({ _id: req.user._id }).populate('checkIns').then((results) => { res.json(results.checkIns) });
		} else {
			return res.status(403).send({ success: false, msg: 'Unauthorized.' });
		}
	}
};




