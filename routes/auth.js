const mongoose = require('mongoose');
const passport = require('passport');
const settings = require('../config/settings');
require('../config/passport')(passport);
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const controller = require('../controller/UserController');

router.post('/register', function(req, res, err) {
	if (
		!req.body.userName ||
		!req.body.password ||
		!req.body.password2 ||
		!req.body.firstName ||
		!req.body.lastName ||
		!req.body.zipCode
	) {
		res.status(500).send({ success: false, msg: 'Authentication failed. You must fill in all fields' });
		res.msg = 'You must fill in all fields';
		console.log(res.msg);
	} else {
		// create new user variable
		const newUser = new User({
			// this contains new parsing params
			userName: req.body.userName,
			password: req.body.password,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			zipCode: req.body.zipCode
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
						user.password = undefined;
						res.json({ success: true, token: 'JWT ' + token, user: user });
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
