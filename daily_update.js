const mongoose = require('mongoose');
const db = require('./models');
const connection = mongoose.connection;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ecohabit';
mongoose.Promise = require('bluebird');
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	promiseLibrary: require('bluebird')
});

connection.once('open', function callback() {
	console.log('Running nightly database boolean reset so users can complete their check-ins!');
});

//run the db query to update the database boolean 
db.User.update({dailyCheck: true},{ $set: { dailyCheck: false } }).then(res => console.log('Reset!'));
