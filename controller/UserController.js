const db = require('../models');

module.exports = {
    findUser: function() {
        db.User
            .find({})
    }
}