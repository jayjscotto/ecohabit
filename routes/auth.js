const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

router.post('/register', function(req, res, err) {
	console.log(req.body.values.userName);
	if (
		!req.body.values.userName ||
		!req.body.values.password ||
		!req.body.values.firstName ||
		!req.body.values.lastName ||
		!req.body.values.zipCode
	) {
		throw err;
		// res.json({ success: false, msg: 'Please pass username and password.' });
	} else {
		const newUser = new User({
			userName: req.body.values.userName,
			password: req.body.values.password,
			password2: req.body.values.password2,
			firstName: req.body.values.firstName,
			lastName: req.body.values.lastName,
			zipCode: req.body.values.zipCode
		});
		console.log(newUser);
		// save the user
		newUser
			.save()
			.then((user) => {
				console.log('success!');
				// req.flash('success_msg', 'You are now registered and can log in');
			})
			.catch((err) => console.log(err));
		// you can tack a db request here with a then statement
	}
});

router.post('/login', function(req, res) {
	console.log(req.body);
	User.findOne(
		{
			userName: req.body.userName
		},
		function(err, user) {
			if (err) throw err;

			if (!user) {
				res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
			} else {
				// check if password matches
				user.comparePassword(req.body.password, function(err, isMatch) {
					if (isMatch && !err) {
						// if user is found and password is right create a token
						const token = jwt.sign(user.toJSON(), settings.secret);
						// return the information including token as JSON
						res.json({ success: true, token: 'JWT ' + token });
					} else {
						res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
					}
				});
			}
		}
	);
});

module.exports = router;
