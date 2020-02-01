const db = require('../models');

module.exports = {
  findUser: function() {
    db.User.find({});
  },
  submitCheckInResults: function(req, res) {
    const checkIn = {
        user_id: req.body.user_id,
        userAnswers: req.body.userAnswers,
        totalPoints: req.body.totalPoints,
        Date: Date.now()
    }
    return db.CheckIn.create(checkIn).then(created => res.json(created));
  },
  getCheckInResults: function(req, res) {
    db.User.find({ userName: req.user })
      .populate('checkInResults')
      .then(results => res.json(results));
  }
};
