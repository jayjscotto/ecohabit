const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
//const db= require('../models');
require('../config/passport')(passport);

/* GET */
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res) {
	const token = getToken(req.headers);
	if (token) {
		console.log(token);
	} else {
		return res.status(403).send({ success: false, msg: 'Unauthorized.' });
	}
});

/* Post */
router.post('/', passport.authenticate('jwt', { session: false }), function(req, res) {
	const token = getToken(req.headers);
	if (token) {
		// db query here
	} else {
		return res.status(403).send({ success: false, msg: 'Unauthorized.' });
	}
});

// don't touch PLEASE <3 Laura
getToken = function(headers) {
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

module.exports = router;
