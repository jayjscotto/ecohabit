const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

// changed the way req.body is being parsed to data from post request can be accessed
router.post('/register', function(req, res, err) {
	if (
		// added .values so data can be parsed
		!req.body.values.userName ||
		!req.body.values.password ||
		!req.body.values.firstName ||
		!req.body.values.lastName ||
		!req.body.values.zipCode
	) {
		res.status(500).send({ success: false, msg: 'Authentication failed. You must fill in all fields' });
		res.msg = 'You must fill in all fields';
		console.log(res.msg);
	} else {
		// create new user variable
		const newUser = new User({
			// this contains new parsing params
			userName: req.body.values.userName,
			password: req.body.values.password,
			firstName: req.body.values.firstName,
			lastName: req.body.values.lastName,
			zipCode: req.body.values.zipCode
		});
		// save the user
		newUser
			.save()
			.then((user) => {
				// if success send message
				res.json({ success: true, msg: 'You are now registered' });
			})
			// if err catch err
			.catch((err) => console.log(err));
		// you can tack a db request here with a then statement
	}
});

router.post('/login', function(req, res) {
	User.findOne(
		{
			// updated username to userName to match model
			userName: req.body.userName
		},
		function(err, user) {
			if (err) throw err;
			// if not a registered user...
			if (!user) {
				// user not found
				res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
			} else {
				// check if password matches
				// comparePassword method can be found in User model
				user.comparePassword(req.body.password, function(err, isMatch) {
					if (isMatch && !err) {
						// if user is found and password is right create a token
						const token = jwt.sign(user.toJSON(), settings.secret);
						// return the information including token as JSON
						res.json({ success: true, token: 'JWT ' + token });
					} else {
						// auth failed wrong password
						res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
					}
				});
			}
		}
	);
});

module.exports = router;
