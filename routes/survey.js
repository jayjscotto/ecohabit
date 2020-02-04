const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport')(passport);
const controller = require('../controller/UserController');

/* GET */
router.get('/', passport.authenticate('jwt', { session: false }), controller.getDailyCheck);

/* GET */
router.get('/results', passport.authenticate('jwt', { session: false }), controller.getCheckInResults);

router.get('/user/dailycheck', passport.authenticate('jwt', { session: false}), controller.getDailyCheck);

/* Post */
router.post('/', passport.authenticate('jwt', { session: false }), controller.userSubmitDaily);

// function to get JSON web token
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
