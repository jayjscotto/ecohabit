var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
require('../config/passport')(passport);

/* GET */
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res) {
	var token = getToken(req.headers);
	if (token) {
		// db query here
	} else {
		return res.status(403).send({ success: false, msg: 'Unauthorized.' });
	}
});

/* Post */
router.post('/', passport.authenticate('jwt', { session: false }), function(req, res) {
	var token = getToken(req.headers);
	if (token) {
		// db query here
	} else {
		return res.status(403).send({ success: false, msg: 'Unauthorized.' });
	}
});

// don't touch PLEASE <3 Laura
getToken = function(headers) {
	if (headers && headers.authorization) {
		var parted = headers.authorization.split(' ');
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
