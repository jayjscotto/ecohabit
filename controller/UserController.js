
const mongoose = require('mongoose');
const db = require('../models');
const passport = require('passport');
require('../config/passport')(passport);

// function to get JSON web token
const getToken = headers => {
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
  findUser: function() {
    db.User.find({});
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
      }
      // update boolean and submit results 
      db.User.findByIdAndUpdate({ _id: req.body.user_id}, {$set:{dailyCheck: true}});
      return db.CheckIn.create(checkIn).then(created => res.json(created));
    } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
   
  },

  // gets check-in results for data visualization
  getCheckInResults: function(req, res) {
    const token = getToken(req.headers);
    if (token) {
      db.User.find({ _id: req.body.user_id })
      .populate('checkInResults')
      .then(results => res.json(results));
    } else {
      return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
 
  },
};
